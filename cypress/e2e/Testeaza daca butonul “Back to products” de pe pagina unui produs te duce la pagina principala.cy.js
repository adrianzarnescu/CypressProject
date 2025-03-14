describe('Test if BackToProduct button on the product page takes you to the main page.', () =>{
    it('Should take you to the main page.', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="item-4-title-link"]').click();
        cy.get('[data-test="back-to-products"]').should('exist');
        cy.get('[data-test="back-to-products"]').click();
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click

    
    
    
    
    
    
    
    
    
    })
})