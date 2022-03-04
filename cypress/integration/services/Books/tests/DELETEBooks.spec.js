import * as DELETEBooks from '../request/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
    it('Listar todos os livros', () => {
      GETBooks.allBooks().then((resAllBooks) => {
       DELETEBooks.deleteBook(resAllBooks.body[0].ID).should((resDeleteBook) => {
           expect(resDeleteBook.status).to.eq(200);
       })
  
      })
    });

    it('Criar e excluir', () => {
        POSTBooks.addBook().then((resAddBook) => {
            DELETEBooks.deleteBook(rersAddBook.body.ID).should((ressDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    });
  });