import axios from "axios";
import { allSubjectsData } from "./mockData";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getSubjectById = (id: string) => {
  return allSubjectsData.find((subject) => subject.codigo === Number(id));
};

export const getDisciplinasByUserId = (userId: number, period: string) => {
  // Fazer uma requisição para o backend para obter os dados
  return allSubjectsData;
};
