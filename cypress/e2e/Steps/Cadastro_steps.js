/// <reference types="cypress"/>

import {Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import CadastroPages from "../Pages/cadastro_page.js";
const cadastroPages = new CadastroPages


Given(/^que eu queira criar um cadastro no site$/, () => {
	cadastroPages.acessarHomePage()

})
