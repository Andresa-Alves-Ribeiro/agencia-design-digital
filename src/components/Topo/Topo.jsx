import './style.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

function Topo() {
    return (
        <header>
            <img src={Logo} alt='Logo barbearia' className='logo'></img>

            <button className="btn-modo-claro">
                <img src={Moon} alt='ícone' className="btn-icone" />
            </button>
        </header>
    );
}

export default Topo;