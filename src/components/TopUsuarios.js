"use client";
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Resultados from '@/components/Resultados';
import { DataTypes } from 'sequelize';

const TopUsuarios = () => {
  
  
  const [topUsuarios, setTopUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Placeholder: Datos simulados
    const usuariosSimulados = [
      { id: 1, nombre: 'Felipe Maierowicz', precision: 95 },
      { id: 2, nombre: 'Uriel Gandelman', precision: 90 },
      { id: 3, nombre: 'Alejandro Kretzig', precision: 85 }
    ];
    setTopUsuarios(usuariosSimulados);
  }, []);

  const handleShowRespuestas = (usuario) => {
    setSelectedUser(usuario);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const prediccionesSimuladas = [
    { id: 1, nombre: 'Felipe Maierowicz', nota: 8.5 },
    { id: 2, nombre: 'Uriel Gandelman', nota: 9.0 },
    { id: 3, nombre: 'Alejandro Kretzig', nota: 7.0 }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Top Usuarios</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Precisión</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {topUsuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.precision}%</td>
              <td>
                <Button variant="info" onClick={() => handleShowRespuestas(usuario)}>
                  Ver Respuestas
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Respuestas de {selectedUser?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Resultados predicciones={prediccionesSimuladas} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TopUsuarios;