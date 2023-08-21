import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    // cy.get('[data-test="register"]').click();
    // cy.get('[data-test="email"]').type('catarina@email.com.br')
    // cy.get('[data-test="fullName"]').type('catarina fulana da silva')
    // cy.get('[data-test="registerUserName"]').type('catzinha')
    // cy.get('[data-test="registerPassword"]').type('catzinha123')
    // cy.get('[data-test="btnRegister"]').click();

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  })
})