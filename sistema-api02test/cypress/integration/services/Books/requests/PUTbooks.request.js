/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/change-book.json')

function changeBook(idBook){
    return cy.request({
        method: 'PUT',
        url: `/v1/Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })
}

export { changeBook }