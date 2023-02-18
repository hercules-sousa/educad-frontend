import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getDisciplinasByUserId = (userId: number, period: string) => {
  // Fazer uma requisição para o backend para obter os dados
  const data = [
    {
      name: "Sistemas Embarcados",
      assignedPeriod: 9,
      courseId: 0,
      period: period,
      codigo: 656598,
      teacher: {
        cpf: "12862305460",
        fullName: "José Guimarães Rosa",
        email: "jose.guimaraes@ifpb.edu.br",
      },
      type: "Hardware",
    },
    {
      name: "Gerência de Software",
      assignedPeriod: 8,
      courseId: 0,
      period: period,
      codigo: 988745,
      teacher: {
        cpf: "12862775460",
        fullName: "Igor Barbosa da Costa",
        email: "igor.costa@ifpb.edu.br",
      },
      type: "Software",
    },
    {
      name: "Teste de Software",
      assignedPeriod: 10,
      courseId: 0,
      period: period,
      codigo: 653221,
      teacher: {
        cpf: "12862305560",
        fullName: "Pedro Pascal",
        email: "pedro.pascal@ifpb.edu.br",
      },
      type: "Software",
    },
    {
      name: "Cálculo",
      assignedPeriod: 4,
      courseId: 0,
      period: period,
      codigo: 656545,
      teacher: {
        cpf: "12862305460",
        fullName: "José Guimarães Rosa",
        email: "jose.guimaraes@ifpb.edu.br",
      },
      type: "Exatas",
    },
  ];
  return data;
};
