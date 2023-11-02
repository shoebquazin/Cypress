const { homePage } = require("../support/page-objects/homePage.cy")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    homePage.naviageToLoginPage()
  })
})