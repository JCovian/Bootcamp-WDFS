Algoritmo ejercicio_31
	Definir altura,columnas,filas,i Como Entero;
	
	Escribir "Introduce la altura";
	Leer altura;
	
	Para filas = 1 Hasta altura Con Paso 1 Hacer
		Para columnas = altura Hasta filas Con Paso -1 Hacer
			Escribir "*" Sin Saltar;
		Fin Para
		Escribir "";
		Para i = 1 Hasta filas Con Paso 1 Hacer
			Escribir " " Sin Saltar;
		Fin Para
	Fin Para
	
FinAlgoritmo
