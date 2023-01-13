import './App.css';
import Banner from './components/Banner/Banner';
import ExperienciaTrabalho from './components/ExperienciaTrabalho/ExperienciaTrabalho';
import Rodape from './components/Rodape/Rodape';
import Topo from './components/Topo/Topo';

function App() {
  return (
    <div className="App">
      <Topo />
      <Banner />
      <ExperienciaTrabalho />
      <Rodape />
    </div>
  );
}

export default App;
