describe('Cast votes', () => {
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

  it('and votes for president', () => {
    cy.enterNullVote()
  });

  it('then when user enters wrong password', () => {
    cy.get('button').eq(13).click()
    cy.enterNullVote()
  });

  it('the voting should not end', () => {
    cy.get('#finish-session').get('p').contains('SENHA INCORRETA!');
  });
})
