export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
  username: string;
};

export type User = {
  _id: string;
  username: string;
  email: string;
  title?: string;
  city?: string;
  country?: string;
  about?: string;
  admin: boolean;
  image?: string;
  posts: string[];
  likes: string[];
  followers: string[];
  following: string[];
  visitors: string[];
};
