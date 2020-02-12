class HeaderIn {
  constructor() {
    this.locDdownBtn = 'dice-login-customer-name';
    this.locLogoutBtn = '[data-automation-id="logout-button"]'
    this.locSectionPersInfo = '.personal-info-section name-section'

  }

  getDdownBtn() {
    return cy.get(this.locDdownBtn);
  }

  getLogoutBtn() {
    return cy.get(this.locLogoutBtn)
  }

  clickLogout() {
    this.getDdownBtn.click();
    this.getLogoutBtn.click()
  }
}

export default HeaderIn;
