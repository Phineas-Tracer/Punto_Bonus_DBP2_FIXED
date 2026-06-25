import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;

  login: (
    token: string,
    user: User
  ) => void;

  logout: () => void;

  isAuthenticated: boolean;
}

const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );

interface Props {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: Props) {

  const [token, setToken] =
    useState<string | null>(null);

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {

    const savedToken =
      localStorage.getItem("token");

    const savedUser =
      localStorage.getItem("user");

    if (savedToken) {
      setToken(savedToken);
    }

    if (savedUser) {
      setUser(
        JSON.parse(savedUser)
      );
    }

  }, []);

  const login = (
    token: string,
    user: User
  ) => {

    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);
    setUser(user);
  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setToken(null);
    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated:
          !!token,
      }}
    >
      {children}
    </AuthContext.Provider>

  );
}

export function useAuth() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuth debe usarse dentro de AuthProvider"
    );
  }

  return context;
}