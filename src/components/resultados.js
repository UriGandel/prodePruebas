import { useState, useEffect } from 'react';

const Resultados = ({ predicciones }) => {
  const [notasReales, setNotasReales] = useState([]);
  const [precision, setPrecision] = useState(0);

  useEffect(() => {
    const fetchNotasReales = async () => {
      try {
        const response = await fetch('/api/notas-reales');
        if (response.ok) {
          const data = await response.json();
          setNotasReales(data.notas);
        } else {
          console.error('Error fetching notas reales');
        }
      } catch (error) {
        console.error('Error fetching notas reales:', error);
      }
    };

    fetchNotasReales();
  }, []);

  useEffect(() => {
    if (notasReales.length > 0) {
      const total = predicciones.length;
      const correctos = predicciones.filter((pred) => {
        const notaReal = notasReales.find(nota => nota.id === pred.id)?.nota;
        return notaReal && Math.round(pred.nota) === Math.round(notaReal);
      }).length;

      const precisionCalculada = ((correctos / total) * 100).toFixed(2);
      setPrecision(precisionCalculada);
    }
  }, [predicciones, notasReales]);

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