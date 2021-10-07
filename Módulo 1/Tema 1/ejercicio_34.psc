Algoritmo ejercicio_34
	Definir numros,tam,i Como Entero;
	
	tam = 10;
	Dimension numros[tam];
	
	Escribir "Introduzca 10 números enteros: ";
	
	Para i = 0 Hasta tam - 1  Con Paso 1 Hacer
		Leer numros[i];
	Fin Para
	
	Para i = 0 Hasta tam - 1  Con Paso 1 Hacer
		Escribir "Indice ",i," valor ", numros[i];
	Fin Para
	
FinAlgoritmo
