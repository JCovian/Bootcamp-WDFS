Algoritmo ejercicio_38
	Definir num,tam,letra Como Entero;
	Definir letras Como Caracter;
	
	tam = 23;
	Dimension letras[tam];
	
	letras[0] = "T";
	letras[1] = "R";
	letras[2] = "W";
	letras[3] = "A";
	letras[4] = "G";
	letras[5] = "M";
	letras[6] = "Y";
	letras[7] = "F";
	letras[8] = "P";
	letras[9] = "D";
	letras[10] = "X";
	letras[11] = "B";
	letras[12] = "N";
	letras[13] = "J";
	letras[14] = "Z";
	letras[15] = "S";
	letras[16] = "Q";
	letras[17] = "V";
	letras[18] = "H";
	letras[19] = "L";
	letras[20] = "C";
	letras[21] = "K";
	letras[22] = "E";
	
	Escribir "Introduzca el número de DNI: " Sin Saltar;
	Leer num;
	Escribir "";
	letra = num mod 23;
	Escribir "Su DNI es ",num,letras[letra];
	
FinAlgoritmo
