import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadosPage } from './listados.page';

describe('ListadosPage', () => {
  let component: ListadosPage;
  let fixture: ComponentFixture<ListadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
