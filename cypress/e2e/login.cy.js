/**
 * - Login spec
 *   - should display login page correctly
 *   - should display invalid input when email is empty
 *   - should display  invalid input type when email is not email
 *   - should display invalid input when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */
describe('Login spec', () => {
  it('should display login page correctly', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');

    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('input:invalid').should('have.length', 1);
  });

  it('should display alert when email is not email', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');

    cy.get('input[placeholder="Email"]').type('123456');
    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('input:invalid').should('have.length', 1);
  });

  it('should display alert when password is empty', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');

    cy.get('input[placeholder="Email"]').type('test@mail.com');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('input:invalid').should('have.length', 1);
  });

  it('should display alert when email and password are wrong', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');

    cy.get('input[placeholder="Email"]').type('test@gmail.com');

    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-container').should('contain.text', 'email or password is wrong');
  });

  it('should display homepage when email and password are correct', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');

    cy.get('input[placeholder="Email"]').type('nakama@tokped.com');
    cy.get('input[placeholder="Password"]').type('nakama');
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-container').should('contain.text', 'Login success');

    cy.get('button')
      .contains(/^Sign out$/)
      .should('be.visible');
    cy.get('a').contains('New Thread').should('be.visible');
  });
});
