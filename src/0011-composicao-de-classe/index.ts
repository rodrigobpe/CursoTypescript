export class Carro {
    private readonly motor: Motor = new Motor
    ligar(): void {
        this.motor.ligar()
    }
    desligar(): void {
        this.motor.desligar()
    }
    parar(): void {
        this.motor.parar()
    }
    acelerar(): void {
        this.motor.acelerar()
    }
}

export class Motor {
    ligar(): void {
        console.log("Motor ligado");
    }
    desligar(): void {
        console.log("O Motor desligou");
    }
    parar(): void {
        console.log("O carro parou");
    }
    acelerar(): void {
        console.log("Acelerando");
    }
}

const carro = new Carro();
carro.ligar()
carro.acelerar()
carro.parar()