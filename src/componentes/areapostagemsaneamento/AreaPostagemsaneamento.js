import "./Areapostagemsaneamento.css";
import PostagemMapa from "../postagemMapa/PostagemMapa";
import fotoPost1 from "../../imagem/san.jpg";
import fotoPost2 from "../../imagem/mento.jpg"

export default function AreaPostagemsaneamento() {

    let postagem1 = {
        "info": "Avenida Henrique Vieira de Melo  ",
        "descricao": "Foto retirada em época de sol, porém no inverno a população sofre com alagamento devido a falta de saneamento básico ,esse fato ocasiona dificuldade de locomoção.",
        "foto": fotoPost2,
        "mapa": "https://www.google.com/maps/embed?pb=!4v1658952887504!6m8!1m7!1slRe3LSV9r2lAozZIQMsGMw!2m2!1d-7.400539321937583!2d-35.10108225262529!3f260.0468973915765!4f-20.090053775494823!5f0.7820865974627469",
        
    }

    let postagem2 = {
        "info": "Rua geroncio pereira chaves ",
        "descricao": "Foto retirada em época de chuva, e é possível notar alagamento o que ocasiona dificuldade de locomoção ",
        "foto": fotoPost1,
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.5678746998149!2d-35.10018724201193!3d-7.398475598665449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac858954668eef%3A0x6e85d60dd88fcdb4!2sPedras%20de%20Fogo%20-%20PB%2C%2058328-000!5e1!3m2!1spt-BR!2sbr!4v1658953179058!5m2!1spt-BR!2sbr"
    }

    return (
        <>
            <div className="postsSaneamento">

                <PostagemMapa post={postagem1} />

                <PostagemMapa post={postagem2} />

              
            </div >
        </>
    )
}