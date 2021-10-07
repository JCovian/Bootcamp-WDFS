Algoritmo ejercicio_25_b
	Definir ancho,alto,long_blancos Como Entero
	Definir linea_1,linea_2,blanco Como Caracter
	linea_1 = ""
	linea_2 = ""
	blanco = ""
	
	Escribir "Ancho y alto del cuadrado"
	Leer ancho,alto
	
	Para i = 1 Hasta ancho Con Paso 1 Hacer
		linea_1= linea_1 + "*"
	Fin Para
	
	Escribir linea_1
	long_blancos = Longitud(linea_1) - 2 
	
	Para i = 1 Hasta long_blancos Con Paso 1 Hacer
		blanco = blanco + " "
	Fin Para
	
	Para i = 1 Hasta alto - 2 Con Paso 1 Hacer
		linea_2 = "*" + blanco + "*"
		Escribir linea_2	
	Fin Para
	
	Escribir linea_1
	
FinAlgoritmo