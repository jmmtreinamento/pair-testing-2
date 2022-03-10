import * as PUTbooks from '../requests/PUTbooks.request'
import * as GETbooks from '../requests/GETbooks.request'
import * as POSTbooks from '../requests/POSTbooks.request'

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETbooks.allBooks().then((resAllBooks) => {
            PUTbooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Livro alterado');
            })
        })
    });

    it('Criar e alterar um livro', () => {
        POSTbooks.addBook().then((resAddBooks) => {
            PUTbooks.changeBook(resAddBooks.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Livro alterado');
            })
        })
    });
});