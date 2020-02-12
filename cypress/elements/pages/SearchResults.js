import Header from './Header';


class SearchResultsPage {
  constructor() {
    this.header = new Header();
    this.title = 'Search Jobs | Dice.com';
    this.locResults = 'js-search-display dhi-search-cards-widget dhi-search-card'

  }

  visit() {
    cy.visit('/jobs');
  }


  getResultsObj() {
    return cy.get(this.locResults);
  }

}

export default SearchResultsPage;
