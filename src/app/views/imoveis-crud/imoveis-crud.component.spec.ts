import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImoveisCrudComponent} from './imoveis-crud.component';

describe('ImoveisCrudComponent', () => {
  let component: ImoveisCrudComponent;
  let fixture: ComponentFixture<ImoveisCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImoveisCrudComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
