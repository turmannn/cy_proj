import SignInPage from './SignIn';
import HeaderIn from '../HeaderIn';

class ProfilePage {
  constructor() {
    this.header = new HeaderIn();

    this.title = 'Dashboard Home Feed | Dice.com';

    this.locDdownBtn = 'dice-login-customer-name';
    this.locLogoutBtn = '[data-automation-id="logout-button"]'
    this.locSectionPersInfo = '.personal-info-section name-section'

  }

  visit() {
    cy.visit('/home/home-feed');
  }


  logout() {
    this.header.clickLogout();
    const signIn = new SignInPage();
    return signIn;
  }

}


export default ProfilePage;
