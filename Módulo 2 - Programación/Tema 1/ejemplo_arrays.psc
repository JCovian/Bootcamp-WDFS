Algoritmo ejemplo_arrays
	Definir array, tamano, i Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	array[0] = 65;
	array[1] = 12;
	array[2] = 5;
	array[3] = 73619;
	array[4] = 512;
	
	Escribir "Mi array tiene los elementos ",array[0],", ",array[1],", ",array[2],", ",array[3]," y ",array[4],".";
	
	array[2] = 17;
	
	Escribir "Mi array tiene los elementos ",array[0],", ",array[1],", ",array[2],", ",array[3]," y ",array[4],".";
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir array[i];
	Fin Para
	
FinAlgoritmo
