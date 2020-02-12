import Header from '../Header';
import SignInPage from './SignIn';
import SearchResultsPage from './SearchResults';

class HomePage {
  constructor() {
    this.header = new Header();

    this.title = 'Find Jobs in Tech | Dice.com | Find Jobs in Tech';
    
    this.textPlaceholderJobTtl = 'Job title, skills or company';
    this.textPlaceholderLocation = 'Zip code, city or state';

    this.locFieldJobTitle = 'dhi-new-typeahead-input input';
    this.locFieldLocation = 'dhi-google-location-search input';
    this.locBtnSearch = '#submitSearch-button';
  }

  visit() {
    cy.visit('/');
  }

  getTitle() {
    return cy.get(this.locFieldJobTitle);
  }

  getLocatoin() {
    return cy.get(this.locFieldLocation);
  }

  getSearchBtn() {
    return cy.get(this.locBtnSearch)
  }

  goToSignIn() {
    const link = this.header.clickSignIn();

    const signIn = new SignInPage();
    return signIn;
  }

  searchJob(jobTitle, JobLocation) {
    this.getTitle().type(jobTitle);
    this.getLocatoin().type(JobLocation);
    this.getSearchBtn().click();

    return new SearchResultsPage()
  }
}

export default HomePage;
