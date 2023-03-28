import "cypress-localstorage-commands";
describe('Create Protocol;', () => {
 
  const customTimeOut = {timeout: 3000000}

  it('Log in Pass', () => {

    cy.wait(3000)
    cy.visit('https://flender.beta.reportheld.com/office/main.html',customTimeOut)
    cy.get('input#username', customTimeOut).type('user1').should('have.value', 'user1').
    cy.wait(3000)
    cy.get('input#pasword',customTimeOut).type('123')
    cy.get('button#login', customTimeOut).contains('Log In ').click()

  })
  it('Log in Fail', () => {

    cy.wait(3000)
    cy.visit('https://flender.beta.reportheld.com/office/main.html',customTimeOut)
    cy.get('input#username', customTimeOut).type('user1').should('have.value', 'user1')
    cy.get('input#pasword',customTimeOut).type('asdf')
    cy.get('button#login', customTimeOut).contains('Log In ').click()

  })

  it.skip('OK confirmation', () => {

    cy.wait(3000)
    cy.visit('https://flender.beta.reportheld.com/office/main.html#sites/false',customTimeOut)
    cy.get('button[type="button"]').contains('Ok').click()

  })

  it('gets the Protocol', () => {

    cy.wait(3000)
    cy.visit('https://flender.beta.reportheld.com/office/main.html#protocols')
    cy.get('span[title="Protocols"]', customTimeOut).click()


  })

  it('gets the Protocol', () => {

    cy.wait(3000)
    cy.visit('https://flender.beta.reportheld.com/office/main.html#protocols')
    cy.get('span[title="Protocols"]', customTimeOut).click()


  })
  it('Create Protocol', () => {

    cy.wait(3000)
    cy.visit('https://flender.beta.reportheld.com/office/main.html#protocols')
    cy.get('button[type="button"]', customTimeOut).contains('Create protocol').click()
})
it('Container', () => {

  cy.wait(3000)
  cy.visit('https://flender.beta.reportheld.com/office/main.html#protocols')
  cy.get('button[type="button"]', customTimeOut).contains('Create protocol').click()

})

})
