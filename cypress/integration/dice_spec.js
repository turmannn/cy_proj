import HomePage from '../elements/pages/Home';
import SignIn from '../elements/pages/SignIn';


// describe('HomePage tests', function() {
//   it('checks Home page is loaded using title', function() {
//     const homePg = new HomePage;
//     homePg.visit()
//
//     cy.title().should('eq', homePg.title)
//   })
//
//   it('checks Job Title field is present', function() {
//     const homePg = new HomePage;
//     homePg.visit()
//
//     homePg.getJobTitle()
//       .should('exist')
//       .invoke('attr', 'placeholder')
//       .should('contain', homePg.textPlaceholderJobTtl)
//   })
//
//   it('checks Location field is present', function() {
//     const homePg = new HomePage;
//     homePg.visit()
//
//     homePg.getLocatoin()
//         .should('exist')
//         .invoke('attr', 'placeholder')
//         .should('contain', homePg.textPlaceholderLocation)
//   })
//
//
//   it('checks Job Search button is present', function() {
//     const homePg = new HomePage;
//     homePg.visit()
//
//     homePg.getSearchBtn()
//         .should('exist')
//         .contains('Find Jobs')
//   })
//
//   it('checks Login page is loaded', function() {
//     const homePg = new HomePage;
//     homePg.visit()
//
//     const signInPg = homePg.goToSignIn();
//     cy.title().should('eq', signInPg.title)
//   })
//
//
//   it('search Result page is loaded. Has list of 20 items', function() {
//     const homePg = new HomePage;
//     homePg.visit()
//
//     const searchResPg = homePg.searchJob('QA', 'Austin');
//     cy.title().should('eq', searchResPg.title)
//
//     searchResPg.getResultsObj().should(($cards) => {
//       expect($cards, '20 items').to.have.length(20)
//       expect($cards, 'have QA in summary').to.contain('QA')
//     })
//
//   })
// })


describe('Login Page tests', function() {
  it('valid email-password pair provided. Profile page loaded', function() {
    const signInPg = new SignIn;
    signInPg.visit()

    const profilePg = signInPg
      .fillEmail("sinew46969@nwesmail.com")
      .fillPassword("WEAKpassword1234")
      .submit();

    cy.title().should('eq', profilePg.title);
  })

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
      .contains(signInPg.textHintEmailPsd)
})

  it('Email nor password are not provided. Hints come up after the form submitted', function() {
    const signInPg = new SignIn;
    signInPg.visit()
    signInPg.submit();

    signInPg.getEmailError()
      .should('exist')
      .contains(signInPg.textHintEmail)

    signInPg.getPasswError()
      .should('exist')
      .contains(signInPg.textHintPsd)
  })
})
