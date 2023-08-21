describe('Página de login', () => {
  
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })
    it('Preencher os campos do login corretamente para fazer o login de usuário', () => {
      cy.login(catzinha, catzinha123);
    })
  })

