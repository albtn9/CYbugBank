describe('Página de Login - Validações antes do login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir os elementos principais da tela de login', () => {
    cy.get('input[name="email"]')
      .should('have.attr', 'placeholder', 'Informe seu e-mail');
    cy.get('input[name="password"]')
      .should('have.attr', 'placeholder', 'Informe sua senha');
    cy.get('button[type="submit"]')
      .contains('Acessar')
      .should('be.visible');
   cy.get('button[type="button"]')
      .contains('Registrar')
      .should('be.visible');    
  });

  it('Deve exibir as mensagens principais da tela de login', () => {
    cy.get('button[type="submit"]')
      .contains('Acessar')
      .should('be.visible')
      .click();
    cy.get('p')
      .filter(':contains(É campo obrigatório)')
      .should('have.length', 2)
      .and('be.visible');    
  });
 
});