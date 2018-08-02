import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsNavbarComponent } from './fs-navbar.component';

describe('FsNavbarComponent', () => {
  let component: FsNavbarComponent;
  let fixture: ComponentFixture<FsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
