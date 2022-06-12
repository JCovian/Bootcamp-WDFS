Algoritmo ejercicio_23
	//Ejercicio que pida tres números por teclado que corresponden
	//a la denotación dia/mes/año comprobar si el número es valido
	//sino lo es volver a solicitarlo
	Definir dd,mm,yyyy Como Entero
	Definir mes,error Como Caracter
	Definir ok Como Logico
	
	error ="ERROR, ha introducido un valor incorrecto"
	ok = Falso
	
	Mientras ok = Falso Hacer
		Escribir "Introduzca el año (debe ser mayor que 0 y menor que 10.000)"
		Leer yyyy
		si yyyy > 0 Y yyyy < 10000 Entonces
			ok = Verdadero
		SiNo
			Escribir error
		FinSi
	Fin Mientras
	ok = Falso
	Mientras ok = Falso Hacer
		Escribir "Introduzca el mes (en formato numérico 1-12)"
		Leer mm
		si mm > 0 Y mm < 13 Entonces
			ok = Verdadero		
		SiNo
			Escribir error
		FinSi
	Fin Mientras
	ok = Falso
	Mientras ok = Falso Hacer
		Escribir "Introduzca el día (debe estar comprendido entre 1 y 31)"
		Leer dd
		si dd > 0 Y dd < 31 Entonces
			si mm = 2 y dd < 29 Entonces
				ok = Verdadero	
			sino 
				Si mm = 4 o mm = 6 o mm = 9 o mm = 11 Y dd < 31 Entonces
					ok = Verdadero
				SiNo
					Si mm = 1 o mm = 3 o mm = 5 o mm = 7 o mm = 8 o mm = 10 o mm = 12 Entonces
						ok = Verdadero
					SiNo
						ok = Falso
						Escribir error
					FinSi
				FinSi
			FinSi
		SiNo
			Escribir error
		FinSi
	Fin Mientras
	Segun mm Hacer
		1:
			mes = "enero"
		2:
			mes = "febrero"
		3:
			mes = "marzo"
		4:
			mes = "abril"
		5:
			mes = "mayo"
		6:
			mes = "junio"
		7:
			mes = "julio"
		8:
			mes = "agosto"
		9:
			mes = "septiembre"
		10:
			mes = "octubre"
		11:
			mes = "noviembre"
		12:
			mes = "diciembre"
		De Otro Modo:
			Escribir "ERROR volcado de mes"
	Fin Segun
	Escribir "La fecha es ",dd," de ",mes," de ",yyyy
FinAlgoritmo
