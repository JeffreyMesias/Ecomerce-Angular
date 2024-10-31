import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalsadoComponent } from './calsado.component';

describe('CalsadoComponent', () => {
  let component: CalsadoComponent;
  let fixture: ComponentFixture<CalsadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalsadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalsadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
