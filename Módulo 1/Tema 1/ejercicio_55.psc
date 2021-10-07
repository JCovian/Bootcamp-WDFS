Algoritmo ejercicio_55
	Definir matriz,fila,col,i,j Como Entero;
	
	fila = 4;
	col = 5;
	Dimension matriz[fila,col];
	
	Para i = 0 Hasta fila - 1 Con Paso 1 Hacer
		para j = 0 Hasta col - 1 Con Paso 1 Hacer
			matriz[i,j] = Aleatorio(1,100);
		FinPara
	Fin Para
	
	Para i = 0 Hasta fila - 1 Con Paso 1 Hacer
		Para j = 0 Hasta col - 1 Con Paso 1 Hacer
			Escribir matriz[i,j],"    " Sin Saltar;
		Fin Para
		Escribir "";
	Fin Para
	
FinAlgoritmo
