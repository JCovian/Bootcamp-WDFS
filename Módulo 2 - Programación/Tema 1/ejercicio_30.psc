Algoritmo ejercicio_30
	Definir filas,num Como Entero
	Definir text Como Caracter
	
	Escribir "Introduce el número de filas"
	Leer filas
	
	Para i = 1 Hasta filas Con Paso 1 Hacer
		Para x = 1 Hasta i Con Paso 1 Hacer
			text = ConvertirATexto(x)
			Escribir text Sin Saltar
		Fin Para
		Escribir ""
	Fin Para
	
	Escribir ""
	
	Para i = 1 Hasta filas Con Paso 1 Hacer
		Para x = 1 Hasta i Con Paso 1 Hacer
			text = ConvertirATexto(i)
			Escribir text Sin Saltar
		Fin Para
		Escribir ""
	Fin Para	
	
	Escribir ""
	num = 1
	
	Para i = 1 Hasta filas Con Paso 1 Hacer
		Para x = 1 Hasta i Con Paso 1 Hacer
			text = ConvertirATexto(num) + " "
			Escribir text Sin Saltar
			num =  num + 1
		Fin Para
		Escribir ""
	Fin Para	
	
FinAlgoritmo
