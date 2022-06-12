Algoritmo ejercicio_47
	Definir array,i,j,n,aux Como Entero;
	
	n = 5;
	Dimension array[n];
	
	//Llenar el array con números aleatorios de 1 a 100
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		array[i] = Aleatorio(1,100);
	Fin Para
	
	//Imprimir el array
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		Escribir array[i]," " Sin Saltar;
	Fin Para
	Escribir "";
	
	//Ordenar el array
	Para i = 0 Hasta n-2 Con Paso 1 Hacer
		Para j = 0 Hasta n-2 Con Paso 1 Hacer
			Si array[j] > array[j+1] Entonces
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
			Fin Si
		Fin Para
	Fin Para
	
	//Imprimir el array ordenado
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		Escribir array[i]," " Sin Saltar;
	Fin Para
	Escribir "";
	
FinAlgoritmo
