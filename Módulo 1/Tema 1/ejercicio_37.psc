Algoritmo ejercicio_37
	Definir array1,array2,tam,i,mult Como Entero;
	
	tam = 10;
	Dimension array1[tam];
	Dimension array2[tam];
	
	Para i = 0 Hasta tam-1 Con Paso 1 Hacer
		array1[i] = Aleatorio(0,20);
		array2[i] = Aleatorio(0,20);
		mult = array1[i] * array2[i];
		Escribir "La multipicación del valor de índice ",i," del array1 (",array1[i],") y del array2 (",array2[i],") es ",mult;
	Fin Para
	
FinAlgoritmo