import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishElectionComponent } from './finish-election.component';

describe('FinishElectionComponent', () => {
  let component: FinishElectionComponent;
  let fixture: ComponentFixture<FinishElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishElectionComponent);
    component = fixture.componentInstance;

    spyOn(component.session_ended, 'emit');
  });

  it('should not end session if password is incorrect', () => {
    component.current_password = "0";
    component.tse_password = "1";

    component.enterPassword();

    fixture.detectChanges();

    expect(component.session_ended.emit).toHaveBeenCalledWith(false);
  });

  it('should end session if password is correct', () => {
    component.current_password = "0";
    component.tse_password = "0";

    component.enterPassword();

    fixture.detectChanges();

    expect(component.session_ended.emit).toHaveBeenCalledWith(true);
  });
});
