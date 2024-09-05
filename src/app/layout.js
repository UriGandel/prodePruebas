"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from '@/components/Login';
import Register from '@/components/Register';

export default function RootLayout({ children }) {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const prediccionesGuardadas = localStorage.getItem('predicciones');

    if (storedToken) {
      setToken(storedToken);
      if (prediccionesGuardadas) {
        router.push('/top');
      }
    }
  }, [router]);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleRegister = (token) => {
    setToken(token);
  };

  if (!token) {
    return (
      <html lang="es-us">
        <body>
          {showRegister ? (
            <Register onRegister={handleRegister} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
          <div className="text-center mt-3">
            <button
              className="btn btn-link"
              onClick={() => setShowRegister(!showRegister)}
            >
              {showRegister ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
            </button>
          </div>
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