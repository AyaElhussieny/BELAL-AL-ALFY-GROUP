import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTitleComponent } from './start-title.component';

describe('StartTitleComponent', () => {
  let component: StartTitleComponent;
  let fixture: ComponentFixture<StartTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
