"use client";

import "./globals.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Login from '../components/Login';

export default function RootLayout({ children }) {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token'); // Placeholder
    const prediccionesGuardadas = localStorage.getItem('predicciones'); // Placeholder

    if (storedToken) {
      setToken(storedToken);
      if (prediccionesGuardadas) {
        router.push('/top'); // Redirigir al top de usuarios
      }
    }
  }, [router]);

  const handleLogin = (token) => {
    setToken(token);
  };

  if (!token) {
    return (
      <html lang="es-us">
        <body>
          <Login onLogin={handleLogin} />
        </body>
      </html>
    );
  }

  return (
    <html lang="es-us">
      <body>{children}</body>
    </html>
  );
}