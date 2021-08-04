/// <reference types="Cypress" />

describe('Login Validation Test', () => {
  it('Navigate to Website', () => {
    cy.visit('https://the-internet.herokuapp.com/login').url(
      'eq',
      'https://the-internet.herokuapp.com/login'
    );
    cy.contains('Login Page').should('be.visible');
  });
  it('Invalid Username Validation', () => {
    cy.get('.fa').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });
  it('Invalid Username Validation', () => {
    cy.get('.fa').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });
  it('Empty Password Validation', () => {
    cy.get('#username').type('tomsmith');
    cy.get('.fa').click();
    cy.contains('Your password is invalid!').should('be.visible');
  });
  it('Wrong Password Validation', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('test');
    cy.get('.fa').click();
    cy.contains('Your password is invalid!').should('be.visible');
  });
  it('Login Success', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
    // Added this wait so you can see that it logged in
    cy.wait(1000);
    cy.get('.icon-signout').click();
  });
});
