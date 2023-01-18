import './style.css';
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Dribble from '../../assets/dribble.png';
import Behance from '../../assets/behance.png';
import Google from '../../assets/google-plus.png';

export default function Rodape(props) {
    return (
        <footer className={props.ehTemaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
            <img src={Logo} alt='Logo agencia' className='logo'></img>

            <p className="paragrafo">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online
                utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

            <div className="iconesRodape">
                <img src={Facebook} alt='ícone' />
                <img src={Twitter} alt='ícone' />
                <img src={Linkedin} alt='ícone' />
                <img src={Dribble} alt='ícone' />
                <img src={Behance} alt='ícone' />
                <img src={Google} alt='ícone' />
            </div>

            <p className={props.ehTemaEscuro ? "copyright-modo-escuro" : "copyright-modo-claro"}>Copyright 2022 © <span>Andresa A Ribeiro</span></p>
        </footer>
    );
}