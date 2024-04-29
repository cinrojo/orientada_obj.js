/* 4) Crear una clase de cuenta bancaria con operaciones avanzadas
Crear una clase CuentaBancaria con propiedades como saldo y titular.
 Implementar métodos para depositar, retirar y consultar saldo. 
 Luego, agregar métodos para transferir fondos entre cuentas y
  para calcular intereses según el tipo de cuenta.
 */
class CuentaBancaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }

    getSaldo() {
        return this.saldo;
    }
    getTitular() {
        return this.titular;
    }
    
    depositar(monto) {
        this.saldo += monto;
    }
    retirar(monto) {
        if(monto <= this.saldo)
        this.saldo -= monto;
        else {
            console.log("No hay saldo suficiente");
        }

    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(monto, cuentaDestino) {
        this.retirar(monto);
        cuentaDestino.depositar(monto);
    }
    calcularIntereses(interes) {
        this.depositar(this.saldo * (interes / 100));
    }
}
const cuenta = new CuentaBancaria(1000, "cintia");
console.log(cuenta.consultarSaldo(),cuenta.titular);
cuenta.depositar(100);
console.log(cuenta.consultarSaldo());
cuenta.retirar(500);
console.log(cuenta.consultarSaldo());
cuenta.retirar(1000);
console.log(cuenta.consultarSaldo());

const cuenta2 = new CuentaBancaria(1000, "cintia2");
console.log(cuenta2.consultarSaldo(),cuenta2.getTitular());
cuenta2.depositar(100);
console.log(cuenta2.consultarSaldo());
cuenta2.retirar(500);
console.log(cuenta2.consultarSaldo());
cuenta2.retirar(1000);
console.log(cuenta2.consultarSaldo());

cuenta.transferir(100, cuenta2);
console.log(cuenta.consultarSaldo());
console.log(cuenta2.consultarSaldo());
