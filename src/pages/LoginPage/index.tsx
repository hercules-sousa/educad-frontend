import { FormEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import EmailIcon from "../../assets/icons/email.svg";

import { useAuth } from "../../services/auth";

import "./styles.css";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(login);

    /* try {
      authContext.signIn(login, senha, () => navigate("home"));

      alert("Login realizado com sucesso!");
    } catch (error) {
      alert("Falha ao realizar login.");
    } */
  };

  return (
    <div className="grid">
      <div className="login-form">
        <h2>Bem-vindo(a) de volta!</h2>
        <br />
        {/* <form className="campos-login" onSubmit={handleLoginSubmit}>
          <input
            className="login"
            placeholder="Matrícula"
            onChange={(e) => setLogin(e.target.value)}
          />
          <svg
            id="user"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
          </svg>

          <br />
          <br />
          <br />

          <svg className="lock" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
            />
          </svg>

          <input
            type="password"
            id="senha"
            className="senha"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />

          <svg id="olho" className="olho" viewBox="0 0 24 24">
            <path
              id="olho-aberto"
              className="olho-aberto"
              fill="currentColor"
              d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
            />
          </svg>

          <p>
            Esqueceu sua senha? <a href="">Clique aqui</a>
          </p>
          <br />
          <br />
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form> */}

        <Input
          placeholder="Nome de Usuário"
          icon={EmailIcon}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
          }
        />

        <Input
          placeholder="Senha"
          icon={EmailIcon}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSenha(e.target.value)
          }
          type="password"
        />
      </div>

      <div className="login-visual">
        <h1>
          <b>Edu</b>cad
        </h1>
        <p>acesse suas atividades, se organize e se torne um aluno melhor</p>
      </div>
    </div>
  );
};

export default LoginPage;
