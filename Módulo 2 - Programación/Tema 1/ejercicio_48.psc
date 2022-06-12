Algoritmo ejercicio_48
	Definir i,j,n,cont Como Entero;
	Definir array,aux,nom Como Caracter;
	n = 1000;
	Dimension array[n];
	cont = 0;
	
	//Pedir los nombres
	Escribir "Escribe nombres, para terminar déjalo en blanco";
	Leer nom;
	Mientras nom <> "" Hacer
		array[cont] = nom;
		cont = cont + 1;
		Leer nom;
	Fin Mientras
	
	//Imprimir el array
	Para i = 0 Hasta cont-1 Con Paso 1 Hacer
		Escribir array[i]," " Sin Saltar;
	Fin Para
	Escribir "";
	
	//Ordenar el array
	Para i = 0 Hasta cont-2 Con Paso 1 Hacer
		Para j = 0 Hasta cont-2 Con Paso 1 Hacer
			Si array[j] > array[j+1] Entonces
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
			Fin Si
		Fin Para
	Fin Para
	
	//Imprimir el array ordenado
	Para i = 0 Hasta cont-1 Con Paso 1 Hacer
		Escribir array[i]," " Sin Saltar;
	Fin Para
	Escribir "";
	
FinAlgoritmo
