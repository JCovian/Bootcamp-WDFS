Algoritmo ejercicio_29
	Definir num,fact Como Entero
	
	Escribir "Introduce el número a factorizar"
	Leer num
	fact = num
	
	Para i = 1 Hasta num-1 Con Paso 1 Hacer
		fact = fact * i
	Fin Para
	
	Escribir "El factorial de ",num," es ",fact
	
FinAlgoritmo
