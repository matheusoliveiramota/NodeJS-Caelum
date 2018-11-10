// chai + mocha
    // node_modules/.bin/mocha ./testes -w --recursive
// superteste: TESTE DE APIS

const calc = require('./calculadora');
const chai = require('chai');
    describe('#Calculadora', () => {
        it('1 + 1 DEVE ser 2', function() {
            chai.expect(calc.soma(1,1)).to.be.equal(2)
        });
    });

// VERSÃO COM NODE
  //const assert = require('assert');
    //assert.equal(soma(1,1), 2, '1 + 1 é igual a 2');
    //assert.equal(soma(1,2), 3, '1 + 2 é igual a 3');






