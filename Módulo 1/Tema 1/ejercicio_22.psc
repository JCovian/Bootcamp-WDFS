Algoritmo ejercicio_22
	//Algoritmo que cuenta los números que son
	//multiplos de 2 y de 3 entre el 1 y el 100
	Definir num1,num2,mult1,mult2,contador,max Como Entero
	contador = 1
	num1 = 2
	num2 = 3
	max = 100
	Mientras contador <= max Hacer
		Si contador mod num1 == 0 Entonces
			mult1 = mult1 +1
			Escribir contador," es multiplo de 2, recuento ",mult1
		Fin Si
		Si contador mod num2 == 0 Entonces
			mult2 = mult2 +1
			Escribir contador," es multiplo de 3, recuento ",mult2
		Fin Si
		contador = contador + 1
	Fin Mientras
	Escribir "Hay ",mult1," multiplos de ",num1
	Escribir "Hay ",mult2," multiplos de ",num2
FinAlgoritmo
