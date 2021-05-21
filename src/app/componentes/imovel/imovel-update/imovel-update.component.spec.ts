import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelUpdateComponent } from './imovel-update.component';

describe('ImovelUpdateComponent', () => {
  let component: ImovelUpdateComponent;
  let fixture: ComponentFixture<ImovelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
