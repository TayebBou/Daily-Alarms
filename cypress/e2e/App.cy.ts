/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('at least one alarm is fetched when user choose a day with alarms', () => {
    cy.get('.p-datepicker-year').click()
    cy.get('.p-yearpicker > :nth-child(2)').click()
    cy.get('.p-monthpicker > :nth-child(6)').click()
    cy.get(':nth-child(2) > :nth-child(5) > span').click()
    cy.get('#root > :nth-child(5)').should('exist')
  })
})
