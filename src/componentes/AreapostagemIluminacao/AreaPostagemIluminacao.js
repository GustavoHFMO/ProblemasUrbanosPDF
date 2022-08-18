import "./areapostagemiluminacao.css";
import PostagemMapa from "../postagemMapa/PostagemMapa";
import fotoPost1 from "../../imagem/fotoluz1.jpeg"
import fotoPost2 from "../../imagem/semafaro.jpeg"
import fotoPost3 from "../../imagem/luz.jpg"
export default function AreaPostagemIluminacao() {

  let postagem1 = {
    "info": "Rua Vinte e Quatro de Outubro",
    "descricao": " Essa rua apresenta uma lâmpada de poste queimada o que traz insegurança no deslocamento da população",
    "foto": fotoPost1,
    "mapa": "https://www.google.com/maps/embed?pb=!4v1658951811553!6m8!1m7!1sJ0xPdgoh1JAHoBiJ9RFURA!2m2!1d-7.403373584518879!2d-35.11199994789005!3f313.23355411198156!4f-37.01566459419429!5f0.7820865974627469"

  }

  let postagem2 = {
    "info": "Praça Ronaldo Ribeiro da Costa",
    "descricao": "Essa rua apresenta uma lâmpada de poste queimada, e por ser uma via de grande circulação ocasiona insegurança da população ",
    "foto": fotoPost2,
    "mapa": "https://www.google.com/maps/embed?pb=!4v1657825025144!6m8!1m7!1sAe-8NGgoNZpv9VCyCYDTNg!2m2!1d-7.40266332940273!2d-35.11673610024523!3f93.48491217504981!4f-15.877919412571174!5f0.7820865974627469"
  }

  let postagem3 = {
    "info": " Rua Vinte e Quatro de Outubro",
    "descricao": "Essa rua apresenta uma lâmpada de poste queimada",
    "foto": fotoPost3,
    "mapa":"https://www.google.com/maps/embed?pb=!4v1658951996608!6m8!1m7!1sQIKCInumd9g8trmZchHX5A!2m2!1d-7.403294756557398!2d-35.11233701808424!3f340.66285790244706!4f5.138991097102306!5f0.7820865974627469" ,
  }

   

  return (
    <>
      <div className="postsIluminacao">

        <PostagemMapa post={postagem1} />

        <PostagemMapa post={postagem2} />

        <PostagemMapa post={postagem3} />

       
      </div >
    </>
  )
}
