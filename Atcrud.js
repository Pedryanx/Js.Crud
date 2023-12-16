// Array para armazenar os usuários
let usuarios = [];

// Função para obter a data atual formatada
function getDataAtualFormatada() {
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Função para cadastrar um usuário
function cadastrarUsuario(nome, email, senha) {
  const dataCadastro = getDataAtualFormatada();
  const novoUsuario = { nome, email, senha, dataCadastro };
  usuarios.push(novoUsuario);
  console.log(`Usuário cadastrado com sucesso: ${nome}, ${email}, criado em ${dataCadastro}`);
}

// Função para listar todos os usuários
function listarUsuarios() {
  console.log("Lista de Usuários:");
  usuarios.forEach(usuario => {
    console.log(`Data de criação: ${usuario.dataCadastro}, Nome: ${usuario.nome}, Email: ${usuario.email}, Senha: ${usuario.senha}`);
  });
}

// Função para atualizar um usuário com base no email e senha
function atualizarUsuario(email, senha, novoNome, novoEmail, novaSenha) {
  usuarios = usuarios.map(usuario => {
    if (usuario.email === email && usuario.senha === senha) {
      usuario.nome = novoNome || usuario.nome;
      usuario.email = novoEmail || usuario.email;
      usuario.senha = novaSenha || usuario.senha;
      console.log(`Usuário atualizado com sucesso: ${usuario.nome}, ${usuario.email}`);
    }
    return usuario;
  });
}

// Função para excluir um usuário com base no email
function excluirUsuario(email) {
  usuarios = usuarios.filter(usuario => usuario.email !== email);
  console.log(`Usuário excluído com sucesso.`);
}

// Função principal para o menu
function menu() {
  let opcao = -1;

  while (opcao !== 0) {
    console.log("\nSelecione uma opção:");
    console.log("1 - Cadastrar usuário");
    console.log("2 - Listar usuários");
    console.log("3 - Atualizar usuário");
    console.log("4 - Excluir usuário");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Digite o número da opção desejada:"));

    switch (opcao) {
      case 1:
        const nome = prompt("Digite o nome do usuário:");
        const email = prompt("Digite o email do usuário:");
        const senha = prompt("Digite a senha do usuário:");
        cadastrarUsuario(nome, email, senha);
        break;
      case 2:
        listarUsuarios();
        break;
      case 3:
        const emailAtualizar = prompt("Digite o email do usuário a ser atualizado:");
        const senhaAtualizar = prompt("Digite a senha do usuário a ser atualizado:");
        const novoNome = prompt("Digite o novo nome do usuário (ou deixe em branco para manter o mesmo):");
        const novoEmail = prompt("Digite o novo email do usuário (ou deixe em branco para manter o mesmo):");
        const novaSenha = prompt("Digite a nova senha do usuário (ou deixe em branco para manter a mesma):");
        atualizarUsuario(emailAtualizar, senhaAtualizar, novoNome, novoEmail, novaSenha);
        break;
      case 4:
        const emailExcluir = prompt("Digite o email do usuário a ser excluído:");
        excluirUsuario(emailExcluir);
        break;
      case 0:
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        break;
    }
  }
}

// Chamar a função do menu para iniciar o programa
menu();
