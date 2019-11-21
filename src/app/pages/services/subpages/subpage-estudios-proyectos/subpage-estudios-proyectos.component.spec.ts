import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageEstudiosProyectosComponent } from './subpage-estudios-proyectos.component';

describe('SubpageEstudiosProyectosComponent', () => {
  let component: SubpageEstudiosProyectosComponent;
  let fixture: ComponentFixture<SubpageEstudiosProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageEstudiosProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageEstudiosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
