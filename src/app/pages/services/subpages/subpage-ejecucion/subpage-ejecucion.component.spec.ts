import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageEjecucionComponent } from './subpage-ejecucion.component';

describe('SubpageEjecucionComponent', () => {
  let component: SubpageEjecucionComponent;
  let fixture: ComponentFixture<SubpageEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
