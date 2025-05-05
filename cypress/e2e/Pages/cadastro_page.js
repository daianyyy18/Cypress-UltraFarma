/// <references type="Cypress" />

import CadastroElements from "../Elements/cadastro.js"
const cadastroElements = new CadastroElements
const url = Cypress.config("baseUrl")
const validacao="Campo Obrigatório";

class CadastroPages{

    acessarHomePage(){
        cy.visit(url)
    }

    acessarAreaCadastro(){
        cy.get('a[href="/identificacao"]').click({ multiple: true, force: true })
    }


    preencherDadosPreCadastro(cep,cpf){
        cy.get(CadastroElements.inputCep()).type(cep).should('be.visible')
        cy.get(CadastroElements.inputCPF()).type(cpf).should('be.visible')

    }

    clicarEntrar(){
        cy.get(CadastroElements.btnEntrar()).click({ multiple: true, force: true  })
    }


    validaAreaCadastro(){
        cy.get(CadastroElements.validaAreaCadastro()).should('have.text','Criar conta')
    }

    preencherDadosCadastro(nome, telefone, dataDeNascimento, genero, email, numero, senha, confirmarSenha){
        cy.get(CadastroElements.inputNome()).type(nome).should('be.visible')        
        cy.get(CadastroElements.inputTelefone()).type(telefone).should('be.visible')
        cy.get(CadastroElements.inputDataNascimento()).type(dataDeNascimento).should('be.visible')
        cy.get(CadastroElements.inputGenero()).type(genero).should('be.visible')
        cy.get(CadastroElements.inputNumero()).type(numero).should('be.visible')
        cy.get(CadastroElements.inputEmail()).type(email).should('be.visible')
        cy.get(CadastroElements.inputSenha()).type(senha).should('be.visible')
        cy.get(CadastroElements.inputConfirmarSenha()).type(confirmarSenha).should('be.visible')
    }

   

} export default CadastroPages;