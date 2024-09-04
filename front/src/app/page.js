"use client"
import "./styles.css";
import { useState } from 'react';
import FormularioPredicciones from '../components/PrediccionForm';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const [predicciones, setPredicciones] = useState([]);
  const router = useRouter();

  const manejarEnvioPredicciones = (datos) => {
    setPredicciones(datos);
    router.push('/top');
  };

  return (
    <div>
      <FormularioPredicciones onEnviarPredicciones={manejarEnvioPredicciones} />
    </div>
  );
}

