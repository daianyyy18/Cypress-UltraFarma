/// <reference types="cypress"/>

import {Given, When, Then }  from "@badeball/cypress-cucumber-preprocessor";


// Evita erro uncaught:exception
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

const url="https://hmg.ultrafarma.com.br/";
//const url="ttps://ultrafarma.com.br/";

Given('Sou um usuário com acesso ao Ultrafarma', () => {
    cy.visit(url + "/auth");
})

When('Informo meu {string} e {string}', (login, senha) =>{
    cy.get('input[id="username"]').type(login);
    cy.get('input[id="password"]').type(senha);
})

When('Clico no botão Entrar', () =>{
    cy.get('button[id="kc-login"]').should('be.visible').click();
})

When('Adiciono um produto na cesta', () =>{
    cy.get('button[class="btn btn-outline btn-primary h-10 mt-2 w-full text-sm"]').should('be.visible').first().click();
})

When('Abro minha cesta',()=>{
    cy.get('a[href="/cart"]').should('be.visible').click();
})

Then('Consigo conferir o produto adicionado a cesta', () =>{
    cy.get('h3[class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-tight text-primary-black"]',  {timeout: 50000}).should('not.exist');
   
})

When('Valor do pedido não for o valor mínimo, clico no botão Adcionar mais 1 item', () =>{
    cy.get('button[class="hover:bg-[#F3F3F3] hover:text-primary hover:shadow-[0px_3px_12px_#00000014] disabled:text-[#b2b2b2] disabled:hover:bg-transparent disabled:cursor-not-allowed flex h-full w-full items-center justify-center transition-colors duration-200 text-primary-black"]').eq('1').click();
    cy.get('button[class="hover:bg-[#F3F3F3] hover:text-primary hover:shadow-[0px_3px_12px_#00000014] disabled:text-[#b2b2b2] disabled:hover:bg-transparent disabled:cursor-not-allowed flex h-full w-full items-center justify-center transition-colors duration-200 text-primary-black"]').eq('1').click();
})

Then('Consigo atingir o valor minimo', () =>{
cy.get('p[class="block antialiased font-sans text-sm font-semibold leading-tight text-aux-gray-900 lg:whitespace-nowrap"]').first().contains("Você completou o pedido mínimo");
})


When('Clico no botão Finalizar', () =>{
    cy.get('button[class="btn btn-primary h-10 w-full"]').first().click();
})

Then('Consigo abrir a pagina de Checkout', () =>{
    cy.get('h2[class="block antialiased tracking-normal font-sans leading-[1.3] text-lg font-semibold text-primary-black lg:text-2xl"]').contains('Revisão do pedido');
})

Then('Seleciono a opção de entrega', () =>{
    cy.get('span[class="flex items-center gap-1.5 text-sm font-semibold leading-tight text-primary-black"]').eq('0').click();
})

Then('Seleciono um valor de doação', () =>{
    cy.get('button[class="btn btn-primary h-10 min-w-[72px] cursor-pointer rounded-md border border-aux-gray-300 bg-white p-0 px-4 py-2 text-primary-black/50 hover:bg-white hover:text-primary-black"]').eq('3').click();
})

Then('Seleciono a forma de pagamento', () =>{
    cy.get('p[class="antialiased font-sans flex items-center gap-4 text-sm font-semibold leading-tight text-primary-black"]').eq('1').click();
})

Then('Finalizo o pedido', () =>{
    cy.get('button[class="btn btn-primary h-[2.625rem] text-base w-full max-w-sm items-center gap-1.5 self-center"]').should('be.visible').click();
})

Then('O pedido é realizado com sucesso', () =>{
    cy.get('h1[class="block antialiased tracking-normal font-sans text-lg font-semibold leading-tight text-primary-black lg:text-2xl"]',  {timeout: 50000}).contains("Para finalizar seu pedido, realize o pagamento com Pix!");
})


