/// <reference types="cypress"/>

import {Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import LoginPages from "../Pages/Login";
const loginPages = new LoginPages


Given(/^que eu queira acessar o site$/, () => {
	loginPages.acessarHomePage();
    return true;
});

When(/^acesso a area de login$/, () => {
    loginPages.acessarAreaLogin();
    return true;
});


When(/^insiro meu "([^"]*)" e "([^"]*)"$/, (login,senha) => {
    loginPages.preencherDadosLogin(login,senha);
    return true;
});

When(/^clicar no botão Entrar$/, () => {
	loginPages.clicarEntrar();
    return true;    
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
	loginPages.validarAcesso(mensagem);
    return true;
});
