import HomePage from '../elements/pages/Home';
import SignIn from '../elements/pages/SignIn';


describe('HomePage tests', function() {
  it('checks Home page is loaded using title', function() {
    const homePg = new HomePage;
    homePg.visit()

    cy.title().should('eq', 'Find Jobs in Tech | Dice.com | Find Jobs in Tech')
  })

  it('checks Job Title field is present', function() {
    const homePg = new HomePage;
    homePg.visit()

    homePg.getTitle()
      .should('exist')
      .invoke('attr', 'placeholder')
      .should('contain', 'Job title, skills or company')
  })

  it('checks Location field is present', function() {
    const homePg = new HomePage;
    homePg.visit()

    homePg.getLocatoin()
        .should('exist')
        .invoke('attr', 'placeholder')
        .should('contain', 'Zip code, city or state')
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
    cy.title().should('eq', 'Sign In')
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


describe('Login Page tests', function() {
  it('email-password pair does not exist. Hints come up after the form submitted', function() {
    const homePg = new HomePage;
    homePg.visit()

    const signInPg = homePg.goToSignIn();

    signInPg
      .fillEmail("someEmail@tut.by")
      .fillPassword("somePassword1234")
      .submit();

    signInPg.getEmailPasswordError()
      .should('exist')
      .contains('Email and/or password incorrect.')

})

  it('Email nor password are not provided. Hints come up after the form submitted', function() {

    const signInPg = new SignIn;

    signInPg.visit()
    signInPg.submit();

    signInPg.getEmailError()
      .should('exist')
      .contains('Enter a valid email')

    signInPg.getPasswError()
      .should('exist')
      .contains('8 character minimum with at least 1 number and 1 letter')

  })
})
