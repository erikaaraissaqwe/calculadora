/**
 *Serviço responsável por executar as operações da calculadora
 * @author Erika Raissa Bueno da Silva
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
    * Esse método faz calculo utilizando as quatro operações matemáticas básica
    *
    * 
    * 
    * @param num1 number
    * @param num2 number
    * @param operacao string
    * @return number 
  */

  calcular(num1:number, num2:number, operacao:string): number {

    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
