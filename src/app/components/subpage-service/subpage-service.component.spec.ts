import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageServiceComponent } from './subpage-service.component';

describe('SubpageServiceComponent', () => {
  let component: SubpageServiceComponent;
  let fixture: ComponentFixture<SubpageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
