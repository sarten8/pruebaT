
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../index.js')

chai.use(chaiHttp)

describe('Verificar mensajes', () => {
    it('- GET mensaje', (done) => {
      chai.request(server)
          .get('/mensaje/?msg=hola')
          .end((err, res) => {
                res.should.have.status(200)
                res.body.msg.should.be.a('String')
                res.body.msg.length.should.be.eql(4)
                res.body.msg.should.equals('hola')
            done();
          });
    });
    it('- POST mensaje', (done) => {
        chai.request(server)
            .post('/mensaje/')
            .send({msg: 'Mensaje post'})
            .end((err, res) => {
                  res.should.have.status(200)
                  res.body.should.be.a('String')
                  res.body.length.should.be.eql(12)
                  res.body.should.equals('Mensaje post')
              done();
            });
      });
});
