import React, { useState } from 'react';

function App() {
  const [ingresos, setIngresos] = useState(8000);
  const [gastos, setGastos] = useState(4200);

  const balance = ingresos - gastos;

  const agregarIngreso = () => {
    setIngresos(ingresos + 1000);
  };

  const agregarGasto = () => {
    setGastos(gastos + 500);
  };

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial',
      maxWidth: '600px',
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#2c3e50' }}>📊 Finanzas Personales</h1>

      <div style={{ margin: '1rem 0' }}>
        <p><strong>💰 Ingresos:</strong> ${ingresos}</p>
        <p><strong>💸 Gastos:</strong> ${gastos}</p>
        <p><strong>📈 Balance:</strong> ${balance}</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
        <button onClick={agregarIngreso} style={estiloBoton}>➕ Agregar Ingreso</button>
        <button onClick={agregarGasto} style={{ ...estiloBoton, backgroundColor: '#e74c3c' }}>➖ Agregar Gasto</button>
      </div>

      <h2 style={{ color: '#34495e' }}>📅 Resumen Mensual</h2>
      <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#ecf0f1' }}>
            <th>Mes</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Enero</td><td>+$1,200</td></tr>
          <tr><td>Febrero</td><td>+$800</td></tr>
          <tr><td>Marzo</td><td>−$300</td></tr>
        </tbody>
      </table>
    </div>
  );
}

const estiloBoton = {
  padding: '10px 20px',
  backgroundColor: '#27ae60',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default App;
