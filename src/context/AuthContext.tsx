import React, { createContext, FC, useEffect, useState } from "react";

import { LoginCredentials, RegisterCredentials } from "../types";
import api from "../api";
import { multiGet, multiSet, removeMultiple } from "../utils/AsyncStorage";

interface AuthContextState {
  userId: string | null;
  token: string | null;
  loading: boolean;
  userLoading: boolean;
  error: boolean;
  login: (credentials: LoginCredentials) => void;
  register: (credentials: RegisterCredentials) => void;
  logout: () => void;
  clearError: () => void;
}

const contextDefaultValue: AuthContextState = {
  userId: null,
  token: null,
  loading: false,
  userLoading: false,
  error: false,
  login: () => {},
  register: () => {},
  logout: () => {},
  clearError: () => {},
};

export const AuthContext = createContext<AuthContextState>(contextDefaultValue);

export const AuthContextProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(contextDefaultValue.token);
  const [userId, setUserId] = useState<string | null>(
    contextDefaultValue.userId
  );
  const [loading, setLoading] = useState<boolean>(contextDefaultValue.loading);
  const [userLoading, setUserLoading] = useState<boolean>(
    contextDefaultValue.userLoading
  );
  const [error, setError] = useState<boolean>(contextDefaultValue.error);

  const register = async (credentials: RegisterCredentials) => {
    setError(false);
    setLoading(true);
    try {
      const { email, username, password } = credentials;
      const response = await api.post("/auth/register", {
        email,
        username,
        password,
      });

      await multiSet(
        ["@MLS/Token", response.data.token],
        ["@MLS/UserId", response.data.userId]
      );

      setToken(response.data.token);
      setUserId(response.data.userId);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const login = async (credentials: LoginCredentials) => {
    setError(false);
    setLoading(true);
    try {
      const { email, password } = credentials;
      const response = await api.post("/auth/login", {
        email,

        password,
      });

      await multiSet(
        ["@MLS/Token", response.data.token],
        ["@MLS/UserId", response.data.userId]
      );

      setToken(response.data.token);
      setUserId(response.data.userId);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const logout = async () => {
    try {
      await removeMultiple("@MLS/Token", "@MLS/UserID");

      setToken(null);
      setUserId(null);
    } catch (error) {
      setError(true);
    }
  };

  const clearError = () => {
    setError(false);
  };

  const loadToken = async () => {
    setUserLoading(true);
    try {
      const values: any = await multiGet("@MLS/Token", "@MLS/UserId");
      const token = values[0][1];
      const userId = values[1][1];

      if (token && userId) {
        setToken(token);
        setUserId(userId);
      }
    } catch (error) {
      setError(true);
    }
    setUserLoading(false);
  };

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        token,
        userId,
        userLoading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
