//Pages
import SignInPage from '../pages/SignInPage.js';
import HomePage from '../pages/HomePage.js';

//Test Data
import { SignInData } from '../fixtures/SignInData.js';

describe('Sign in Validations', () => {
    const signinpage = new SignInPage();
    const homepage   = new HomePage();
    
    it('Verify the system performs Required field validations in sign in page', () => {
        cy.visit('/');
        homepage.signInBtnHomePage.click();
        signinpage.signInBtn.click();
        signinpage.emailReqMsg.should('contain',SignInData.emailreq);
        signinpage.pwdReqMsg.should('contain',SignInData.pwdreq);           
        cy.log('Mandatory Email and Password validations');
    })

    it('Verify the system performs valid email address check in sign in page', () => {
        cy.visit('/');
        homepage.signInBtnHomePage.click();
        signinpage.emailInput.type(SignInData.invalidemailinput);
        signinpage.pwdInput.type(SignInData.pwdinput);
        signinpage.signInBtn.click();
        signinpage.invalidEmailMsg.should('contain',SignInData.emailinvalid);
        cy.log('Valid email check has been verified');
    })

    it('Verify the system performs Incorrect login credentials check in sign in page', () => {
        cy.visit('/');
        homepage.signInBtnHomePage.click();
        signinpage.emailInput.type(SignInData.emailinput);
        signinpage.pwdInput.type(SignInData.pwdinput);
        signinpage.signInBtn.click();
        signinpage.invalidCredMsg.should('contain',SignInData.incorrectcred);
        cy.log('Incorrect credentials check has been verified');
    })
  
})