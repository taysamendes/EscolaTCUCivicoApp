import { TestBed } from '@angular/core/testing';

import { EscolasService } from './escolas.service';

describe('EscolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscolasService = TestBed.get(EscolasService);
    expect(service).toBeTruthy();
  });
});
