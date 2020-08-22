import React, {Fragment} from 'react';
import './tailwind.generated.css'


function App() {
  return (
    <Fragment>  
        <h2 className="encabezado">React con Tailwind CSS</h2>
        <p className="mx-2 mb-3 text-black-500 text-xl">El className "encabezado" es personalizado en el archivo tailwind.css</p>
    </Fragment>
  );
}

export default App;
