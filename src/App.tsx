import React from 'react';
import './App.css';

function App() {

  const options = [{value:1, label:'Documento Credito'},{value:2, label:'Documento Pagos'},{value:3, label:'Documento Firmas'},{value:4, label:'Documento Morosos'}];

  return (
    <div className="App">
      {options.map((x, key) => {
        return(
          <li key={x.value}>{x.label}</li>
        );
      })}
    </div>
  );
}

export default App;
