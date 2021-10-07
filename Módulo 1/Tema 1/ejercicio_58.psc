Algoritmo ejercicio_58
	Definir matriz,i,j,d Como Entero;
	Definir simetrica Como Logico;
	
	d = 3;
	Dimension matriz[d,d];
	simetrica = Verdadero;
	
	Para i = 0 Hasta d - 1 Con Paso 1 Hacer
		Para j = 0 Hasta d - 1 Con Paso 1 Hacer
			Escribir "Introduce valor para fila ",i,", columna ",j,": " Sin Saltar;
			Leer matriz[i,j];
			Escribir "";
		Fin Para
	Fin Para
	
	Escribir "";
	Escribir "========================================================";
	Escribir "";
	
	Para i = 0 Hasta d - 1 Con Paso 1 Hacer
		Para j = 0 Hasta d - 1 Con Paso 1 Hacer
			Escribir matriz[i,j],"  " Sin Saltar;
			Si matriz[i,j] <> matriz[j,i] Entonces
				simetrica = Falso;
			FinSi
		Fin Para
		Escribir "";
	Fin Para
	
	Escribir "";
	Escribir "========================================================";
	Escribir "";
	
	Si simetrica Entonces
		Escribir "La matriz es simétrica";
	SiNo
		Escribir "La matriz no es simétrica";
	Fin Si
FinAlgoritmo
