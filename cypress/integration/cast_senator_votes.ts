describe('Cast senator votes', () => {
  it('when TSE agent starts section', () => {
    cy.visit('/')
    cy.enterTsePassword()
  });

  it('and user enters correct login', () => {
    cy.enterFirstVoterData()
  });

  it('then user should be able to vote for a senator', () => {
    cy.enterFirstSenatorData()
  });

  it('and user should be able to cast a null vote for senator', () => {
    cy.enterNullVote()
  });

  it('and the president voting should appear', () => {
    cy.get('#president-voting').get('p').contains('Presidente');
  });
})
