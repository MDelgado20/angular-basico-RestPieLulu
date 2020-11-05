import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPieLuluComponent } from './rest-pie-lulu.component';

describe('RestPieLuluComponent', () => {
  let component: RestPieLuluComponent;
  let fixture: ComponentFixture<RestPieLuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestPieLuluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPieLuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
