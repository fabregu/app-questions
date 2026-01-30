export class Respuesta {
    nombre: string = '';
    esCorrecta: number = 0;

    public (nombre: string, esCorrecta: number){
        this.nombre = nombre;
        this.esCorrecta = esCorrecta;
    }
}