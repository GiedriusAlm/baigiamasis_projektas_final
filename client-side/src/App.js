import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './molecule/table/Table';
import Button from './atom/button/Button';
import Modal from './molecule/modal/Modal';
import Form from './molecule/form';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/customers').then((response) => {
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='container'>
      <h1 className='title'>Event Registry</h1>
      <Button action={openModal} />

      {modalOpen && (
        <Modal onClose={closeModal}>
          <Form setData={setData} onClose={closeModal} />
        </Modal>
      )}

      {!loading && <Table data={data} setData={setData} />}
    </div>
  );
}

export default App;
