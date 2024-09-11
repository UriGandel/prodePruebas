"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormularioPredicciones from '@/components/PrediccionForm';
import axios from 'axios';

export default function Home() {
  const [predicciones, setPredicciones] = useState([]);
  const router = useRouter();

  const manejarEnvioPredicciones = async (datos) => {
    const precision = calcularPrecision(datos); // Asumiendo que tienes una función para calcular la precisión
    setPredicciones(datos);
    await fetch('/api/predicciones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ datos, precision }),
    });
    router.push('/top');
  };

  return (
    <div>
      <FormularioPredicciones onEnviarPredicciones={manejarEnvioPredicciones} />
    </div>
  );
}

function calcularPrecision(datos) {
  // Implementa la lógica para calcular la precisión aquí
  return 0.95; // Ejemplo de precisión
}