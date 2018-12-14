import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoEscolaComponent } from './avaliacao-escola.component';

describe('AvaliacaoEscolaComponent', () => {
  let component: AvaliacaoEscolaComponent;
  let fixture: ComponentFixture<AvaliacaoEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
