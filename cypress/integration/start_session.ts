describe('Start session as TSE agent', () => {
  it('when user enters correct tse password', () => {
    cy.visit('/')
    cy.enterTsePassword()
  });
  it('it allow user to start election', () => {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Informe seu titulo de eleitor')
  });
})
