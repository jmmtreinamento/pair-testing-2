/// <reference types="cypress" /> 

const payloadAddBooks = require('../payloads/add-book.json')

function addBook() {
    return cy.request({
        method: 'POST',
        url: 'v1/Books',
        failOnStatusCode: false,
        body: payloadAddBooks
    })
}

export { addBook };