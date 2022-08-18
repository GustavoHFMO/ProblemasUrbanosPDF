import "./barratopo.css"
import { Link } from "react-router-dom"
import {FiHome} from "react-icons/fi"

export default function BarraTopo() {
    return (
        <>
            <div className="topo">
                <div className="topoEsquerda"></div>


                <div className="topCentro">
                    
                    <ul className="topoLista">
                        <Link to="/">
                            <li className="topoItem"> < FiHome size="50px" color="white" /> </li>
                        </Link>
                    </ul>

                </div>

                <div className="topoDireita"></div>

            </div>
        </>
    )
}