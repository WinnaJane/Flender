
describe('Create Protocol;', () => {
 
  const customTimeOut = {timeout: 3000000}

  beforeEach(() => {
    cy.wait(5000)
    cy.visit('/', customTimeOut)
    cy.get('input#username', customTimeOut).type('t-winonna').should('have.value', 't-winonna')
    cy.get('input#password', customTimeOut).type('123')
    cy.get('button#login').contains('Log In').click()
   
  })

  it.skip('Log in Pass', () => {
   

    cy.wait(3000)
    cy.visit('/', customTimeOut)
    cy.get('input#username', customTimeOut).type('t-winonna').should('have.value', 't-winonna')
    cy.wait(3000)
    cy.get('input#password', customTimeOut).type('asdfasdf') 
    cy.get('button#login', customTimeOut).contains('Log In').click()

   
  })
  it.skip('Log in Fail', () => {

    cy.wait(3000)
    cy.visit('/', customTimeOut)
    cy.get('input#username', customTimeOut).type('user1').should('have.value', 'user1')
    cy.get('input#password',customTimeOut).type('asdf')
    cy.get('button#login', customTimeOut).contains('Log In').click()

  })

  it.skip('OK confirmation', () => {
  
    cy.wait(5000)
   // cy.visit('https://flender.beta.reportheld.com/office/main.html#sites/false', customTimeOut)
    cy.wait(4000) 
    cy.get('button.btn.btn-large.btn-block.btn-primary[type="button"]', customTimeOut)
    .contains('Ok').should('be.visible').click()

  })

  it.skip('gets the Protocol', () => {

    cy.wait(3000)
    cy.get('button.btn.btn-large.btn-block.btn-primary[type="button"]')
    .contains('Ok').should('be.visible').click()
   // cy.visit('https://flender.beta.reportheld.com/office/main.html#sites/false  ', customTimeOut)
    cy.get('span[title="Protocols"]', customTimeOut).click()


  })

 
  it('Create Protocol', () => {

    cy.wait(3000)
    cy.get('button.btn.btn-large.btn-block.btn-primary[type="button"]')
    .contains('Ok').should('be.visible').click()
    cy.wait(3000)
   // cy.visit('https://flender.beta.reportheld.com/office/main.html#protocols',customTimeOut)
   cy.get('span[title="Protocols"]', c).click()
   cy.get('.groupxs-btn.btn-outline.btn-default').should('be.visible') 
   .eq(0).click()

   })



it.only('Container', () => {

  cy.wait(5000)
  cy.get('button.btn.btn-large.btn-block.btn-primary[type="button"]', customTimeOut)
    .contains('Ok').should('be.visible').click()
    cy.wait(3000)
    cy.get('span[title="Protocols"]', customTimeOut).click()
    cy.get('.groupxs-btn.btn-outline.btn-default', customTimeOut).should('be.visible') 
    .eq(0).click()

  cy.get('button-container.left').first().within(() => {
  cy.get('.button').click()
  cy.contains('FLENDER').click()

  })

  cy.wait(5000)
  cy.get('button-container.right').first().within(() => {
  cy.get('.button').click()
  cy.contains('Voerde').click()

})
it.only('xx ', () => {

  cy.wait(3000)
})
})
})
