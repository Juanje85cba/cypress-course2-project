import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OrangeLoginPage from '../../../pages/OrangeLoginPage';
import UserGenerator from '../../../utils/data-generators/userGenerator.cy.js';

const orange = new OrangeLoginPage();

Given('el usuario abre la pagina de OrangeHRM', () => {
  orange.visit();
});

When('ingresa el usuario {string} en OrangeHRM', (username) => {
  if (username === 'RANDOM_USER') {
    const gen = new UserGenerator();
    const randomUser = gen.generateUsername();
    orange.typeUsername(randomUser);
  } else {
    orange.typeUsername(username);
  }
});

When('ingresa la contraseña {string} en OrangeHRM', (password) => {
  if (password === 'RANDOM_PASS') {
    const gen = new UserGenerator();
    const randomPass = gen.generatePassword();
    orange.typePassword(randomPass);
  } else {
    orange.typePassword(password);
  }
});

When('el usuario hace clic en el boton de login en OrangeHRM', () => {
  orange.clickLogin();
});

Then('el sistema muestra el dashboard de usuario en OrangeHRM', () => {
  // Esperar a que el dashboard cargue y verificar un header típicamente presente
  orange.getDashboardHeader().should('be.visible');
});

Then('el sistema muestra un mensaje de error de login en OrangeHRM', () => {
  // Verificar que el mensaje de error aparece
  cy.get('.oxd-alert-content-text').should('be.visible');
});
