/// <references type="Cypress" />

import LoginElements from "../Elements/Login";
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
class LoginPages{

    acessarHomePage(){
        cy.visit(url)
    }

    acessarAreaLogin(){
        cy.get('a[href="/identificacao"]').click({ multiple: true, force: true })
    }

    preencherDadosLogin(login,senha){
        cy.get(loginElements.inputEmail()).type(login).should('be.visible')
        cy.get(loginElements.inputSenha()).type(senha).should('be.visible')

    }

    clicarEntrar(){
        cy.get(loginElements.btnEntrar()).click({ multiple: true, force: true  })
    }

    validarAcesso(mensagem){
        cy.get(loginElements.txtMinhaConta()).click({ multiple: true, force: true })
    }


} export default LoginPages;