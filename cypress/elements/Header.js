class Header {
  constructor() {
    this.textMenuItemSignIn = 'Login';
    this.locDdownLogin = "#navbarDropdown-8";
  }

  clickSignIn() {
    cy.get(this.locDdownLogin).click();

    cy.get('[aria-labelledby="navbarDropdown-8"]')
      .contains(this.textMenuItemSignIn)
      .click();  //consuder to use the plugin https://github.com/cypress-io/cypress-xpath

    return this;
  }
}

export default Header;
