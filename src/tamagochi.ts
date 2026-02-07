
type alimento = "manzana" | "pollo" | "veneno" | "golosina"


class tamagochi {
    nombre: string
    hambre: number = 50
    energia: number = 50
    estadoAnimo: string = "normal"
    vivo: boolean = true

    constructor(nombre: string) {
        this.nombre = nombre

    }

    comer(comida: alimento): void {
        if (!this.verificarEstado()) return
        console.log(`${this.nombre} esta comiendo ${comida}`)
        if (comida === "veneno") {
            this.vivo = false
            this.estadoAnimo = "¡Dead!"
            console.log("El weon del tamagochi murio por ingerir veneno")
        } else {
            this.hambre -= 20
            this.energia += 5
            this.actualizarEstado()
        }

    }

    dormir(): void {
        if (!this.verificarEstado()) return;

        console.log(`${this.nombre} está tomando una siesta reparadora...`);

        
        this.energia += 30; // de energía al dormir
        this.hambre += 10;  // aumenta el hambre por el tiempo

        this.actualizarEstado(); 
    }

    jugar(): void {
        if (!this.verificarEstado()) return
        if (this.energia < 20) {
            console.log(`${this.nombre} esta muy cansado, no quiere jugar`)
            return
        }
        console.log(`${this.nombre} esta jugando apasionadamente :D`)
        this.hambre += 15
        this.energia -= 20
        this.actualizarEstado()
    }

    mostrarEstado(): void {
        console.log(`===========El estado de ${this.nombre}===========`)
        console.log(`Vivo: ${this.vivo ? "Si" : "No"}`)
        console.log(`Estado de ánimo: ${this.estadoAnimo}`)
        console.log(`Hambre: ${this.hambre} | Energía: ${this.energia}`)
        console.log("=================================================")
    }

    private verificarEstado(): boolean {
        if (!this.vivo) {
            console.log(`No se permite hacer nada ya que ${this.nombre} esta muerto`)
            return false
        }
        return true
    }

    private actualizarEstado(): void {
        this.hambre = Math.max(0, Math.min(100, this.hambre))
        this.energia = Math.max(0, Math.min(100, this.energia))

        if (this.hambre >= 80) {
            this.estadoAnimo = "hambriento"
        } else if (this.energia < 20) {
            this.estadoAnimo = "cansado"
        } else if (this.hambre < 30 && this.energia > 70) {
            this.estadoAnimo = "feliz"
        } else {
            this.estadoAnimo = "normal"
        }

        if (this.hambre >= 100) {
            this.vivo = false
            this.estadoAnimo = "DEAD...se fue a un concierto de Paquita la del barrio"
            console.log(`${this.nombre} murio de hambre`)
        }
    }

} export { tamagochi }