
class CadastroElements{
    inputCPF =() =>{ return 'input[name="CPF"]' }
    validacaoCPF = () => { return '#id=parsley-id-8065' }
    inputCEP = () => { return 'input[name="Cep"]' }
    validacaoCep = () => { return '#id="parsley-id-485' }
    inputNome = () => { return 'input[name="nome"]' }
    validacaoNome = () => { return '.alert-danger' }
    inputTelefone = () => { return 'input[name="telefone"]' }
    validacaoTelefone = () => { return '.alert-danger' }
    inputDataNascimento = () => { return 'input[name="data-nascimento"]' }
    validacaoDataNascimento = () => { return '.alert-danger' }
    inputEndereco = () => { return 'input[name="endereco"]' }
    inputNumero = () => { return 'input[name="numero"]' }
    validacaoNumero = () => { return '.alert-danger' }
    inputComplemento = () => { return 'input[name="complemento"]' }
    inputreferencia = () => { return 'input[name="referencia"]' }
    inputBairro = () => { return 'input[name="bairro"]' }
    inputCidade = () => { return 'input[name="cidade"]' }
    inputEstado = () => { return 'input[name="estado"]' }
    inputEmail = () => { return 'input[name="email"]' }
    inputSenha = () => { return 'input[name="senha"]' }
    inputConfirmarSenha = () => { return 'input[name="confirmar-senha"]' }
    checkboxPolitica = () => { return 'input[name="politica"]' }
    validacaoPolitica = () => { return '.alert-danger' }
    checkboxTermos = () => { return 'input[name="termos"]' }
    validacaoTermos = () => { return '.alert-danger' }
    btnCadastrar = () => { return 'button[type="submit"]'}
    txtSucesso = () => { return '.alert-success'}
} export default CadastroElements

