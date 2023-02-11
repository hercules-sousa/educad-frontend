import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

import EmailIcon from "../../assets/icons/email.svg";
import LockIcon from "../../assets/icons/lock.svg";

import { useAuth } from "../../services/auth";

import "./styles.css";
import { StyledForm, StyledInputContainer } from "./styles";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async () => {
    console.log(login);

    try {
      authContext.signIn(login, senha, () => navigate("home"));

      alert("Login realizado com sucesso!");
    } catch (error) {
      alert("Falha ao realizar login.");
    }
  };

  return (
    <div className="grid">
      <div className="login-form">
        <StyledForm>
          <h2>Bem-vindo(a) de volta!</h2>

          <StyledInputContainer>
            <Input
              placeholder="Nome de Usuário"
              leftIcon={EmailIcon}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLogin(e.target.value)
              }
            />

            <Input
              additionalStyle={{
                marginTop: 20,
              }}
              placeholder="Senha"
              leftIcon={LockIcon}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSenha(e.target.value)
              }
              type="password"
              rightIcon
            />

            <Button
              additionalStyle={{
                marginTop: 20,
              }}
              onClick={() => handleLoginSubmit()}
              text="Entrar"
            />
          </StyledInputContainer>
        </StyledForm>
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
