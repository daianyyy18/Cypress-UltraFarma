Feature: Login
    Como um usuário
    Eu quero logar no site
    Para que eu possa acessar o sistema

Scenario Outline:  "<cenario>"
Given que eu queira acessar o site  
When acesso a area de login
When insiro meu "<login>" e "<senha>" 
And clicar no botão Entrar
Then tenho meu acesso "<mensagem>" 

Examples:
  | cenario                     | login                         | senha       | mensagem                    |
  | Login realizado Com sucesso | daiany.silva@leanwork.com.br  | Daidai246** | Minha conta                 |
  | Login Inválido              | daiany.silva@leanwork.com     | Daidai246** | Usuário Inválido            |