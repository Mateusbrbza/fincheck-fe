import { createContext, useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { localStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/usersService";
import { httpClient } from "../services/httpClient";

export interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return Boolean(storedAccessToken);
  });

  // const setAccessToken = useCallback((accessToken: string) => {
  //   httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
  // }, []);

  // useEffect(() => {
  //   const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  //   if (storedAccessToken) {
  //     setAccessToken(localStorageKeys.ACCESS_TOKEN);
  //   }
  // }, [setAccessToken]);

  useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
