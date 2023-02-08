import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {

    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(props.corSecundaria, "0.6") }}>

            <input 
            value={props.corPrimaria} 
            onChange={evento => props.mudarCor(evento.target.value, props.id )} 
            type="color" 
            className='input-cor'
            />

            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                
                console.log("Renderizando Colaborador")
                
                return (<Colaborador 
                favorito={colaborador.favorito}
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                id={colaborador.id}
                nome={colaborador.nome} 
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
                />);})
                }
            </div>

        </section>
    )

}

export default Time