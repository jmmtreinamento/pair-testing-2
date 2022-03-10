import * as DELETEbooks from '../requests/DELETEbooks.request';
import * as GETbooks from '../requests/GETbooks.request';
import * as POSTbooks from '../requests/POSTbooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETbooks.allBooks().then((resallBooks) => {
            cy.log(resallBooks.body[0].id)
            DELETEbooks.deleteBook(resallBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });

    it('Criar e excluir um livro', () => {
        POSTbooks.addBook().then((resAddBook) => {
            DELETEbooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })  
    })
});