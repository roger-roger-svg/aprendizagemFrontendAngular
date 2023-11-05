import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesProfessorComponent } from './atividades-professor.component';

describe('AtividadesProfessorComponent', () => {
  let component: AtividadesProfessorComponent;
  let fixture: ComponentFixture<AtividadesProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadesProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
