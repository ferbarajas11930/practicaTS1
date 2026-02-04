class tamagochi {
    nombre;
    hambre = 50;
    energia = 50;
    estadoAnimo = "normal";
    vivo = true;
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer(comida) {
        if (!this.verificarEstado())
            return;
        console.log(`${this.nombre} esta comiendo ${comida}`);
        if (comida === "veneno") {
            this.vivo = false;
            this.estadoAnimo = "¡Dead!";
            console.log("El weon del tamagochi murio por ingerir veneno");
        }
        else {
            this.hambre -= 20;
            this.energia += 5;
            this.actualizarEstado();
        }
    }
    dormir() {
        if (!this.verificarEstado)
            return;
        if (this.energia < 20) {
            console.log(`${this.nombre} esta muy cansado, no ho ho ho dan xd`);
            return;
        }
        console.log(`${this.nombre} esta felizmente sin ir a la Uni, digo, jugando...`);
        this.hambre += 15;
        this.energia -= 20;
        this.actualizarEstado();
    }
    jugar() {
        if (!this.verificarEstado())
            return;
        if (this.energia < 20) {
            console.log(`${this.nombre} esta muy cansado, no quiere jugar`);
            return;
        }
        console.log(`${this.nombre} esta jugando apasionadamente :D`);
        this.hambre += 15;
        this.energia -= 20;
        this.actualizarEstado;
    }
    mostrarEstado() {
        console.log(`===========El estado de ${this.nombre}===========`);
        console.log(`Vivo: ${this.vivo ? "Si" : "No"}`);
        console.log(`Estado de ánimo: ${this.estadoAnimo}`);
        console.log(`Hambre: ${this.hambre} | Energía: ${this.energia}`);
        console.log("=================================================");
    }
    verificarEstado() {
        if (!this.vivo) {
            console.log(`No se permite hacer nada ya que ${this.nombre} esta muerto`);
            return false;
        }
        return true;
    }
    actualizarEstado() {
        this.hambre = Math.max(0, Math.min(100, this.hambre));
        this.energia = Math.max(0, Math.min(100, this.energia));
        if (this.hambre >= 80) {
            this.estadoAnimo = "triste";
        }
        else if (this.energia < 20) {
            this.estadoAnimo = "cansado";
        }
        else if (this.hambre < 30 && this.energia > 70) {
            this.estadoAnimo = "feliz";
        }
        else {
            this.estadoAnimo = "normal";
        }
        if (this.hambre >= 100) {
            this.vivo = false;
            this.estadoAnimo = "DEAD...se fue a un concierto de Paquita la del barrio";
            console.log(`${this.nombre} murio de hambre`);
        }
    }
}
export { tamagochi };
//# sourceMappingURL=Tamagochi.js.map