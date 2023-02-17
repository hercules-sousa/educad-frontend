import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getDisciplinasByUserId = (userId: number, period: string) => {
    // Fazer uma requisição para o backend para obter os dados
    return null
}