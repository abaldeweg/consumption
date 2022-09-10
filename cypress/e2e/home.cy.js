describe('Home', () => {
  it('show home', () => {
    cy.visit('/')
    cy.url().should('include', '/list')
  })
})
