"use client"
import { useState, useEffect } from 'react';

const FormularioPredicciones = ({ onEnviarPredicciones }) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    // Simulación de estudiantes
    const estudiantesSimulados = [
      { id: 1, nombre: 'Felipe Maierowicz' },
      { id: 2, nombre: 'Uriel Gandelman' },
      { id: 3, nombre: 'Alejandro Kretzig' }
    ];

    setEstudiantes(estudiantesSimulados);
    setPredicciones(estudiantesSimulados.map(est => ({ id: est.id, nota: '' })));
  }, []);

  const manejarCambio = (id, evento) => {
    const valores = [...predicciones];
    const index = valores.findIndex(pred => pred.id === id);
    valores[index].nota = evento.target.value;
    setPredicciones(valores);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    localStorage.setItem('predicciones', JSON.stringify(predicciones)); // PLACEHOLDER
    onEnviarPredicciones(predicciones);
  };

  return (
    <form onSubmit={manejarEnvio} className="container mt-5">
      <h2 className="text-center mb-4">Predicción de Notas</h2>
      {estudiantes.map((estudiante) => (
        <div key={estudiante.id} className="row mb-3">
          <div className="col">
            <label>{estudiante.nombre}</label>
            <input
              type="number"
              name={`nota-${estudiante.id}`}
              placeholder="Nota"
              value={predicciones.find(pred => pred.id === estudiante.id)?.nota || ''}
              onChange={(evento) => manejarCambio(estudiante.id, evento)}
              className="form-control"
              required
              min="0"
              max="10"
              step="0.1"
            />
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-success">Enviar Predicciones</button>
    </form>
  );
};

export default FormularioPredicciones;
