Algoritmo ejercicio_39
	Definir array1,array2,tam,i,cont Como Entero;
	
	tam = 5;
	cont = 0;
	Dimension array1[tam],array2[tam];
	
	//Llena el array1 con numeros del 1 a 5
	Para i = 0 Hasta tam-1 Con Paso 1 Hacer
		array1[i] = i + 1;
	Fin Para
	
	// Rellena el array2 con los datos del array1 en orden inverso
	Para i = tam-1 Hasta 0 Con Paso -1 Hacer
		array2[cont] = array1[i]; 
		cont = cont + 1;
	Fin Para
	
	// Visualiza los datos del array1
	Escribir "Los valores del array1 son: " Sin Saltar;
	Para i = 0 Hasta tam-1 Con Paso 1 Hacer
		Escribir array1[i]," " Sin Saltar;
	Fin Para
	
	// Visualiza los datos del array2
	Escribir "";
	Escribir "Los valores del array2 son: " Sin Saltar;
	Para i = 0 Hasta tam-1 Con Paso 1 Hacer
		Escribir array2[i]," " Sin Saltar;
	Fin Para
	Escribir " ";
	
FinAlgoritmo
