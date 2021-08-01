class LessonsPage {

    get secondPageLink(){
       return cy.xpath("//span[contains(text(),'Page 2 of 8')] /ancestor::a[@data-selector='worksheet']");
    }
}
export default LessonsPage;