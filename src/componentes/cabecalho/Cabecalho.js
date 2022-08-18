import "./cabecalho.css"
import FotoFundo from "../../imagem/PF.png"

export default function Cabecalho() {
    return (

        <div className="cabecalho">

            <img
                className="cabecalhoImg"
                src={FotoFundo}
                alt=""
            />

        </div>
    )
}