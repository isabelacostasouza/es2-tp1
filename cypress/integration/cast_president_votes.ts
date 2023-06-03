describe('Cast president vote', () => {
  it('when TSE agent starts section', () => {
    cy.visit('/')
    cy.enterTsePassword()
  });

  it('and user enters correct login', () => {
    cy.enterFirstVoterData()
  });

  it('and votes for senators', () => {
    cy.enterFirstSenatorData()
    cy.enterNullVote()
  });

  it('then user should be able to cast a null vote for president', () => {
    cy.enterNullVote()
  });

  it('and end screen should appear', () => {
    cy.get('#end-session').get('p').contains('FIM');
  });
})
