type alimento = "manzana" | "pollo" | "veneno" | "golosina";
declare class tamagochi {
    nombre: string;
    hambre: number;
    energia: number;
    estadoAnimo: string;
    vivo: boolean;
    constructor(nombre: string);
    comer(comida: alimento): void;
    dormir(): void;
    jugar(): void;
    mostrarEstado(): void;
    private verificarEstado;
    private actualizarEstado;
}
export { tamagochi };
//# sourceMappingURL=Tamagochi.d.ts.map