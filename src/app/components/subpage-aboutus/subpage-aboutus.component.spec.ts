import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageAboutusComponent } from './subpage-aboutus.component';

describe('SubpageAboutusComponent', () => {
  let component: SubpageAboutusComponent;
  let fixture: ComponentFixture<SubpageAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
