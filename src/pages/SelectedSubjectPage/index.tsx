import { useState } from "react";

import styles from "./subject.module.css";

import SubjectImage from '../../assets/Imagem-dados-disciplina.png';

const SelectedSubjectPage = () => {
  const OPTION_MATERIAIS = 1;
  const OPTION_ATIVIDADES = 2;
  const OPTION_TURMA = 3;

  const [selectedOption, setSelectedOption] = useState(OPTION_MATERIAIS);

  return (
    <>
      <nav className={styles["menu"]}>
          <a href="tela-inicial.html"><span className={styles["menu-logo"]}>Edu</span>cad</a>
          <img alt="Foto perfil" className={styles["menu-perfil"]} src="https://source.unsplash.com/75x75/?teenage-man" />
      </nav>

      <div className={styles["barra-historico"]}>
          <span className={styles["tela-inicial"]}><a href="tela-inicial.html">Home</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span className={styles["ultima-area-visitada"]}><a href="tela-inicial.html .conteiner2">Software</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span className={styles["ultima-disciplina-visitada"]}><a href="disciplinas-software.html">Disciplina</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span className={styles["disciplina-atual"]}><a href="disciplina-selecionada-material.html">Teste de Software</a></span>
          <span className={styles["sinal-ultimo-visitado"]}>&gt;</span>
          <span ><a href="#">Material</a></span>
      </div>

      <div className={styles["dados-basicos"]}>
        <div className={styles["imagem-disiciplina"]}>
          <img src={SubjectImage} alt="" />
        </div>

        <div className={styles["dados-disciplinas"]}>
          <div className={styles["so-para-alinhar"]}>
            <div>
                <span>Disciplina: </span><p className={styles["nome-disciplina"]}>Teste de Software</p>
            </div>
            <div>
                <span>Professor(a): </span><p className={styles["professor-disciplina"]}>Mirna da Silva</p>
            </div>
            <div>
                <span>Contato: </span><p className={styles["email-professor"]}>mirna.silva@ifpb.edu.br</p>
            </div>
            <div>
                <span>Curso: </span><p className={styles["nome-curso"]}>Engenharia da Computação</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["opcoes-disciplina"]}>
        <div className={selectedOption === OPTION_MATERIAIS ? styles["opcao-ativa"] : ""}>
          <button type="button" onClick={() => setSelectedOption(OPTION_MATERIAIS)}>Materiais</button>
        </div>
        <div className={selectedOption === OPTION_ATIVIDADES ? styles["opcao-ativa"] : ""}>
          <button type="button" onClick={() => setSelectedOption(OPTION_ATIVIDADES)}>Atividades</button>
        </div>
        <div className={selectedOption === OPTION_TURMA ? styles["opcao-ativa"] : ""}>
          <button type="button" onClick={() => setSelectedOption(OPTION_TURMA)}>Turma</button>
        </div>
      </div>

      {selectedOption === OPTION_MATERIAIS ? (
        <>
          <h2 className={styles["section-title"]}>vídeos</h2>

          <div className={styles["videos"]}>        
            <div className={styles["colecao"]}>
              <div className={styles["video1"]}>Vídeo 1</div>
              <div className={styles["video2"]}>Vídeo 2</div>
              <div className={styles["video3"]}>Vídeo 3</div>
            </div>
          </div>

          <h2 className={styles["section-title"]}>slides</h2>

          <div className={styles["slides"]}>        
            <div className={styles["colecao"]}>
              <div className={styles["slide1"]}>Slide 1</div>
              <div className={styles["slide2"]}>Slide 2</div>
              <div className={styles["slide3"]}>Slide 3</div>
            </div>
          </div>

          <h2 className={styles["section-title"]}>materiais escritos</h2>

          <div className={styles["materiais"]}>        
            <div className={styles["colecao"]}>
              <div className={styles["material1"]}>Material 1</div>
              <div className={styles["material2"]}>Material 2</div>
              <div className={styles["material3"]}>Material 3</div>
            </div>
          </div>
        </>
      ) : selectedOption === OPTION_ATIVIDADES ? (
        <>
          <h2 className={styles["section-title"]}>atividades</h2>

          <div className={styles["atividade"]}>        
              <div className={styles["colecao"]}>
                  <div className={styles["atividade1"]}>Atividade 1</div>
                  <div className={styles["atividade2"]}>Atividade 2</div>
                  <div className={styles["atividade3"]}>Atividade 3</div>
              </div>
          </div>
        </>
      ) : (
        selectedOption === OPTION_TURMA &&
          <>
            <h2 className={styles["section-title"]}>turma</h2>

            <div className={styles["turma"]}>        
                <div className="colecao colecao-turma">
                    <div className={styles["alunos"]}><img src="https://source.unsplash.com/250x350/?profile-boy" alt="" /><p>Nome</p></div>
                    <div className={styles["alunos"]}><img src="https://source.unsplash.com/250x350/?profile-girl" alt="" /><p>Nome</p></div>
                    <div className={styles["alunos"]}><img src="https://source.unsplash.com/250x350/?profile-woman" alt="" /><p>Nome</p></div>
                    <div className={styles["alunos"]}><img src="https://source.unsplash.com/250x350/?profile-man" alt="" /><p>Nome</p></div>
                </div>
            </div>
          </>
      )}
    </>
    );
};

export default SelectedSubjectPage;