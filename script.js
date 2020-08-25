var choice;
while (choice > 6 || choice < 1 ||  isNaN(choice)) {
    choice = prompt("Elije una opcion del 1 al 6");
}
choice = parseInt(choice, 10);

switch(choice){
    case 1:
        alert("Juego de numeros");
        var num;

        while (num > 100 || num < 1 ||  isNaN(num)) {
            num = prompt("Ingresa un numero entre 1 y 100");
        }

        for (let i = 0; i <= num; i++) {
            console.log(i);
        }
        break;

    case 2:
        alert("La pregunta del día");
        var color = "";
        while (color.toLowerCase() != 'blanco') {
            color = prompt("¿De qué color es el caballo blanco de Napoleón?");
        }
        alert("Correcto!");
        break;

    case 3:
        alert("Vamos a calcular tu promedio");
        var matematicas;
        var fisica;
        var ciencias;
        var promedio;
        while (matematicas >= 7.0 || matematicas < 1.0 ||  isNaN(matematicas)) {
            matematicas = prompt("Ingresa tu nota de Matemáticas");
        }
        while (fisica >= 7.0 || fisica < 1.0 ||  isNaN(fisica)) {
            fisica = prompt("Ingresa tu nota de Física");
        }
        while (ciencias >= 7.0 || ciencias < 1.0 ||  isNaN(ciencias)) {
            ciencias = prompt("Ingresa tu nota de Ciencias");
        }
        matematicas = parseFloat(matematicas);
        fisica = parseFloat(fisica);
        ciencias = parseFloat(ciencias);

        promedio = (matematicas+fisica+ciencias)/3;
        promedio = Math.round(promedio);
        alert("Tu promedio es "+promedio);
        break;

    case 4:
        alert("Juego de las frutas");
        var fruta = new Array(3);
        while (fruta[0] == null || fruta[0]  == "" || !/^[a-zA-Z]+$/.test(fruta[0] )) {
            fruta[0] = prompt("Ingresa la primera fruta (solo letras, sin espacios)");
        }
        while (fruta[1] == null || fruta[1] == "" || !/^[a-zA-Z]+$/.test(fruta[1])) {
            fruta[1] = prompt("Ingresa la segunda fruta (solo letras, sin espacios)");
        }
        while (fruta[2] == null || fruta[2] == "" || !/^[a-zA-Z]+$/.test(fruta[2])) {
            fruta[2] = prompt("Ingresa la tercera fruta (solo letras, sin espacios)");
        }
        for (let i = 0; i < fruta.length; i++) {
            if (fruta[i].toLowerCase() != 'manzana'){
                console.log(fruta[i]);
            }
            
        }
        break;

    case 5:
        alert("Veamos las letras de tu nombre");
        var nombre;
        var vocales = 0;
        var consonantes = 0;

        while (nombre == null || nombre == "" || !/^[a-zA-Z]+$/.test(nombre)) {
            nombre = prompt("Ingresa tu nombre (solo letras, sin espacios)");
        }

        for (let i = 0; i < nombre.length; i++) {
            if(nombre[i].toLowerCase() == 'a' || nombre[i].toLowerCase() == 'e' || 
                nombre[i].toLowerCase() == 'i' || nombre[i].toLowerCase() == 'o' || nombre[i].toLowerCase() == 'u'){
                vocales++;
            }else{
                consonantes++;
            }
        }

        alert(nombre.toUpperCase()+`: Tu nombre tiene ${vocales} vocales y ${consonantes} consonantes`);
        break;

    case 6:
        alert(`No hay instrucción para el punto 6`);
        break;
    
    default:
        console.log("Algo no funciona");
        break;
}