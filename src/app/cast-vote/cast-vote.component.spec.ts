import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastVoteComponent } from './cast-vote.component';

describe('CastVoteComponent', () => {
  let component: CastVoteComponent;
  let fixture: ComponentFixture<CastVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set voting type as null when senator number is invalid', () => {
    component.voteOnSenator(1);
    component.voteOnSenator(1);
    component.voteOnSenator(0);

    expect(component.voting_type).toBe("null");
  });

  it('should set voting type as null when president number is invalid', () => {
    component.voteOnPresident(1);
    component.voteOnPresident(0);

    expect(component.voting_type).toBe("null");
  });

  it('should set voting type as normal and valid candidate when senator number is valid', () => {
    component.voteOnSenator(1);
    component.voteOnSenator(1);
    component.voteOnSenator(1);

    expect(component.voting_type).toBe("normal");
    expect(component.valid_candidate).toBe(true);
  });

  it('should set voting type as normal and valid candidate when president number is valid', () => {
    component.voteOnPresident(1);
    component.voteOnPresident(1);

    expect(component.voting_type).toBe("normal");
    expect(component.valid_candidate).toBe(true);
  });

  it('should set vote for senator when valid', () => {
    component.votes = {"1": []}
    component.user_logged_in = "1";
    component.senator_voting = ["1", "1", "1"];
    component.voting_type = "normal";

    component.enterVote();

    expect(component.votes[component.user_logged_in][0]).toBe("111");
  });

  it('should set vote for president when valid', () => {
    component.votes = {"1": []}
    component.user_logged_in = "1";
    component.president_voting = ["1", "1"];
    component.voting_type = "normal";
    component.voting_number = 2;

    component.enterVote();

    console.log("testez");
    console.log(component.votes);

    expect(component.votes[component.user_logged_in][0]).toBe("11");
  });
});
