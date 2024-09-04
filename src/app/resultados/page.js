"use client";
import Resultados from '../components/resultados';
import { useRouter } from 'next/navigation'; 
import { useState, useEffect } from 'react';

export default function resultados() {
  
  const router = useRouter();
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    const prediccionesGuardadas = JSON.parse(localStorage.getItem('predicciones')); //placeholder
    if (prediccionesGuardadas) { //placeholder
      setPredicciones(prediccionesGuardadas); //placeholder
    } else { 
      router.push('/');
    }
  }, [router]);

  return (
    <div>
      <Resultados predicciones={predicciones} />
    </div>
  );
}
