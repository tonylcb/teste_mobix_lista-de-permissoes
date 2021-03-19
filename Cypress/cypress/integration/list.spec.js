/// <reference types="cypress" />

describe('Accordion', () => {
  it('abrir as sublistas', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#Table_dataAnalise__2kGY4').click();
    cy.get('#Table_dataContas__2x8Y6').click();
    cy.get('#Table_dataCustomizacao__17WTZ').click();
    cy.get('#Table_dataFinanceiro__1yXGb').click();
  });
  it('marcar e desmarcar o módulo Todos', () => {
    cy.get(':nth-child(2) > :nth-child(2) > input').click();
    cy.get(':nth-child(2) > :nth-child(3) > input').click();
    cy.get(':nth-child(2) > :nth-child(4) > input').click();
    cy.get(':nth-child(2) > :nth-child(5) > input').click();
    cy.get(':nth-child(2) > :nth-child(6) > input').click();
    cy.get(':nth-child(2) > :nth-child(2) > input').click();
    cy.get(':nth-child(2) > :nth-child(3) > input').click();
    cy.get(':nth-child(2) > :nth-child(4) > input').click();
    cy.get(':nth-child(2) > :nth-child(5) > input').click();
    cy.get(':nth-child(2) > :nth-child(6) > input').click();
  });
  it('marcar checkboxes de Ver listagem em Contas', () => {
    cy.get(':nth-child(7) > :nth-child(2) > input').click();
    cy.get(':nth-child(8) > :nth-child(2) > input').click();
    cy.get(':nth-child(9) > :nth-child(2) > input').click();
    cy.get(':nth-child(9) > :nth-child(2) > input').click();
    cy.get(':nth-child(8) > :nth-child(2) > input').click();
    cy.get(':nth-child(7) > :nth-child(2) > input').click();
  });
  it('marcar e desmarcar todos os checkboxes do módulo Análise', () => {
    cy.get(':nth-child(3) > :nth-child(2) > input').click();
    cy.get(':nth-child(3) > :nth-child(3) > input').click();
    cy.get(':nth-child(3) > :nth-child(4) > input').click();
    cy.get(':nth-child(3) > :nth-child(5) > input').click();
    cy.get(':nth-child(3) > :nth-child(6) > input').click();
    cy.get(':nth-child(3) > :nth-child(2) > input').click();
    cy.get(':nth-child(3) > :nth-child(3) > input').click();
    cy.get(':nth-child(3) > :nth-child(4) > input').click();
    cy.get(':nth-child(3) > :nth-child(5) > input').click();
    cy.get(':nth-child(3) > :nth-child(6) > input').click();
  });
  it('marcar e desmarcar todos os checkboxes do módulo Contas', () => {
    cy.get(':nth-child(6) > :nth-child(2) > input').click();
    cy.get(':nth-child(6) > :nth-child(3) > input').click();
    cy.get(':nth-child(6) > :nth-child(4) > input').click();
    cy.get(':nth-child(6) > :nth-child(5) > input').click();
    cy.get(':nth-child(6) > :nth-child(6) > input').click();
    cy.get(':nth-child(6) > :nth-child(2) > input').click();
    cy.get(':nth-child(6) > :nth-child(3) > input').click();
    cy.get(':nth-child(6) > :nth-child(4) > input').click();
    cy.get(':nth-child(6) > :nth-child(5) > input').click();
    cy.get(':nth-child(6) > :nth-child(6) > input').click();
  });
  it('marcar e desmarcar todos os checkboxes do módulo Customização', () => {
    cy.get(':nth-child(10) > :nth-child(2) > input').click();
    cy.get(':nth-child(10) > :nth-child(3) > input').click();
    cy.get(':nth-child(10) > :nth-child(4) > input').click();
    cy.get(':nth-child(10) > :nth-child(5) > input').click();
    cy.get(':nth-child(10) > :nth-child(6) > input').click();
    cy.get(':nth-child(10) > :nth-child(2) > input').click();
    cy.get(':nth-child(10) > :nth-child(3) > input').click();
    cy.get(':nth-child(10) > :nth-child(4) > input').click();
    cy.get(':nth-child(10) > :nth-child(5) > input').click();
    cy.get(':nth-child(10) > :nth-child(6) > input').click();
  });
  it('marcar e desmarcar todos os checkboxes do módulo Financeiro', () => {
    cy.get(':nth-child(15) > :nth-child(2) > input').click();
    cy.get(':nth-child(15) > :nth-child(3) > input').click();
    cy.get(':nth-child(15) > :nth-child(4) > input').click();
    cy.get(':nth-child(15) > :nth-child(5) > input').click();
    cy.get(':nth-child(15) > :nth-child(6) > input').click();
    cy.get(':nth-child(15) > :nth-child(2) > input').click();
    cy.get(':nth-child(15) > :nth-child(3) > input').click();
    cy.get(':nth-child(15) > :nth-child(4) > input').click();
    cy.get(':nth-child(15) > :nth-child(5) > input').click();
    cy.get(':nth-child(15) > :nth-child(6) > input').click();
  });
  it('marcar checkboxes aleatórios', () => {
    cy.get(':nth-child(6) > :nth-child(3) > input').click();
    cy.get(':nth-child(11) > :nth-child(5) > input').click();
    cy.get(':nth-child(13) > :nth-child(3) > input').click();
    cy.get(':nth-child(15) > :nth-child(5) > input').click();
    cy.get(':nth-child(4) > :nth-child(3) > input').click();
    cy.get(':nth-child(3) > :nth-child(5) > input').click();
    cy.get(':nth-child(2) > :nth-child(2) > input').click();
    cy.get(':nth-child(8) > :nth-child(2) > input').click();
    cy.get(':nth-child(15) > :nth-child(2) > input').click();
    cy.get(':nth-child(2) > :nth-child(6) > input').click();
    cy.get(':nth-child(10) > :nth-child(4) > input').click();
  });
  it('clicar em Cadastrar', () => {
    cy.get('.Button_buttonCadastro__Q3BLV').click();
  });
  it('fechar as sublistas', () => {
    cy.get('#Table_dataAnalise__2kGY4').click();
    cy.get('#Table_dataContas__2x8Y6').click();
    cy.get('#Table_dataCustomizacao__17WTZ').click();
    cy.get('#Table_dataFinanceiro__1yXGb').click();
    cy.visit('http://localhost:3000/');
  });
});
