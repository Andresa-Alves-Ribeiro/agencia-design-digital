import './style.css';

function Banner() {
    return (
        <section id='secao-banner'>
            <div id="imagemDeFundo" className="fundo-modo-claro"></div>
            <div className='texto-banner'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    );
}

export default Banner;