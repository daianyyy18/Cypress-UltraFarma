
Feature: Cadastro de Usuário
    Como um usuário
    Eu quero me cadasrar no site
    Para que eu possa acessar o sistema

Scenario Outline:  "<cenario>"
Given que eu queira criar um cadastro no site
When acesso a area de logar
When Valido se os campos são obrigatorios 
When preencho o campo "<cpf>" e "<cep>" 
When acesso a area de cadastro

When clico no botão Cadastrar
Then Valido se os campos são obrigatorios 
When preencho o campo "<nome>", "<telefone>" , "<dataDeNascimento>", "<genero>", "<email>" , "<endereco>", "<Cidade>", "<estado>", "<senha>" e "<confirmarSenha>" 
When clicar no botão Cadastrar
Then tenho meu acesso "<mensagem>"
When acesso a area de login
When insiro meu "<login>" e "<senha>" 
And clicar no botão Entrar
Then tenho meu acesso "<mensagem>" 

Examples:
  | cenario                            | cpf         | cep         | nome                  | telefone    | dataDeNascimento | genero    | email                | endereco       | Cidade      | estado  | senha       | confirmarSenha | mensagem                        |
  | Cadastro realizado Com sucesso     |61645250040  | 86300-009   | Daiany Ap Da Silva    | 43991739751 | 18/11/1983       | Feminino  | degat26498@nutrv.com | Rua 1          | Arapongas   | PR      | 1234567890  | 1234567890     | Cadastro realizado com sucesso  |           
  | Cadastro CPF Inválido              |12345678900  | 86300-009   | Daiany Ap Da Silva    | 43991739751 | 18/11/1983       | Feminino  | degat26498@nutrv.com | Rua 2          | Arapongas   | PR      | 1234567890  | 1234567890     | CPF inválido                    |
  | Cadastro CEP Inválido              |46507966010  | 86300-000   | Daiany Ap Da Silva    | 43991739751 | 18/11/1983       | Feminino  | degat26498@nutrv.com | Rua 3          | Arapongas   | PR      | 1234567890  | 1234567890     | CEP inválido                    |
  | Cadastro Telefone Inválido         |46507966010  | 86300-000   | Daiany Ap Da Silva    | 4399173975  | 18/11/1983       | Feminino  | degat26498@nutrv.com | Rua 3          | Arapongas   | PR      | 1234567890  | 1234567890     | Telefone inválido               |
  | Cadastro Email Inválido            |46507966010  | 86300-000   | Daiany Ap Da Silva    | 43991739751 | 18/11/1983       | Feminino  | degat26498nutrv.com  | Rua 3          | Arapongas   | PR      | 1234567890  | 1234567890     | Email inválido                  |
  