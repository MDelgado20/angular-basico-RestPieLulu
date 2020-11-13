import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosRestComponent } from './comentarios-rest.component';

describe('ComentariosRestComponent', () => {
  let component: ComentariosRestComponent;
  let fixture: ComponentFixture<ComentariosRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
