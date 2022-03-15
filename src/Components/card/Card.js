import './CardStyle.css'
import chuva from '../Imgs/chuva.png'
import Sol from '../Imgs/sol.png'
import { useState } from 'react'

export default function Card(props) {
    const[teste,setTeste] = useState();
    const imgs = [chuva,Sol];
    return (
        <div className='Container'>
            <div className="Content">
                <h3>Clima nas suas Coordenadas ({props.descricao})</h3>
                <ul>
                    <li>Cidade: {props.cidade}</li>
                    <li>Temperatura máxima: G° {props.tempmax}</li>
                    <li>Temperatura minima: G° {props.tempmin}</li>
                    <li>Pressão: x {props.pressao}hpa </li>
                    <li>Umidade: {props.umidade}x%</li>
                    {imgs.map((imagem)=>{

                        if(props.tempmax > 20){
                             return (<img src={Sol}/>)
                        }
                        else if(props.tempmax < 20){
                            return(<img src={chuva}/>)
                        }
                    })}
                </ul>
            </div>

        </div>
    )
}