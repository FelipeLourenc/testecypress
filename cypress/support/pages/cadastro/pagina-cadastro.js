const el = require('./elements').ELEMENTS;

class Cadastro{
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('catarina@email.com.br')
        cy.get('[data-test="fullName"]').type('catarina fulana da silva')
        cy.get('[data-test="registerUserName"]').type('catzinha')
        cy.get('[data-test="registerPassword"]').type('catzinha123')
    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();