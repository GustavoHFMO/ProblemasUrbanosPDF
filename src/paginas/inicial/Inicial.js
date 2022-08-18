import Cabecalho from '../../componentes/cabecalho/Cabecalho';
import AreaPostagem from '../../componentes/areaPostagem/AreaPostagem';
import "./inicial.css"

export default function Inicial() {
    return (
        <>
            <Cabecalho />

            <div className='appInicial'>
                <AreaPostagem />
            </div>
        </>
    )


}