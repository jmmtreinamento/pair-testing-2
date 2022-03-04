/// <reference types="cypress" />

const payloadAAddBook = require('../payloads/add-book.json')

function addBook(){
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAAddBook
    })
}

export { addBook };