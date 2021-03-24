import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWriterClickerComponent } from './the-writer-clicker.component';

describe('TheWriterClickerComponent', () => {
  let component: TheWriterClickerComponent;
  let fixture: ComponentFixture<TheWriterClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWriterClickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWriterClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
