import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameContainerComponent } from './boardgame-container.component';

describe('BoardgameContainerComponent', () => {
  let component: BoardgameContainerComponent;
  let fixture: ComponentFixture<BoardgameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgameContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
