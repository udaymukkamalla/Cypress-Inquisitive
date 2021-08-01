class SignInPage {

    validateSignInCred(pwdreq,invalidemailinput,emailinvalid,emailinput,pwdinput){
       
        cy.get(Signinpage.pwdreq_msg).should('contain', pwdreq);
        cy.get(Signinpage.emailinput).type(invalidemailinput);
        cy.get(Signinpage.emailreq_msg).should('contain',emailinvalid);
        cy.get(Signinpage.emailinput).type(emailinput);
        cy.get(Signinpage.pwdinput).type(pwdinput);
        cy.get(Signinpage.incorrectcred_msg).should('contain',incorrectcred);
       
    }

    get signInBtn(){
        return cy.get('[data-selector="sign-in-button"]');
    }

    get emailReqMsg(){
        return cy.get('#signin-error-email');
    }

    get pwdReqMsg(){
        return cy.get('#signin-error-password');
    }

    get emailInput(){
        return cy.get('input[type="email"]');
    }

    get pwdInput(){
        return cy.get('input[type="password"]');
    }

    get invalidCredMsg(){
        return cy.get('#signin-error');
    }
 
    get invalidEmailMsg(){
        return cy.get('#signin-error-email');
    }

}
export default SignInPage;