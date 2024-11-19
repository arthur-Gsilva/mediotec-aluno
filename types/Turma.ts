import { Curso } from "./Curso"

export type Turma = {
    idTurma: string,
    nomeTurma: string,
    datalhesTurma: string,
    periodo: '1' | '2' |'3',
    anno: string,
    turno: string,
    curso: Curso
}