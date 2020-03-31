// https://docs.cypress.io/api/introduction/api.html

describe('Home Page Now', () => {
  it('Prints an old invoice', () => {
    visitHomePage(cy)
    shouldSeeLastestInvoiceFirst(cy)
    gotoSecondPage(cy)
    clickOnInvoice(cy, '202001-001')
    shouldSeeInvoiceDetail(cy)
  })
  it('Should be able to get back to home page from whereever page by clicking at logo', () => {
    cy.visit('/shouldNotHaveThisPage')
    cy.contains('Page not found')
    cy.get('#app_logo').click()
    shouldSeeLastestInvoiceFirst(cy)
  })
  it('Can duplicate old invoice', () => {
    visitHomePage(cy)
    duplicateLatestInvoice(cy)
  })
  function visitHomePage(cy){
    cy.visit('/')
  }
  function shouldSeeLastestInvoiceFirst(cy) {
    let latestInvoiceNumber = '202001-007'
    shouldSee(cy, latestInvoiceNumber)
  }
  
  function gotoSecondPage(cy) {
    cy.get('.v-data-footer__icons-after').click()
  }
  
  function clickOnInvoice(cy, invoiceNumber) {
    cy.contains(invoiceNumber).click()
  }
  
  function shouldSeeInvoiceDetail(cy){
    shouldSee(cy, 'Training')
  }
  
  function shouldSee(cy, expected) {
    cy.contains(expected)
  }

  function duplicateLatestInvoice(cy) {
    let latestInvoiceNumber = '202001-007'
    cy.get(`#duplicate-button-${latestInvoiceNumber}`).click()
  }
  
})
