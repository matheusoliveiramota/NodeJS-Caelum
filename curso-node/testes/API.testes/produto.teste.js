const { expect } = require('chai');
// TESTE DE APIS
const request = require('supertest');
const app = require('../../app');

describe('# /produtos', () => {
    describe('## GET', () => {
        it('Deve retornar uma lista de livros', (done) => {
            request(app)
                .get('/produtos') // Mandar Request do tipo GET
                .set('Accept', 'application/json') // HEADER: Aceito formato JSON
                .end(function (err, res) {
                    if (err) throw err; // 1 - SE houver algum erro, lance
                    expect(res.body).to.have.property('livros');
                    expect(res.body.livros).to.be.an('array');
                    done()
                });
        })
    });

    describe('## POST', () => {
        it('Deve cadastrar novo livro', (done) => {
            const tituloLivro = 'TESTE DE API';
            const precoLivro = 550.45;
            const descricaoLivro = 'MUITO LEGAL, LIVRO BOM PARA TESTAR API';

            request(app)
                .post('/produtos') // Mandar Request do tipo POST
                .send({titulo: tituloLivro, preco: precoLivro, descricao: descricaoLivro})
                .set('Accept', 'application/json') // HEADER: Aceito formato JSON
                .set('Content-Type', 'application/json')
                .end(function (err, res) {
                    if (err) throw err; // 1 - SE houver algum erro, lance
                    //console.log(res.header['location'], res.status)
                    expect(res.header['location']).to.be.equal('/produtos');
                    expect(res.status).to.be.equal(302);
                    // expect(res.body).to.have.property('livros');
                    // expect(res.body.livros).to.be.an('array');
                    // expect(res.body.livros).to.contains(tituloLivro);
                    // expect(res.body.livros).to.contains(precoLivro);
                    // expect(res.body.livros).to.contains(descricaoLivro);
                    done();
                });
        });
    });
});