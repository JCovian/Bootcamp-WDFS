Funcion prim = primo(num)
	Definir i Como Entero;
	Definir prim Como Logico;
	prim = Verdadero;
	
	Para i = 2 Hasta num-1 Con Paso 1 Hacer
		Si num mod i == 0 Entonces
			prim = Falso;
		FinSi
	Fin Para
FinFuncion

Algoritmo ejercicio_54
	Definir num,i,cont Como Entero;
	cont = 0;
	
	Escribir "Introduce un número";
	Leer num;
	
	Escribir "Estos números anteriores a ",num, " son primos:";
	Para i = 1 Hasta num-1 Con Paso 1 Hacer
		Si primo(i) == Verdadero Entonces
			cont = cont + 1;
			Escribir i," " Sin Saltar;
		FinSi
	Fin Para
	
	Escribir "";
	Escribir "En total hay ",cont," números primos";
	
FinAlgoritmo
