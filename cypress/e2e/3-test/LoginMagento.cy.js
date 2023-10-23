describe('WEB UI Magento', () => {
    beforeEach ('Login Web', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.wait(5000)
    })
    //positif test
    it ('Login WEB - Positif Test', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.url().should ('include','/customer/account/login/referer')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('aaxxee123@')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.url().should('include', 'customer/account/')
    })
    //Negatif test
    it ('Login WEB - Email Null', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.url().should ('include','/customer/account/login/referer')
        cy.get('#email').type('null')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('aaxxee123@')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.url().should('include', 'customer/account/')
    })
    it ('Login WEB - Password Null', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.url().should ('include','/customer/account/login/referer')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('null')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.url().should('include', 'customer/account/')
    })
    it ('Login WEB - Email and Password Null', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.url().should ('include','/customer/account/login/referer')
        cy.get('#email').type('null')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('null')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.url().should('include', 'customer/account/')
    })
})