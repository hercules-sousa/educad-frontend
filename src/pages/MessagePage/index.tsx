import styles from "./message.module.css";

import NavBar from "../../components/NavBar";
import HistoryBar from "../../components/HistoryBar";

const MessagePage = () => {
  return (
    <>
      <NavBar />

      <HistoryBar />

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