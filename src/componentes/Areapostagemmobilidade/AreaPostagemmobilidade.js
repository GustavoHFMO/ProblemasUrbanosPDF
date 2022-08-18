import "./areapostagemmobilidade.css";
import PostagemMapa from "../postagemMapa/PostagemMapa";
import fotoPost1 from "../../imagem/fotinha.jpg" ;
import fotoPost2 from "../../imagem/mibilidade2.jpeg";
import fotoPost3 from "../../imagem/fotinha2.jpg";

export default function AreaPostagemmobilidade() {


    let postagem1 = {
        "info": "Praça Ronaldo Ribeiro da Costa",
        "descricao": " Essa rua apresenta faixa de pedestre apagada, o que pode ocasionar acidentes devido a grande circulação de pessoas. ",
        "foto": fotoPost1,
        "mapa": "https://www.google.com/maps/embed?pb=!4v1658946325620!6m8!1m7!1sAe-8NGgoNZpv9VCyCYDTNg!2m2!1d-7.40266332940273!2d-35.11673610024523!3f118.42923716268075!4f-12.83106943824312!5f0.7820865974627469"
        
    }

    let postagem2 = {
        "info": "Rua Fernando Cunha Lima",
        "descricao": " Essa rua apresenta imperfeições em sua pavimentação. ",
        "foto": fotoPost2,
        "mapa": "https://www.google.com/maps/embed?pb=!4v1658945945963!6m8!1m7!1s8TVxhAFvMoKCtABZkFHqfw!2m2!1d-7.403665849064883!2d-35.11115437005477!3f222.00104547911815!4f-33.49727803517278!5f0.7820865974627469"
    }
    
    let postagem3 = {
        "info": "Rua Fernando Cunha Lima",
        "descricao": "Essa rua apresenta falta de sinalização e por ser uma via de grande circulação pode ocasionar acidentes. ",
        "foto": fotoPost3,
        "mapa": "https://www.google.com/maps/embed?pb=!4v1658946935437!6m8!1m7!1sUzWLeNXIs7pGyjP8CstbCg!2m2!1d-7.404654704353357!2d-35.11111012641988!3f131.4516460894351!4f-7.511631403808508!5f0.7820865974627469"
        ,
    }

    return (
        <>
            <div className="postsMobilidade">

                <PostagemMapa post={postagem1} />

                <PostagemMapa post={postagem2} />

                <PostagemMapa post={postagem3} />


            </div >
        </>
    )
}
