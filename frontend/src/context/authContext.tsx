import type { ReactNode } from 'react'; 
import React, { createContext, useContext, useState, useEffect } from 'react';

// Definición de la interfaz del Usuario (puedes adaptarla según tu backend real)
export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

// Definición de la estructura del Contexto de Autenticación
interface AuthContextType {
  user: User | null;         // Información del usuario logueado
  token: string | null;      // Token JWT
  isAuthenticated: boolean;  // Estado de autenticación
  login: (token: string, user: User) => void; // Función para iniciar sesión
  logout: () => void;        // Función para cerrar sesión
}

// Creamos el contexto con un valor inicial indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Evita parpadeos en rutas protegidas mientras se lee localStorage

  // Fase de Persistencia: Cargar datos de localStorage al inicializar la app
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error al restaurar la sesión desde localStorage:', error);
        // Si los datos están corruptos, limpiamos para evitar errores continuos
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión (Guarda en estado y en localStorage)
  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
    setIsAuthenticated(true);
  };

  // Función para cerrar sesión (Limpia estado y localStorage)
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {/* No renderizamos la app hasta comprobar si había una sesión activa en localStorage */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir el contexto fácilmente en tus componentes/páginas
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};