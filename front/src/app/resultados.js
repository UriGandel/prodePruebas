"use client"
import TablaResultados from '../components/TablaResultados';
import { useRouter } from 'next/navigation'; 
import { useState, useEffect } from 'react';

export default function resultados() {
  const router = useRouter();
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    // Obtener predicciones desde el almacenamiento local para simular la persistencia
    const prediccionesGuardadas = JSON.parse(localStorage.getItem('predicciones'));
    if (prediccionesGuardadas) {
      setPredicciones(prediccionesGuardadas);
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <div>
      <TablaResultados predicciones={predicciones} />
    </div>
  );
}
