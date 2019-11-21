import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageCoordinacionComponent } from './subpage-coordinacion.component';

describe('SubpageCoordinacionComponent', () => {
  let component: SubpageCoordinacionComponent;
  let fixture: ComponentFixture<SubpageCoordinacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageCoordinacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageCoordinacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
