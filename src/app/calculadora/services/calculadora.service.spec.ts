import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be  added correctly',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sum = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(sum).toEqual(5);
    })
  );
  
  it('should be sub correctly',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(sub).toEqual(-3);
    })
  );

  it('should be multiplication correctly',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let mult = service.calcular(5, 5, CalculadoraService.MULTIPLICACAO);
      expect(mult).toEqual(25);
    })
  );
  
  it('should be division correctly',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(40, 2, CalculadoraService.DIVISAO);
      expect(div).toEqual(20);
    })
  );

  it('should be return 0',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let error = service.calcular(40, 2, '.');
      expect(error).toEqual(0);
    })
  );

});
