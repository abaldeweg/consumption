describe('Lists', () => {
  it('show all lists', () => {
    cy.visit('/list')
    cy.url().should('include', '/list')

    cy.get('.btn.btn_primary').click()
    cy.get('.content .list').should('have.length', 1)

    cy.get('summary').click()
    cy.get('.btn.btn_outline_danger')
  })
})
