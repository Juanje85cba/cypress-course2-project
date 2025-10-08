class OrangeLoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    dashboardHeader: () => cy.get('h6.oxd-text--h6'),
  }

  visit() {
    const oraEnv = Cypress.env('ORA') || {};
    const url = oraEnv.url || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    cy.visit(url);
  }

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  getDashboardHeader() {
    return this.elements.dashboardHeader();
  }
}

export default OrangeLoginPage;
