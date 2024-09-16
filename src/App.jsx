import React, { useEffect, useState } from "react";

import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { ThreeDots } from "react-loader-spinner";

// import article1Img from "./assets/imgs/article1.png";
// import article2Img from "./assets/imgs/article2.png";
// import article3Img from "./assets/imgs/article3.png";
import axios from "axios";

//Um componente em classe no React ele herda da classe React que antes foi importada e renderiza o HTML no método render()

// Um componente funcional que retorna HTML
export function App() {
  //esse método return serve para renderizar os componentes na tela.
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      const newsData = (await response).data.results;

      console.log(newsData);
      setNews(newsData);
    }

    loadNews();
  }, []);
  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.news_site}
                descripton={article.summary}
                thumbnail={article.image_url}
                url={article.url}
                // published={article.published_at}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
