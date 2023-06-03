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

  it('then when user enters right password', () => {
    cy.get('button').eq(13).click()
    cy.enterTsePassword()
  });

  it('voting results should appear on screen', () => {
    cy.get('#senator-votes').get('h2').contains('Votos para senador');
    cy.get('#president-votes').get('h2').contains('Votos para presidente');
  });
})
