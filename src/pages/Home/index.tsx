import react from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <nav className="menu">
          <a href="#">
            <span className="menu-logo">Edu</span>cad
          </a>
          <img
            alt="Foto perfil"
            className="menu-perfil"
            src="https://source.unsplash.com/75x75/?teenage-man"
          />
        </nav>

        <div className="so-para-alinhar">
          <div className="boas-vindas">
            <p className="texto-gradiente-titulo texto-boasvindas">
              Olá, José! Acesse suas turmas e organize seus estudos de forma
              eficiente
            </p>
            <p className="subtexto">
              Design in the browser and delivered natively in your app. No dev
              resources or app update is requeired Rover drives mobile
              engagement and monetization with better mobile campaigns
            </p>
            <div className="botoes">
              <button type="button" className="turmas-virtuais">
                Minhas turmas virtuais
              </button>
              <button type="button" className="meus-estudos">
                Meus estudos
              </button>
            </div>
          </div>

          <img
            className="imagem-boas-vindas"
            src="assets/imagens/Group 26.png"
            alt=""
          />
        </div>
      </div>

      <div className="container2">
        <div className="disciplinas">
          <h2 className="texto-gradiente texto-disciplinas">
            Disciplinas por área
          </h2>
          <div className="lista-areas">
            <div>
              <a className="materia-software" href="disciplinas-software.html">
                <img src="assets/imagens/Rectangle 40.png" alt="" />
                software
              </a>
            </div>
            <div>
              <a className="materia-hardware" href="#">
                <img src="assets/imagens/Rectangle 41.png" alt="" />
                hardware
              </a>
            </div>
            <div>
              <a className="materia-exatas" href="disciplinas-exatas.html ">
                <img src="assets/imagens/Rectangle 42.png" alt="" />
                exatas
              </a>
            </div>
            <div>
              <a className="materia-humanas" href="disciplinas-humanas.html">
                <img src="assets/imagens/Rectangle 50 (1).png" alt="" />
                humanas
              </a>
            </div>
          </div>
        </div>

        <div className="edital">
          <div className="texto-edital">
            <h2 className="texto-gradiente">Editais abertos</h2>
            <p className="titulo-noticia">
              Confira os editais abertos para alunos do curso de Engenharia de
              Computação
            </p>
            <p className="texto-noticia">
              With Rover, you can easily launch new, multi-screen, native mobile
              experiences. Design engaging content in the browser, and deploy
              instantly through your app at the right time and place.
            </p>
            <a className="link" href="#">
              Ver todos os editais -{">"}
            </a>
          </div>
          <div className="imagem-edital">
            <img src="assets/imagens/image 3.png" alt="" />
          </div>
        </div>

        <div className="edital">
          <div className="texto-edital">
            <h2 className="texto-gradiente">Oportunidades de estágios</h2>
            <p className="titulo-noticia">
              Veja os estágios disponíveis na área de Computação
            </p>
            <p className="texto-noticia">
              With Rover, you can easily launch new, multi-screen, native mobile
              experiences. Design engaging content in the browser, and deploy
              instantly through your app at the right time and place.
            </p>
            <a className="link" href="#">
              Ver todos os editais -{">"}
            </a>
          </div>
          <div className="imagem-edital">
            <img src="assets/imagens/monitoring 1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container3"></div>
    </>
  );
};

export default Home;
