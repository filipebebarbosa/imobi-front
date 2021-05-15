import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImovelCreateComponent} from './imovel-create.component';

describe('ImovelCreateComponent', () => {
  let component: ImovelCreateComponent;
  let fixture: ComponentFixture<ImovelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImovelCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
