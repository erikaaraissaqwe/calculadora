import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private valor1: string;
  private valor2: string;
  private result: number;
  private op: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todos os campos com os valores padrão.
   * 
   * @return void
  */
  limpar() {
    this.valor1 = '0';
    this.valor2 = null;
    this.result = null;
    this.op = null;
  }

   /**
   * Seta os valores já concatenados
   * 
   * 
   * @param numero string
   * @return void
  */
  adicionarNumero(numero: string): void{
    if (this.op === null){
      this.valor1 = this.concatenarNumero(this.valor1, numero);
    }else{
      this.valor2 = this.concatenarNumero(this.valor2, numero);
    }
  }

  /**
   * Faz o tratamento de decimal e concatena os numeros
   * 
   * 
   * @param numAtual string
   * @param numConcat string
   * @return string
  */
  concatenarNumero(numAtual: string, numConcat: string): string {
    if(numAtual === '0' || numAtual === null){
      numAtual = '';
    }

    if(numConcat === '.' && numAtual === ''){
      return '0.'
    }

    if(numConcat === '.' && numAtual.indexOf('.')> -1){
      return numAtual;
    }
    let valorFinal = numAtual + numConcat;
    return valorFinal;
  }

  /**
   * Define a operação a ser utilizada
   * 
   * 
   * @param op string
   * @return string
  */
 defineOperacao(op: string): void{
   if(this.op === null){
     this.op = op;
     return;
   }

   if(this.valor2 !== null){
     this.result = this.calculadoraService.calcular(
       parseFloat(this.valor1),
       parseFloat(this.valor2),
       this.op);
    
      this.op = op;
      this.valor1 = this.result.toString();
      this.valor2 = null;
      this.result = null;
   }
  }

   /**
   * Efetua o cálculo
   * 
   * 
   * @return void
  */
 calcular(): void{
   
  if(this.valor2 === null){
    return;
  }

  this.result = this.calculadoraService.calcular(
    parseFloat(this.valor1),
    parseFloat(this.valor2),
    this.op);

 }

/**
   * Mostra no display os valores
   * 
   * 
   * @return string
  */
 get display(): string{
   if(this.result !== null){
     return this.result.toString();
   }
   if(this.valor2 !== null){
     return this.valor2;
   }
    return this.valor1;
 }

}
