"use client";
import { useState, useEffect } from 'react';

const Resultados = ({ predicciones }) => {
  const [notasReales, setNotasReales] = useState([]);
  const [precision, setPrecision] = useState(0);

  useEffect(() => {
    // Placeholder
    const notas = [
      { id: 1, nota: 8.5 },
      { id: 2, nota: 9.0 },
      { id: 3, nota: 7.0 }
    ];
    setNotasReales(notas);

    const total = predicciones.length;
    const correctos = predicciones.filter((pred) => {
      const notaReal = notas.find(nota => nota.id === pred.id)?.nota;
      return notaReal && Math.round(pred.nota) === Math.round(notaReal);
    }).length;

    const precisionCalculada = ((correctos / total) * 100).toFixed(2);
    setPrecision(precisionCalculada);
  }, [predicciones]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Resultados</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Predicción</th>
            <th>Nota Real</th>
            <th>¿Acertó?</th>
          </tr>
        </thead>
        <tbody>
          {predicciones.map((prediccion) => {
            const notaReal = notasReales.find(nota => nota.id === prediccion.id)?.nota;
            return (
              <tr key={prediccion.id}>
                <td>{prediccion.nombre}</td>
                <td>{prediccion.nota}</td>
                <td>{notaReal}</td>
                <td>
                  {Math.round(prediccion.nota) === Math.round(notaReal) ? '✅' : '❌'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-center">
        <span className="font-weight-bold">Precisión Total:</span> {precision}%
      </p>
    </div>
  );
};

export default Resultados;