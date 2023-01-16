import './style.css';
import Logo from '../../assets/logo.png';

function Card(props) {
    return (
        <div id="card" className="card-modo-claro">
            <p className="primeiroParagrafo">{props.data}</p>
            <h4>{props.titulo}</h4>
            <p className="segundoParagrafo">{props.empresa}</p>
            <p>{props.paragrafo}</p>
        </div>
    );
}

export default Card;