// verbo/metodo - endpoint . motivo (requests) . extensão
/// <reference types="cypress" />

function allBooks() {
    //cy.request . client http
    return cy.request({
      method: 'GET',
      url: '/v1/Books',
      failOnStatusCode: false,
    })
}
export { allBooks };