import { tamagotchi } from "./Tamagochi.js"



const mascota = new tamagotchi("Lilo")

mascota.mostrarEstado()
mascota.jugar()
mascota.comer("golosina")
mascota.mostrarEstado()

mascota.comer("manzana")
mascota.jugar()