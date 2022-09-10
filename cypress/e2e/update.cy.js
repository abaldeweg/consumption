describe('Update', () => {
  it('updates a list', () => {
    window.localStorage.setItem(
      'consumption_lists',
      JSON.stringify({
        test: {
          date: Math.round(Date.now() / 1000),
          resources: [],
          notes: null,
        },
      })
    )
    cy.visit('/list/test')
    cy.url().should('include', '/list')

    cy.get('#product').select(0)
    cy.get('#amount').type('{backspace}2')
    cy.get('#unit').select(2)
    cy.get('#note').type('note')

    cy.get('.item > .btn').click()

    cy.get('.content .list').should('have.length', 1)

    cy.get('.toast .type_success')

    cy.get('div.action > :nth-child(2)').click()
    cy.get('div.action > :nth-child(1)').click()
  })
})
