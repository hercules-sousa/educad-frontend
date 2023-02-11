import styles from "./message.module.css";

import NavBar from "../../components/NavBar";

const MessagePage = () => {
  return (
    <>
      <NavBar />

      <div className={styles["barra-historico"]}>
          <span className={styles["tela-inicial"]}><a href="tela-inicial.html">Home</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span className={styles["ultima-area-visitada"]}><a href="tela-inicial.html .conteiner2">Software</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span className={styles["ultima-disciplina-visitada"]}><a href="disciplinas-software.html">Disciplina</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span className={styles["disciplina-atual"]}><a href="disciplina-selecionada-material.html">Teste de Software</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span ><a href="#">Turma</a></span>
      </div>

      <div className={styles["dados-basicos-alunos"]}>
          <div className={styles["imagem-aluno"]}>
              <img src="https://source.unsplash.com/250x350/?teenage-girl" alt="" />
          </div>
          <div className={styles["dados-aluno"]}>
              <div className={styles["so-para-alinhar"]}>
                  <div>
                      <span>Disciplina: </span><p className={styles["nome-disciplina"]}>Teste de Software</p>
                  </div>
                  <div>
                      <span>Aluno(a): </span><p className={styles["aluno-disciplina"]}>Maria Clara Vasconcelos</p>
                  </div>
                  <div>
                      <span>Curso: </span><p className={styles["nome-curso"]}>Engenharia da Computação</p>
                  </div>
              </div>
          </div>
      </div>

      <div className={styles["falar-aluno"]}>
          <div className={styles["so-para-alinhar-aluno"]}>
              <div className={styles["nome-assunto"]}>
                  <input className={styles["nome"]} placeholder="Nome" type="text" />
                  <input className={styles["assunto"]} placeholder="Assunto" type="text" />
              </div>
              <div className={styles["mensagem-enviar"]}>
                  <input className={styles["mensagem"]} type="text" placeholder="Mensagem" />
                  <a className={styles["enviar-mensagem"]} href="">Enviar</a>
              </div>
          </div>
      </div>
    </>
  );
};

export default MessagePage;