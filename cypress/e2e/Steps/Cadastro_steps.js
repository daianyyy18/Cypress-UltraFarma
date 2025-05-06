/// <reference types="cypress"/>

import {Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import CadastroPages from "../Pages/Cadastro";
const cadastroPages = new CadastroPages


Given('que eu queira criar um cadastro no site', () => {
	cadastroPages.acessarHomePage();
	return true;
})


When(/^acesso a area de logar$/, () => {
	cadastroPages.acessarAreaCadastro()
});

When(/^preencho o campo "([^"]*)" e "([^"]*)"$/, (cep,cpf) => {
	cadastroPages.preencherDadosPreCadastro(cep,cpf)
});

When(/^acesso a area de cadastro$/, () => {
	cadastroPages.validaAreaCadastro()
});

When(/^preencho o campo "([^"]*)", "([^"]*)" , "([^"]*)", "([^"]*)", "([^"]*)" , "([^"]*)", "([^"]*)" e "([^"]*)"$/, (nome, telefone, dataDeNascimento, genero, email, numero, senha, confirmarSenha) => {
	cadastroPages.preencherDadosCadastro(nome, telefone, dataDeNascimento, genero, email, numero, senha, confirmarSenha)	
});

When(/^clicar no botão Cadastrar$/, () => {
	cadastroPages.clicarEntrar()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
	cadastroPages.validaAreaCadastro(mensagem)
});
