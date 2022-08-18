import "./postagem.css";
import { Link } from "react-router-dom"

export default function Postagem({ post }) {
    return (

        <div className="iniPost">

            <img
                className="iniPostImg"
                src={post.foto}
                alt=""
            />

            <div className="iniPostTitulo">

                <Link to={post.link}>
                    <span>{post.info}</span>
                </Link>

            </div>

            <p class="iniPostDecricao">
                {post.descricao}
            </p>

        </div>

    )
}