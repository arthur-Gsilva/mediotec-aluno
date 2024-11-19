import { Disciplina } from "../types/Disciplina"
import { User } from "../types/User"

const baseURL = 'https://agendasenacapi-production.up.railway.app'

export const getDisciplinas = async (idAluno: number): Promise<Disciplina[]> => {
    const response = await fetch(`${baseURL}/user/${idAluno}`)

    const aluno: User = await response.json()

    return aluno.turma.curso.disciplinas;
}