
var clubedeFut = 11;
 
 
switch(true) {
    case clubedeFut >= 5  && clubedeFut<=10:
        console.log ("CATEGORIA INFANTIL");
        break
    case clubedeFut>=11 && clubedeFut<=15:
        console.log("CATEGORIA JUVENTIL");
        break;
    case clubedeFut>=16 && clubedeFut<=20:
        console.log("CATEGORIA JUNIOR");
        break;
    case clubedeFut>=21 && clubedeFut<=25:
        console.log("CATEGORIA PROFISSIONAL");
        break;
    default:
        console.log("CATEGORIA INEXISTENTE");

}
