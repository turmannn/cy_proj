class SignInPage {
  // const locFieldEmail = "#login-email-input";
  // const locFieldPassword = "#login-password-input";
  // const locHintInvCreds = "#label-login-password-input-error";
  // const locBtnSubmit = "#login-submit-button";

  constructor() {
    this.locFieldEmail = "#email";
    this.locFieldPassword = "#password";
    this.locHintInvCreds = '[data-automation-id="login-failure-help-message"]';
    this.locHintInvEmail = '[data-automation-id="invalid-email-help-message"]';
    this.locHintInvPassv = '#invalid-password-help-message';
    this.locBtnSubmit = '[data-automation-id="sign-in-button"]';
  }

  visit() {
    cy.visit('/dashboard/login');
  }

  getEmailPasswordError() {
    return cy.get(this.locHintInvCreds);
  }

  getEmailError() {
    return cy.get(this.locHintInvEmail);
  }

  getPasswError() {
    return cy.get(this.locHintInvPassv);
  }

  fillEmail(value) {
    const field = cy.get(this.locFieldEmail);
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get(this.locFieldPassword);
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get(this.locBtnSubmit);
    button.click();

  }
}

export default SignInPage;
