Algoritmo ejercicio_19
	Definir num Como Entero
	Definir media Como Entero
	Definir cont Como Entero
	media = 0
	cont = 0
	Escribir "C�lculo de media aritm�tica"
	Repetir
		Escribir "Introduzca un n�mero entero positivo, teclee -1 para salir"
		Leer num
		Si num > 0 Entonces
			media = media + num
			cont = cont + 1
		Fin Si
	Hasta Que num = -1
	Si media > 0 Entonces
		resultado = media / cont
		Escribir "La media aritm�tica es ", resultado
	SiNo
		Escribir "No ha introducido ning�n n�mero entero positivo"
	Fin Si
	
FinAlgoritmo
