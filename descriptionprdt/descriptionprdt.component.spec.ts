import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionprdtComponent } from './descriptionprdt.component';

describe('DescriptionprdtComponent', () => {
  let component: DescriptionprdtComponent;
  let fixture: ComponentFixture<DescriptionprdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionprdtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionprdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
