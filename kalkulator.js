var panggilnamainput = require("readline-sync");

var bilangan1 = panggilnamainput.questionInt('masukan nilai 1.tambah , 2.kurang , 3.bagi , 4.kali = ');

if  (bilangan1 == 1){
    var masukanBilangan1 = panggilnamainput.questionInt('masukan bilangan1=');
    var masukanBilangan2 = panggilnamainput.questionInt('masukan bilangan2=');
    console.log(Number(masukanBilangan1)+(Number(masukanBilangan2)))
}else {
    if  (bilangan1 == 2){
        var masukanBilangan1 = panggilnamainput.questionInt('masukan bilangan1=');
        var masukanBilangan2 = panggilnamainput.questionInt('masukan bilangan2=');
        console.log(Number(masukanBilangan1)-(Number(masukanBilangan2)))
}
}
    if  (bilangan1 == 3){
    var masukanBilangan1 = panggilnamainput.questionInt('masukan bilangan1=');
    var masukanBilangan2 = panggilnamainput.questionInt('masukan bilangan2=');
    console.log(Number(masukanBilangan1))/(Number(masukanBilangan2));
  }else{
    if  (bilangan1 == 4){
        var masukanBilangan1 = panggilnamainput.questionInt('masukan bilangan1=');
        var masukanBilangan2 = panggilnamainput.questionInt('masukan bilangan2=');
        console.log(Number(masukanBilangan1))*(Number(masukanBilangan2));
}
}
