/// <reference types="cypress"/>

import {Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import CadastroPages from "../Pages/cadastro_page.js";
const cadastroPages = new CadastroPages

Given(/^que eu queira criar um cadastro no site$/, () => {
	cadastroPages.acessarHomePage();
	return true;	
});

When(/^acesso a area de logar$/, () => {
	cadastroPages.acessarAreaCadastro();
	return true;
});

When(/^Valido se os campos são obrigatorios$/, (nomeObg, telefoneObg, dataNascimentoObg, generoObg,) => {
	return true;	
});

When(/^preencho o campo "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^acesso a area de cadastro$/, () => {
	return true;
});

When(/^clico no botão Cadastrar$/, () => {
	return true;
});

Then(/^Valido se os campos são obrigatorios$/, () => {
	return true;
});

When(/^preencho o campo "([^"]*)", "([^"]*)" , "([^"]*)", "([^"]*)", "([^"]*)" , "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)"$/, (args1,args2,args3,args4,args5,args6,args7,args8,args9,args10) => {
	console.log(args1,args2,args3,args4,args5,args6,args7,args8,args9,args10);
	return true;
});

When(/^clicar no botão Cadastrar$/, () => {
	return true;
});

Then(/^tenho meu acesso "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^acesso a area de login$/, () => {
	return true;
});

When(/^insiro meu "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^clicar no botão Entrar$/, () => {
	return true;
});

Then(/^tenho meu acesso "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
