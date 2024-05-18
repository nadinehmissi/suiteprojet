import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpheaderComponent } from './upheader.component';

describe('UpheaderComponent', () => {
  let component: UpheaderComponent;
  let fixture: ComponentFixture<UpheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
