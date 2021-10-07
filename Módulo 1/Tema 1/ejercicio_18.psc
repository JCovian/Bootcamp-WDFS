Algoritmo ejercicio_18
	Definir n Como Entero
	Definir suma Como Entero
	Definir cont Como Entero
	Definir num Como Entero
	Escribir "Introduce un número natural "
	Leer n
	suma = 0
	num = n
	cont = 1
	Si num mod 2 <> 0 Entonces
		num = num + 1
	Fin Si
	Mientras cont <= n Hacer
		Si num mod 2 == 0 entonces
			suma = suma + num
			cont = cont + 1 
		Fin Si
		num = num + 1
	Fin Mientras
	Escribir "La suma de los " , n , " primeros números pares naturales a partir de ", n , " es ", suma
FinAlgoritmo
