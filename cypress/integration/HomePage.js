import HomePage from '../elements/pages/Home';


describe('HomePage tests', function() {
  it('checks Home page is loaded using title', function() {
    const homePg = new HomePage;
    homePg.visit()

    cy.title().should('eq', homePg.title)
  })

  it('checks Job Title field is present', function() {
    const homePg = new HomePage;
    homePg.visit()

    homePg.getJobTitle()
      .should('exist')
      .invoke('attr', 'placeholder')
      .should('contain', homePg.textPlaceholderJobTtl)
  })

  it('checks Location field is present', function() {
    const homePg = new HomePage;
    homePg.visit()

    homePg.getLocatoin()
        .should('exist')
        .invoke('attr', 'placeholder')
        .should('contain', homePg.textPlaceholderLocation)
  })


  it('checks Job Search button is present', function() {
    const homePg = new HomePage;
    homePg.visit()

    homePg.getSearchBtn()
        .should('exist')
        .contains('Find Jobs')
  })

  it('checks Login page is loaded', function() {
    const homePg = new HomePage;
    homePg.visit()

    const signInPg = homePg.goToSignIn();
    cy.title().should('eq', signInPg.title)
  })


  it('search Result page is loaded. Has list of 20 items', function() {
    const homePg = new HomePage;
    homePg.visit()

    const searchResPg = homePg.searchJob('QA', 'Austin');
    cy.title().should('eq', searchResPg.title)

    searchResPg.getResultsObj().should(($cards) => {
      expect($cards, '20 items').to.have.length(20)
      expect($cards, 'have QA in summary').to.contain('QA')
    })
  })
})
