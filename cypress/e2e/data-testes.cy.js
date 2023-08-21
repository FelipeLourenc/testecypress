describe('Página de cadastro', () => {
    
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
    })
    const usuarios = require('../fixtures/usuarios.json')
        usuarios.forEach(usuarios => {
            it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

                cy.get('[data-test="register"]').click();
                cy.get('input[data-test="email"]').type(usuarios.email);
                cy.get('input[data-test="fullName"]').type(usuarios.fullName);
                cy.get('input[data-test="registerUserName"]').type(usuarios.userName);
                cy.get('input[data-test="registerPassword"]').type(usuarios.password);
                cy.get('[data-test="btnRegister"]').click();
        })
    })
})
