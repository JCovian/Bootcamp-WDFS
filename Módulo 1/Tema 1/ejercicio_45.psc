Algoritmo ejercicio_45
	Definir array1,array2,d,i,cont Como Entero;
	
	d = 5;
	cont = 0;
	Dimension array1[d],array2[d];
	array1[0] = 32;
	array1[1] = 6;
	array1[2] = 25;
	array1[3] = 56;
	array1[4] = 31;
	
	//Generar nuevo array con pares mayores de 25
	Para i = 0 Hasta d-1 Con Paso 1 Hacer
		Si array1[i] > 25 Y array1[i] mod 2 = 0 Entonces
			array2[cont] = array1[i];
			cont = cont +1;
		Fin Si
	Fin Para
	
	Escribir "Los valores pares mayores de 25 son:";
	//Visualizar array2
	Para i = 0 Hasta cont - 1 Con Paso 1 Hacer
		Escribir array2[i]," "; SinSaltar;
	Fin Para
	
FinAlgoritmo
