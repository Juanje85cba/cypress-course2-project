import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage  from '../../../pages/LoginPage';
const login = new LoginPage();

// Obtenemos el entorno actual de Cypress (fallback a DEV si no está definido)
// Esto nos permite usar diferentes configuraciones según el entorno (TST, STG, etc.)
let envi = Cypress.env('ENV') || 'DEV';
// Obtenemos la URL base de la aplicación según el entorno, con comprobación
const envConfig = Cypress.env(envi) || Cypress.env('DEV') || {};
const url = envConfig.url;


Given("el usuario abre la web de Practicas", function () {
    // Visitamos la URL de la aplicación
    cy.visit(`${url}`)
});

When("ingresa el usuario {string}", function (username) {
    // Llenamos el campo de usuario con el valor proporcionado
    login.typeUsername(username);
});

When("ingresa la contraseña {string}", function (password) {
    // Llenamos el campo de contraseña con el valor proporcionado
    login.typePassword(password);
});

When("el usuario hace clic en el botón ingresar", function () {
    // Hacemos clic en el botón de ingresar
    login.clickLogin();
});

Then("el sistema muestra el mensaje de error {string}", function (expectedError) {
    // Verificamos que el mensaje de error mostrado sea el esperado
    login.getErrorMessage().should('have.text', expectedError);
});
