Algoritmo ejercicio_21
	Definir num Como Entero
	Definir media Como Entero
	Definir cont Como Entero
	Definir max Como Entero
	Definir min Como Entero
	media = 0
	cont = 0
	Escribir "Cálculo de media aritmética, valor máximo y mínimo"
	Repetir
		Escribir "Introduzca un número entero, teclee 0 para salir"
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
		Escribir "La media aritmética es ", resultado , ", el valor máximo " , max , " y el mínimo " , min
	SiNo
		Escribir "No ha introducido ningún número entero"
	Fin Si
FinAlgoritmo
