//Pages
import JoinInquisitivePage from '../pages/JoinInquisitivePage.js';
import LessonsPage from '../pages/LessonsPage.js';

describe('Lessons Pages', () => {
    
    const joinpage      = new JoinInquisitivePage();
    const lessonspage   = new LessonsPage();
    
    it('Verify that an appropriate lessons page opens up as per user selection', () => {
        cy.visit('/lesson/62-mapping');
        lessonspage.secondPageLink.click();
        cy.contains('Special Offers').should('be.visible');
        joinpage.closeJoininquisitive.click();
        cy.log("Modal pop up has been launched from lessons page");     

    })     
})