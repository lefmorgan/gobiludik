import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameContainerComponent } from './videogame-container.component';

describe('VideogameContainerComponent', () => {
  let component: VideogameContainerComponent;
  let fixture: ComponentFixture<VideogameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
