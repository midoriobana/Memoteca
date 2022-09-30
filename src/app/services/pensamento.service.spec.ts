/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { PensamentoService } from './pensamento.service';

describe('Service: Pensamento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PensamentoService]
    });
  });

  it('should ...', inject([PensamentoService], (service: PensamentoService) => {
    expect(service).toBeTruthy();
  }));
});
