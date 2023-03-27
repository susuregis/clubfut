












function calcularImc(peso, altura){
  return peso / (altura * altura)
}

function dieta(imc) {
  if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`);
    console.log("Sugestão de dieta: aumentar a ingestão de calorias e nutrientes para ganhar peso.");
    console.log("Plano alimentar:");
    console.log("Café da manhã: ovos mexidos com orégano torrada integral e suco de abacaxi");
    console.log("Lanche da manhã:Mousse de abacate com cacau");
    console.log("Almoço :espaguete à bolonhesa");4
    console.log("Lanche da tarde: iogurte Integral granola");
    console.log("Jantar: empadão de frango e salada verde");
  } else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`);
    console.log("Sugestão de dieta: manter uma alimentação equilibrada e saudável para manter o peso.");
    console.log("plano alimentar:");
    console.log("Café da manhã:1 xícara de leite desnatado ou de bebida vegetal + 1 panqueca de aveia com pasta de amendoim + 1 fruta");
    console.log("Lanche da manha:1 torrada integral com queijo + 1 fruta");
    console.log("Almoço/ Jantar:150 gramas de carne + 4 colheres de arroz integral + 2 colheres de sopa de feijão + salada de alface, tomate e beterraba + 1 colher de sopa de óleo de coco ou Macarrão integral com atum e molho de tomate natural + salada de repolho refogado, cenoura ralada e milho + 1 colher de chá de linhaça + 1 colher de sopa de azeite de oliva + 1 fruta");
    console.log("Lanche da tarde :1 iogurte natural desnatado + sanduíche de frango com requeijão light");
  } else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está acima do peso.`);
    console.log("Sugestão de dieta: reduzir a ingestão de calorias e aumentar a prática de atividades físicas para perder peso.");
    console.log("plano alimentar:");
    console.log("Além da dieta é necessarioBeber bastante água,Mastigar bem e devagar os alimentos,Dormir de 7 a 9 horas por noite." )
    console.log("Café da manhã:200 ml de leite desnatado + omelete feita com 1 ovo e tomate picado");
    console.log("Lanche da manhã:1 pera")
    console.log("Almoço: 1 posta de peixe ensopado + 1 prato de salada com 2 col de sopa de grão de bico, tomate, pepino, cebola e alface, temperada com 1 col sobremesa de azeite + 2 fatias de abacaxi");
    console.log("Lanche da tarde:1 iogurte desnatado s/ açúcar + 1 col de sopa de sementes de abóbora");
    console.log("Jantar:1 omelete com 2 ovos, 1 fio de azeite, tomate, orégano e espinafre +   + 6 morangos");
    console.log("Para emagrecer de forma saudável, é importante priorizar os alimentos com pouca gordura e calorias.");
  } else {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está obeso.`);
    console.log("Sugestão de dieta: procurar um nutricionista para orientação personalizada e acompanhamento na perda de peso.");
  }
  
  
  
}

function main(){
  nome = 'suelen'
  peso = 70
  altura = 1.79
  console.log(dieta(imc))
  
}


main()