//Pages
import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';

//Test Data
import { AboutData } from '../fixtures/AboutData.js';

describe('About Page Verification', () => {
    
    const homepage   = new HomePage();
    const aboutpage   = new AboutPage();
    
    it('Verify that the expected text is available in About Page', () => {
        cy.visit('/');
        homepage.aboutBtn.click();
        homepage.aboutInquisitiveBtn.click();
        aboutpage.inquisitiveText.should('contain',AboutData.inquisitivetext)
        cy.log('Inquisitive text has been successfully verified');
    })    
  
})