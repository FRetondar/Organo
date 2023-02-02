import './Rodapé.css'

const Rodape = (props) => {

    return (
        <footer className='footer'>
            <div className='redes'>
                <a href='https://www.facebook.com/felipe.retondar' target="_blank" rel='noreferrer'>
                    <img src='/imagens/fb.png' alt='Facebook'/>
                </a>

                <a href='https://twitter.com/FRetondar' target="_blank" rel='noreferrer'>
                    <img src='/imagens/tw.png' alt='Twitter'/>
                </a>

                <a href='https://www.instagram.com/felipe_retondar/' target="_blank" rel='noreferrer'>
                    <img src='/imagens/ig.png' alt='Instagram'/>
                </a>
            </div>

            <div>
                <img src='/imagens/logo.png' alt='Logo'/>
            </div>

            <p>Desenvolvido por Felipe Retondar</p>
        </footer>
    )

}

export default Rodape