import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverHomeComponent } from './cover-home.component';

describe('CoverHomeComponent', () => {
  let component: CoverHomeComponent;
  let fixture: ComponentFixture<CoverHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
