//Pages
import HomePage from '../pages/HomePage.js';
import JoinInquisitivePage from '../pages/JoinInquisitivePage.js';

describe('Join Inquisitive Modal pop up Verification', () => {
    
    const homepage   = new HomePage();
    const joinpage   = new JoinInquisitivePage();
    
    it('Verify that a modal pop up is displayed upon clicking Join Inquisitive', () => {
        cy.visit('/');
        homepage.joinBtn.click();
        cy.url().should('eq', 'https://www.inquisitive.com/?modal=join');
        cy.contains('Special Offers').should('be.visible');
        joinpage.closeJoininquisitive.click();
        cy.log('Join Inquisitive modal pop up has been launched and closed');

    })    
  
})