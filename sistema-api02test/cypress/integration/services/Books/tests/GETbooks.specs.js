import * as GETbooks from '../requests/GETbooks.request';

describe('GET Books', () => {
    it('Listar todos os livros', () => {
        GETbooks.allBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
           // expect(response.body.id).to.eq(1);

        })
    })
})