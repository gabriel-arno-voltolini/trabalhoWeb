/* Dando uma olhada no documento dele eu interpretei que aparentemente todo o JS deveria estar em um arquivo só */
/* Posso estar errado então é bom dar uma olhada e interpretar (/≧▽≦)/ - L */

function setaCookie() {
    //TODO - não cria o cookie pelo menos pra mim (￣m￣） copiado do professor - L
    var date = new Date();
    date.setTime(date.getTime()+10000);
    //document.cookie = "username="+document.getElementById('userName').value+"; expires="+date.toGMTString()+";";
    document.cookie = "teste";
    console.log(document.cookie + "algo");
}