import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Perfil from './components' //importando a função default do arquivo index (não precisa especificar o arquivo quando ele tem o nome de "index", somente a pasta)
import Formulario from './components/form'

function App() { //aqui é onde virá a parte JS
  const [formvisivivel, setFormvisivel] = useState(true);

  return ( //aqui é onde virá a parte html
    //<Constname/> serve para utilziar o codigo da função importada de outro arquivo 
    <>
      <Perfil />
      {formvisivivel && (<Formulario />)}
      <button onClick={()=> setFormvisivel(!formvisivivel)} type='button'>Toggle Button</button>
    </>
  )
}

export default App
