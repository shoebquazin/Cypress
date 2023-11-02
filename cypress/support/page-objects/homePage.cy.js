export class HomePage{
  naviageToLoginPage(){
    cy.contains('Log In').click();
  }
}

export const homePage=new HomePage();