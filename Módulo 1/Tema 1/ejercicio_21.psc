Algoritmo ejercicio_21
	Definir num Como Entero
	Definir media Como Entero
	Definir cont Como Entero
	Definir max Como Entero
	Definir min Como Entero
	media = 0
	cont = 0
	Escribir "C�lculo de media aritm�tica, valor m�ximo y m�nimo"
	Repetir
		Escribir "Introduzca un n�mero entero, teclee 0 para salir"
		Leer num
		Si cont = 0
			max = num
			min = num
		FinSi
		Si num <> 0 Entonces
			media = media + num
			Si num > max Entonces
				max = num
			Fin Si
			Si num < 1
				min = num
			FinSi
			cont = cont + 1
		Fin Si
	Hasta Que num = 0
	Si cont <> 0 Entonces
		resultado = media / cont
		Escribir "La media aritm�tica es ", resultado , ", el valor m�ximo " , max , " y el m�nimo " , min
	SiNo
		Escribir "No ha introducido ning�n n�mero entero"
	Fin Si
FinAlgoritmo
