import SignIn from '../elements/pages/SignIn';
import HomePage from '../elements/pages/Home';

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
