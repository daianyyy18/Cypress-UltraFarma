
Feature: Cadastro de Usuário
    Como um usuário
    Eu quero me cadasrar no site
    Para que eu possa acessar o sistema

Scenario Outline:  "<cenario>"
Given que eu queira criar um cadastro no site
When acesso a area de logar
When preencho o campo "<cpf>" e "<cep>" 
When acesso a area de cadastro
When preencho o campo "<nome>", "<telefone>" , "<dataDeNascimento>", "<genero>", "<email>" , "<numero>", "<senha>" e "<confirmarSenha>" 
When clicar no botão Cadastrar
Then tenho meu acesso "<mensagem>"


Examples:
  | cenario                            | cpf         | cep         | nome                  | telefone    | dataDeNascimento | genero    | email                |numero       | senha          | confirmarSenha                  | mensagem                        |
  | Cadastro realizado Com sucesso     |61645250040  | 86300-009   | Daiany Ap Da Silva    | 43991739751 | 18/11/1983       | Feminino  | degat26498@nutrv.com | 180         | 1234567890     | 1234567890                      | Cadastro realizado com sucesso
 