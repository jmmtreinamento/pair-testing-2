import * as POSTbooks from '../requests/POSTbooks.request';

context('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTbooks.addBook().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Livro");
        })
    });
});