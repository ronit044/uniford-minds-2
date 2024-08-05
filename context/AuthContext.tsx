import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
    setLoading(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoading(false);
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isAuthenticated = await fakeAuthCheck();
      setIsLoggedIn(isAuthenticated);
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const fakeAuthCheck = () =>
  new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(false); // Simulate not authenticated
    }, 1000);
  });

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
