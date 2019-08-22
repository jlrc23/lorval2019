import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnuAboutUsComponent } from './mnu-about-us.component';

describe('MnuAboutUsComponent', () => {
  let component: MnuAboutUsComponent;
  let fixture: ComponentFixture<MnuAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnuAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnuAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
