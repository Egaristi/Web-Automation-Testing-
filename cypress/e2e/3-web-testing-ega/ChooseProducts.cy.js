describe('WEB Automation Testing', () => {
    beforeEach ('Choose Product', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.wait(5000)
    })
    //choose products women 
    it('Choose products women', () => {
        cy.get('#ui-id-4 > :nth-child(2)').click()
        cy.url().should ('include', '/women')
        cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link')
        cy.wait(10000)
        cy.url().should('include', '/women')
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-57').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div')
        cy.get('.showcart').click()
        cy.get('#top-cart-btn-checkout').click()
    })
})