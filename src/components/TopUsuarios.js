"use client";
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Resultados from '@/components/Resultados';
<<<<<<< HEAD
=======

>>>>>>> a5665fe20446b86b03b4f04b54c9de22f2e96644

const TopUsuarios = () => {
  const [topUsuarios, setTopUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTopUsuarios = async () => {
      try {
        const response = await fetch('/api/topUsuarios');
        if (response.ok) {
          const data = await response.json();
          setTopUsuarios(data.usuarios);
        } else {
          console.error('Error fetching top usuarios');
        }
      } catch (error) {
        console.error('Error fetching top usuarios:', error);
      }
    };

    fetchTopUsuarios();
  }, []);

  const handleShowRespuestas = (usuario) => {
    setSelectedUser(usuario);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleSaveUsuarios = async () => {
    try {
      const response = await fetch('/api/topUsuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuarios: topUsuarios }),
      });

      if (response.ok) {
        console.log('Usuarios guardados exitosamente');
      } else {
        console.error('Error guardando usuarios');
      }
    } catch (error) {
      console.error('Error guardando usuarios:', error);
    }
  };

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

      <Button variant="primary" onClick={handleSaveUsuarios}>
        Guardar Usuarios
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Respuestas de {selectedUser?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Resultados predicciones={selectedUser?.predicciones || []} />
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