import { faker } from '@faker-js/faker'

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();

describe("Test d'authentification", () => {
    it("Test d'inscription réussie", () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('Refuser les cookies').click();
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#signup-email').type(email);
        cy.get('#signup-password').type('SamiSuuuu0');
        cy.contains('Enchantés !').click();
        cy.url().should('include', '/dashboard/orders')
    })

    it("Test d'inscription échouée", () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('Refuser les cookies').click();
        cy.get('#firstName').type('Sami');
        cy.get('#lastName').type('Suuuuuuuuu');
        cy.get('#signup-email').type('vosimih51@a.c9');
        cy.get('#signup-password').type('SamiSuuuu0');
        cy.contains('Enchantés !').click();
        cy.contains('Saisissez une adresse e-mail valide.').should('be.visible');
    })

    it("Tests d'authentification", () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('Refuser les cookies').click();
        cy.get('#signin-email').type('vosimih51@quamox.com');
        cy.get('#signin-password').type('SamiSuuuu0');
        cy.contains('Welcome Back!').click();
        cy.url().should('include', '/dashboard/orders')
    })

})