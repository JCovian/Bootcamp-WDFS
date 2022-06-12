Funcion crea_array(array,n)
	Definir i Como Entero;
	
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		array[i] = Aleatorio(1,15);
	Fin Para
	
FinFuncion

Funcion busca_numero(array,n,num)
	Definir i,indice Como Entero;
	Definir primero Como Logico;
	
	primero = falso;
	
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		Si array[i] == num Y primero == Falso Entonces
			primero = Verdadero;
			indice = i;
		FinSi
	Fin Para
	Si primero = Verdadero Entonces
		Escribir "El número ",num," existe en el array y el primer índice en el que aparece es el ",indice;
	SiNo
		Escribir "El número ",num," no existe en el array";
	FinSi
	
FinFuncion

Funcion visualiza_array(array,n)
	Definir i Como Entero;
	
	Escribir "";
	Escribir "El array está compuesto por los siguientes elementos:";
	
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		Escribir array[i]," " Sin Saltar;
	Fin Para
	
	Escribir "";
FinFuncion

Algoritmo ejercicio_52
	Definir n,array,num Como Entero;
	
	n = 10;
	Dimension array[n];
	
	crea_array(array,n);
	Escribir "Introduce un número entre 1 y 15";
	Leer num;
	visualiza_array(array,n);
	busca_numero(array,n,num);
	
FinAlgoritmo
