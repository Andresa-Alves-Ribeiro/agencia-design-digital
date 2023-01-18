import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import ExperienciaTrabalho from './components/ExperienciaTrabalho/ExperienciaTrabalho';
import Rodape from './components/Rodape/Rodape';
import Topo from './components/Topo/Topo';

export default function App() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <Banner ehTemaEscuro={ehTemaEscuro} />
      <ExperienciaTrabalho ehTemaEscuro={ehTemaEscuro} />
      <Rodape ehTemaEscuro={ehTemaEscuro} />
    </main>
  );
}