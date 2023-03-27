// criei esse  objeto de funcionarios com suas propriedades
let medicos = {
    nome: "",
    area:"",
    email: "",
    senha: "",
    idade: 0,
  };
  
  // Define uma função para cadastrar um usuário
  function cadastramedicos() {
    // Solicita ao usuário as informações
    medicos.nome = prompt("Digite seu nome:");
    medicos.email = prompt("Digite seu e-mail:");
    medicos.senha = prompt("Digite sua senha:");
    medicos.idade = parseInt(prompt("Digite sua idade:"));
  
    // Mostra as informações do usuário cadastrado
    console.log("Usuário cadastrado com sucesso:");
    console.log("Nome: " + medicos.nome);
    console.log("E-mail: " + medicos.email);
    console.log("Idade: " + medicos.idade);
  }
  
  // Chama a função para cadastrar o usuário
  cadastramedicos();