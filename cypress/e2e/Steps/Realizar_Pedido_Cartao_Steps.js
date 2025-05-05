/// <reference types="cypress"/>

import { Then }  from "@badeball/cypress-cucumber-preprocessor";
import "login_steps.js";


// Evita erro uncaught:exception
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

Then('Seleciono a forma de pagamento cartão', () =>{
    cy.get('p[class="antialiased font-sans flex items-center gap-4 text-sm font-semibold leading-tight text-primary-black"]').eq('0').click();
})

Then('Informo os dados do cartão {string} {string} {string} {string} {string}', (titular, documento, numero, validade, cvv) =>{
    cy.wait(1000);
    cy.get('input[id="titular"]').type(titular);
    cy.get('input[id="documento"]').type(documento);
    cy.get('input[id="numero"]').type(numero);
    cy.get('input[id="validade"]').type(validade);
    cy.get('input[id="cvv"]').type(cvv);

})

Then('Seleciono a parcela', () =>{
    cy.get('button[class="flex w-full items-center justify-between rounded-md border border-aux-gray-300 bg-white px-3 py-2 font-sans text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-aux-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 __variable_e3c363 h-10 min-w-[250px] data-[placeholder]:font-medium data-[placeholder]:text-aux-gray-700"]').click();
    cy.get('select[tabindex="-1"]').should("be.visible").select(1, {force: true});

})


Then('Finalizo o pedido com Cartão', () =>{
    cy.get('button[form="creditCardForm"]').should("be.visible").click();
})

Then('O pedido é realizado com cartão com sucesso', () =>{
    cy.get('h1[class="block antialiased tracking-normal font-sans text-lg font-semibold leading-tight text-primary-black lg:text-2xl"]',  {timeout: 50000}).contains("Seu pedido foi realizado com sucesso!");
})


