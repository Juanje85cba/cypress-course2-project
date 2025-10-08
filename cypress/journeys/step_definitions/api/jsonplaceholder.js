import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const BASE = 'https://jsonplaceholder.typicode.com';

Given('la API de jsonplaceholder está disponible', () => {
  // No-op; base url está accesible en las requests siguientes
});

When('realiza una solicitud GET a {string}', (path) => {
  cy.request({ method: 'GET', url: `${BASE}${path}` }).as('apiResponse');
});

When('realiza una solicitud POST a {string} con body:', (path, dataTable) => {
  const body = {};
  dataTable.rows().forEach(([key, value]) => {
    // parsear números
    const num = Number(value);
    body[key] = Number.isNaN(num) ? value : num;
  });
  // Guardar el body enviado para poder validar la respuesta contra lo enviado
  cy.wrap(body).as('lastRequestBody');
  cy.request({ method: 'POST', url: `${BASE}${path}`, body }).as('apiResponse');
});

Then('la respuesta tiene código {int}', (status) => {
  cy.get('@apiResponse').its('status').should('equal', status);
});

Then('la respuesta contiene una lista de posts', () => {
  cy.get('@apiResponse').its('body').should('be.an', 'array').and('have.length.greaterThan', 0);
});

Then('la respuesta contiene una lista de comentarios', () => {
  cy.get('@apiResponse').its('body').should('be.an', 'array').and('have.length.greaterThan', 0);
});

Then('la respuesta contiene un objeto con id {int}', (id) => {
  cy.get('@apiResponse').its('body').should('have.property', 'id').and('equal', id);
});

Then('la respuesta contiene las propiedades title, body y userId', () => {
  // Validar que la respuesta incluye las mismas keys que el body que enviamos
  cy.get('@lastRequestBody').then((reqBody) => {
    const sentKeys = Object.keys(reqBody || {});
    cy.get('@apiResponse').its('body').then((respBody) => {
      // Si por alguna razón no hay keys enviadas, asegurar que la respuesta tenga id
      if (sentKeys.length === 0) {
        expect(respBody).to.have.property('id');
      } else {
        expect(respBody).to.include.all.keys(sentKeys);
      }
    });
  });
});
