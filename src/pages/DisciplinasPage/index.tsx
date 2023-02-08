import "./styles.css";

import ChipImage from '../../assets/chip.png'

const DisciplinasPage = () => {
  return (
    <>
      <nav className="menu">
        <a href="tela-inicial.html">
          <span className="menu-logo">Edu</span>cad
        </a>
        <img
          alt="Foto perfil"
          className="menu-perfil"
          src="https://source.unsplash.com/75x75/?teenage-man"
        />
      </nav>

      <div className="container-disciplinas">
        <h2>Disciplinas do semestre</h2>
        <div className="lista-disciplinas">
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Gerência de Projetos</h3>
                <p className="professor-disciplina">
                  Professor(a): Igor Barbosa da Costa
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Teste de Software</h3>
                <p className="professor-disciplina">
                  Professor(a): Mirna da Silva
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Análise e Técnicas de Algoritmos
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Análise e Projeto de Sistemas
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>

          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Inteligência Artificial</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Padrões de Projetos</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Redes de Computadores</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Banco de Dados</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Teoria da Computação</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Sistemas Operacionais</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Teoria dos Grafos</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Programação Orientada a Objetos
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Laboratório de Programação Orientada a Objetos
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Estrutura de Dados</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Laboratório de Estrutura de Dados
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Introdução a Engenharia da Computação
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">Algoritmos e Programação</h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
          <div className="disciplina correcao-disciplinas">
            <a href="">
              <img src={ChipImage} alt="" />
              <div className="informacao-disciplina">
                <h3 className="titulo-disciplina">
                  Laboratório de Algoritmos e Programação
                </h3>
                <p className="professor-disciplina">
                  Professor(a): Fulano de Tal
                </p>
                <p className="codigo-disciplina">Código da disciplina: XXXXX</p>
                <div className="botoes-disciplina">
                  <button className="botao-periodo">8º Período</button>
                  <button className="botao-software">Software</button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisciplinasPage;
