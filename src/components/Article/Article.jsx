import React from "react";

import "./styles.css";
//dessa forma sendo exportada logo no inicio, economiza uma linha no final do codigo, que é "export default 'nome da pagina/classe' "

export function Article(props) {
  return (
    <article id="article">
      <img src={props.thumbnail} alt={props.title} width={250} height={250} />

      <div className="article-infos">
        <h2> {props.title}</h2>
        <h3> {props.provider} </h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
          reprehenderit ea quibusdam necessitatibus similique commodi quaerat
          accusamus consequatur deserunt recusandae corrupti, voluptatum
          temporibus beatae totam. Consequatur voluptate quasi qui at?
        </p>
      </div>
    </article>
  );
}
