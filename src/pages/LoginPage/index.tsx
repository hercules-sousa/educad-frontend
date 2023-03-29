import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../services/auth";

import "./styles.css";

import {
  Grid,
  LoginForm,
  StyledForm,
  StyledInputContainer,
  StyledLogoContainer,
  StyledSlogan,
  StyledTitle,
  StyledWelcome,
} from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import EmailIcon from "../../assets/icons/email.svg";
import LockIcon from "../../assets/icons/lock.svg";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async () => {
    console.log(login);

    try {
      authContext.signIn(login, senha, () => navigate("/home"));

      alert("Login realizado com sucesso!");
    } catch (error) {
      alert("Falha ao realizar login.");
    }
  };

  return (
    <Grid>
      <LoginForm>
        <StyledForm>
          <StyledWelcome>Bem-vindo(a) de volta!</StyledWelcome>

          <StyledInputContainer>
            <Input
              placeholder="Nome de Usuário"
              leftIcon={EmailIcon}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLogin(e.target.value)
              }
            />

            <Input
              placeholder="Senha"
              leftIcon={LockIcon}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSenha(e.target.value)
              }
              type="password"
              rightIcon
              marginTop={20}
            />

            <Button
              onClick={() => handleLoginSubmit()}
              text="Entrar"
              marginTop={30}
            />
          </StyledInputContainer>
        </StyledForm>
      </LoginForm>

      <StyledLogoContainer>
        <StyledTitle>Educad</StyledTitle>
        <StyledSlogan>
          acesse suas atividades, se organize e se torne um aluno melhor
        </StyledSlogan>
      </StyledLogoContainer>
    </Grid>
  );
};

export default LoginPage;
