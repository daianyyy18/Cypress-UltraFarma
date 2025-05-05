Feature: MarketPlace Realizar Pedido Pix


Scenario: Adiconar produto na cesta com sucesso  
Given Sou um usuário com acesso ao MarketPlace 
When Informo meu 'daiany.silva@leanwork.com.br' e 'Daidai246**'
When Clico no botão Entrar
When Adiciono um produto na cesta
When Abro minha cesta
When Valor do pedido não for o valor mínimo, clico no botão Adcionar mais 1 item 
Then Consigo atingir o valor minimo
When Clico no botão Finalizar
Then Consigo abrir a pagina de Checkout
Then Seleciono a opção de entrega 
Then Seleciono um valor de doação 
Then Seleciono a forma de pagamento 
Then Finalizo o pedido 
Then O pedido é realizado com sucesso

