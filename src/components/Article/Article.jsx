import React from "react";

import "./styles.css";
//dessa forma sendo exportada logo no inicio, economiza uma linha no final do codigo, que é "export default 'nome da pagina/classe' "

export function Article(props) {
  return (
    <article id="article">
      <img src={props.thumbnail} alt={props.title} />

      <div className="article-infos">
        <h2> {props.title}</h2>
        <h3> {props.provider} </h3>

        <p>{props.descripton}</p>
        <p>Link de acesso: {props.url} </p>
        {/* <p>Publicado em: {props.published}</p> */}
      </div>
    </article>
  );
}
