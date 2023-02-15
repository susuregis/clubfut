var votação = 12
if (votação == 16 || votação == 17) {
    console.log("SEU VOTO É FACULTATIVO");

} else if (votação<16) {
    console.log("NÃO PODE VOTAR"); 


} else if (votação>65) {
    console.log("O VOTO É FACULTATIVO");

} else if (votação>=18 && votação==65) {
    console.log("O VOTO É OBRIGATORIO")

}else {
    console.log("NENHUMA RESPOSTA ENCONTRADA");
}





