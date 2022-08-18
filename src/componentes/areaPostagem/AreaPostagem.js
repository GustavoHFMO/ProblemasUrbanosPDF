import "./areapostagem.css"
import Postagem from "../postagem/Postagem"
import fotoPost1 from "../../imagem/mo.jpg";
import fotoPost2 from "../../imagem/san.png";
import fotoPost3 from "../../imagem/cas.jpg";


export default function AreaPostagem() {

    let postagem1 = {
        "info": "Mobilidade Urbana",
        "descricao": "Mobilidade urbana pode ser entendida como a maneira das pessoas transitarem nos espaços urbanos que garante o deslocamento de pessoas de uma forma segura, confortável e eficiente, seja de maneira individual ou coletiva.",
        "foto": fotoPost1,
        "link": "/mobilidade"
    }

    let postagem2 = {
        "info": "Saneamento Básico",
        "descricao": "Saneamento é uma palavra derivada do latim que significa tornar algo sustentável ou higiênico. O Saneamento Básico é oficialmente descrito pelo Ministério do Meio Ambiente (MMA) como “Conjunto de serviços, infraestruturas e instalações de abastecimento de água, esgotamento sanitário, limpeza urbana e manejo de resíduos sólidos e drenagem de águas pluviais urbanas''.",
        "foto": fotoPost2,
        "link": "/saneamento"
    }

    let postagem3 = {
        "info": "Iluminação Pública",
        "descricao": "Iluminação pública vem a ser o sistema de iluminação noturna das cidades, ou seja está diretamente ligada à cidadania pois uma cidade iluminada é essencial para a população desfrutar plenamente dos espaços públicos à noite. Atualmente o órgão fiscalizador dos serviços de energia elétrica no Brasil é a Agência Nacional de Energia Elétrica-ANEEL",
        "foto": fotoPost3,
        "link": "/iluminacao"
    }

    return (
        <>
            <div className="postagens">

                <Postagem post={postagem1} />

                <Postagem post={postagem2} />

                <Postagem post={postagem3} />

            </div>

        </>
    )
}