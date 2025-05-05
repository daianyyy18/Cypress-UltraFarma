/// <references type="Cypress" />

import CadastroElements from "../Elements/cadastro.js"
const cadastroElements = new CadastroElements
const url = Cypress.config("baseUrl")

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

    clicarCadastrarValidaca(){
        cy.get(CadastroElements.btnCadastrar()).click({ multiple: true, force: true  })
    }

    preencherDadosCadastroValidaçãp(nome,telefone,dataNascimento,endereco,numero,complemento,referencia,bairro,cidade,estado,email,senha,confirmarSenha,politica,termos){
        cy.get(CadastroElements.inputNome()).       
        cy.get(CadastroElements.inputTelefone()).type(telefone).should('be.visible')
        cy.get(CadastroElements.inputDataNascimento()).type(dataNascimento).should('be.visible')
        cy.get(CadastroElements.inputEndereco()).type(endereco).should('be.visible')
        cy.get(CadastroElements.inputNumero()).type(numero).should('be.visible')
        cy.get(CadastroElements.inputComplemento()).type(complemento).should('be.visible')
        cy.get(CadastroElements.inputReferencia()).type(referencia).should('be.visible')
        cy.get(CadastroElements.inputBairro()).type(bairro).should('be.visible')
        cy.get(CadastroElements.inputCidade()).type(cidade).should('be.visible')
        cy.get(CadastroElements.inputEstado()).type(estado).should('be.visible')
        cy.get(CadastroElements.inputEmail()).type(email).should('be.visible')
        cy.get(CadastroElements.inputSenha()).type(senha).should('be.visible')
        cy.get(CadastroElements.inputConfirmarSenha()).type(confirmarSenha).should('be.visible')
        cy.get(CadastroElements.checkboxPolitica()).check().should('be.checked')
        cy.get(CadastroElements.checkboxTermos()).check().should('be.checked')
        cy.get(CadastroElements.btnCadastrar()).click({ multiple: true, force: true  })

    }

    preencherDadosCadastro(nome,telefone,dataNascimento,endereco,numero,complemento,referencia,bairro,cidade,estado,email,senha,confirmarSenha,politica,termos){
        cy.get(CadastroElements.inputNome()).type(nome).should('be.visible')        
        cy.get(CadastroElements.inputTelefone()).type(telefone).should('be.visible')
        cy.get(CadastroElements.inputDataNascimento()).type(dataNascimento).should('be.visible')
        cy.get(CadastroElements.inputEndereco()).type(endereco).should('be.visible')
        cy.get(CadastroElements.inputNumero()).type(numero).should('be.visible')
        cy.get(CadastroElements.inputComplemento()).type(complemento).should('be.visible')
        cy.get(CadastroElements.inputReferencia()).type(referencia).should('be.visible')
        cy.get(CadastroElements.inputBairro()).type(bairro).should('be.visible')
        cy.get(CadastroElements.inputCidade()).type(cidade).should('be.visible')
        cy.get(CadastroElements.inputEstado()).type(estado).should('be.visible')
        cy.get(CadastroElements.inputEmail()).type(email).should('be.visible')
        cy.get(CadastroElements.inputSenha()).type(senha).should('be.visible')
        cy.get(CadastroElements.inputConfirmarSenha()).type(confirmarSenha).should('be.visible')
        cy.get(CadastroElements.checkboxPolitica()).check().should('be.checked')
        cy.get(CadastroElements.checkboxTermos()).check().should('be.checked')
        cy.get(CadastroElements.btnCadastrar()).click({ multiple: true, force: true  })

    }


} export default CadastroPages;