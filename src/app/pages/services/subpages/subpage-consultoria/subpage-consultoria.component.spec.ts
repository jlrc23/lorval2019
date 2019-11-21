import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageConsultoriaComponent } from './subpage-consultoria.component';

describe('SubpageConsultoriaComponent', () => {
  let component: SubpageConsultoriaComponent;
  let fixture: ComponentFixture<SubpageConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
