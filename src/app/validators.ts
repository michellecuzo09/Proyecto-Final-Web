export class Validators {

    //VALIDAR SOLO INGRESO LETRAS Y MAYUSCULA
    static validarMayusculas(valor: string): boolean {
      return /^[A-Z][a-z]*$/.test(valor);
    }
  }