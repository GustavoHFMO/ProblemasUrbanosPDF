import "./postagemmapa.css";

export default function PostagemMapa({ post }) {
    return (

        <div className="post">

            <div className="postQuadro">

                <img
                    className="postImg"
                    src={post.foto}
                    alt=""
                />

                <iframe src={post.mapa} />

            </div>

            <div className="postTitulo">
                <span>{post.info}</span>
            </div>

            <div className="postDecricao">
                <p>{post.descricao}</p>
            </div>


        </div>

    )
}