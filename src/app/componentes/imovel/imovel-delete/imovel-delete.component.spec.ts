import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelDeleteComponent } from './imovel-delete.component';

describe('ImovelDeleteComponent', () => {
  let component: ImovelDeleteComponent;
  let fixture: ComponentFixture<ImovelDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
