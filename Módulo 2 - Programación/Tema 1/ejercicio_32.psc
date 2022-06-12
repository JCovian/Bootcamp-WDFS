Algoritmo ejercicio_32
	Definir yyyy Como Entero
	Definir bisiesto,nobisiesto Como Caracter
	
	bisiesto = "Es un a�o bisiesto"
	nobisiesto = "Es un a�o no bisiesto"
	
	Escribir "Introduzca el a�o"
	Leer yyyy
	
	Si yyyy mod 4 == 0 Entonces
		Si yyyy mod 100 == 0 Entonces
			Si yyyy mod 400 == 0 Entonces
				Escribir bisiesto
			SiNo
				Escribir nobisiesto
			Fin Si
		SiNo
			Escribir bisiesto
		Fin Si
	SiNo
		Escribir nobisiesto
	Fin Si
	
	Escribir ""
	
	//Codigo optimizado
	Si (yyyy mod 4 == 0) Y (yyyy mod 100 <> 0) O (yyyy mod 400 == 0)
		Escribir bisiesto
	SiNo
		Escribir nobisiesto
	FinSi
FinAlgoritmo
