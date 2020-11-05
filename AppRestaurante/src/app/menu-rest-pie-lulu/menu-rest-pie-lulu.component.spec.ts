import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestPieLuluComponent } from './menu-rest-pie-lulu.component';

describe('MenuRestPieLuluComponent', () => {
  let component: MenuRestPieLuluComponent;
  let fixture: ComponentFixture<MenuRestPieLuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRestPieLuluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRestPieLuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
