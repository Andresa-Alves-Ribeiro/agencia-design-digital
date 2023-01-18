import './style.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

function Topo(props) {
    return (
        <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
            <img src={Logo} alt='Logo barbearia' className='logo'></img>

            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
                <img src={props.ehTemaEscuro ? Sun : Moon} alt='ícone' className="btn-icone" />
            </button>
        </header>
    );
}

export default Topo;