class Tamagochi {
    nombre: string
    hambre: number
    energia: number
    estadoAnimo: string
    vivo: boolean

    constructor(nombre: string, hambre: number, energia: number, estadoAnimo: string, vivo: boolean) {
        this.nombre = nombre
        this.hambre = hambre
        this.energia = energia
        this.estadoAnimo = estadoAnimo
        this.vivo = vivo
    }
}