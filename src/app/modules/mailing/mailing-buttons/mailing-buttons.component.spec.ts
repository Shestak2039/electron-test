import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingButtonsComponent } from './mailing-buttons.component';

describe('MailingButtonsComponent', () => {
  let component: MailingButtonsComponent;
  let fixture: ComponentFixture<MailingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailingButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
