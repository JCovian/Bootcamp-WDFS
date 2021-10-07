Algoritmo ejercicio_40
	Definir array1,array2,tam,i Como Entero;
	Definir comp1,comp2 Como Logico;
	
	comp1 = Verdadero;
	comp2 = Verdadero;
	tam = 5;
	Dimension array1[tam],array2[tam];
	array1[0] = 12;
	array1[1] = 1;
	array1[2] = 152;
	array1[3] = 87;
	array1[4] = 9;
	array2[0] = 12;
	array2[1] = 1;
	array2[2] = 15;
	array2[3] = 87;
	array2[4] = 9;
	
	Para i = 0 Hasta tam-1 Con Paso 1 Hacer
		Si array1[i] == array2[i] Entonces
			comp1 = Verdadero;
		SiNo
			comp2 = Falso;
		Fin Si
	Fin Para
	
	Escribir "Los arrays son " Sin Saltar;
	Si comp1 Y comp2 Entonces
		Escribir "iguales.";
	SiNo
		Escribir "diferentes.";
	Fin Si
	
	
FinAlgoritmo
