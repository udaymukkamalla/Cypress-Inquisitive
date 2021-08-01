class HomePage {

    get signInBtnHomePage(){
        return cy.get('a[href="/signin"]');
    }

    get aboutBtn(){
        return cy.get('button[id="about"]');
    }

    get aboutInquisitiveBtn(){
        return cy.get('[data-selector ="nav-menu-about-inquisitive"]');
    }

    get joinBtn(){
        return cy.get('[data-selector="header-menu-join"]');
    }
}
export default HomePage;