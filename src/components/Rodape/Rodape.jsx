import './style.css';
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Dribble from '../../assets/dribble.png';
import Behance from '../../assets/behance.png';
import Google from '../../assets/google-plus.png';

function Rodape() {
    return (
        <div>
            <header>
                <div className='limitar-secao'>
                    <img src={Logo} alt='Logo agencia' className='logo'></img>

                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online 
                        utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

                    <div>
                        <img src={Facebook} alt='ícone' className="btn-icone" />
                        <img src={Twitter} alt='ícone' className="btn-icone" />
                        <img src={Linkedin} alt='ícone' className="btn-icone" />
                        <img src={Dribble} alt='ícone' className="btn-icone" />
                        <img src={Behance} alt='ícone' className="btn-icone" />
                        <img src={Google} alt='ícone' className="btn-icone" />
                    </div>

                    <p>Copyright 2022 © <span>Andresa A Ribeiro</span></p>
                </div>
            </header>
        </div>
    );
}

export default Rodape;