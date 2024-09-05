import React from "react";

import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import article1Img from "./assets/imgs/article1.png";
import article2Img from "./assets/imgs/article2.png";
import article3Img from "./assets/imgs/article3.png";

//Um componente em classe no React ele herda da classe React que antes foi importada e renderiza o HTML no método render()

// Um componente funcional que retorna HTML
class App extends React.Component {
  //esse método return serve para renderizar os componentes na tela.
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article
            title="Design Dashboards"
            provider="NASA"
            thumbnail={article1Img}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            thumbnail={article2Img}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="SpaceFlightNow"
            thumbnail={article3Img}
          />
          <Article
            title="Design Dashboards"
            provider="NASA"
            thumbnail={article1Img}
          />
        </section>
      </>
    );
  }
}

export default App;
