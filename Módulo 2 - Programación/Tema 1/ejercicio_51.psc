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

Algoritmo ejercicio_51
	Definir num Como Entero;
	
	Escribir "Introduce un n�mero";
	Leer num;
	
	Si primo(num) == Verdadero Entonces
		Escribir "El n�mero ",num," es primo";
	SiNo
		Escribir "El n�mero ",num," no es primo";
	FinSi
	
FinAlgoritmo
