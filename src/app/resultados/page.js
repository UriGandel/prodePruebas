"use client";
import Resultados from '../components/resultados';
import { useRouter } from 'next/navigation'; 
import { useState, useEffect } from 'react';

export default function ResultadosPage() {
  const router = useRouter();
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    const fetchPredicciones = async () => {
      try {
        const response = await fetch('/api/predicciones');
        if (response.ok) {
          const data = await response.json();
          setPredicciones(data.predicciones);
          localStorage.setItem('predicciones', JSON.stringify(data.predicciones));

        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Error fetching predicciones:', error);
        router.push('/');
      }
    };

    fetchPredicciones();
  }, [router]);

  return (
    <div>
      <Resultados predicciones={predicciones} />
    </div>
  );
}