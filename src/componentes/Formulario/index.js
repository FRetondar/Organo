import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";


const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [id, setId] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [cor, setCor] = useState('')

    const favorito = false

    const aoSalvar = (evento) => {
        evento.preventDefault();
        setId(uuidv4())
        props.aoColaboradorCadastrado({nome, cargo, imagem, time, id, favorito});
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha Os Dados Necessários</h2>

                <Campo
                    type="text"
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite Seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <Campo
                    type="text"
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite Seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <Campo
                    type="text"
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite O Endereço Da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: cor})
            }}>
                <h2>Preencha Os Dados Necessários</h2>

                <Campo 
                    obrigatorio={true} 
                    type="text"
                    label="Nome" 
                    placeholder="Digite O Nome Do Time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />

                <Campo
                    obrigatorio={true} 
                    type="color"
                    label="Cor" 
                    placeholder="Digite A Cor Do Time"
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}
                />

                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )

}

export default Formulario;