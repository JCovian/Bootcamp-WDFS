Algoritmo ejercicio_19
	Definir num Como Entero
	Definir media Como Entero
	Definir cont Como Entero
	media = 0
	cont = 0
	Escribir "Cálculo de media aritmética"
	Repetir
		Escribir "Introduzca un número entero positivo, teclee -1 para salir"
		Leer num
		Si num > 0 Entonces
			media = media + num
			cont = cont + 1
		Fin Si
	Hasta Que num = -1
	Si media > 0 Entonces
		resultado = media / cont
		Escribir "La media aritmética es ", resultado
	SiNo
		Escribir "No ha introducido ningún número entero positivo"
	Fin Si
	
FinAlgoritmo
