Feature: Ultrafarma Realizar Pedido Cartão

Background: Realizar Login com sucesso
Given que eu queira acessar o site  
When acesso a area de login
When insiro meu "<daiany.silva@leanwork.com.br >" e "<Daidai246**>" 
And clicar no botão Entrar
Then tenho meu acesso "<Minha conta>" 


Scenario: Adiconar produto na cesta com sucesso  
When Adiciono um produto na cesta
When Abro minha cesta
When Valor do pedido não for o valor mínimo, clico no botão Adcionar mais 1 item 
Then Consigo atingir o valor minimo
When Clico no botão Finalizar
Then Consigo abrir a pagina de Checkout
Then Seleciono a opção de entrega 
Then Seleciono um valor de doação 


Scenario: Realizar pedido no cartão com Sucesso
Then Seleciono a forma de pagamento cartão
Then Informo os dados do cartão 'Authorized' '04786223921' '4716588836362104' '11/30' '123' 
Then Seleciono a parcela 
Then Finalizo o pedido com Cartão
Then O pedido é realizado com cartão com sucesso 

