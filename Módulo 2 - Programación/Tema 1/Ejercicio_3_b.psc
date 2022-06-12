Algoritmo Ejercicio_3_b
	Escribir 'Escriba un número'
	Leer a
	Escribir 'Escriba otro número'
	Leer b
	Escribir 'Escriba otro número'
	Leer c
	Si a>b Entonces
		Si a>c Entonces
			Escribir a,' es el mayor'
		SiNo
			Si c>b Entonces
				Escribir c,' es el mayor'
			FinSi
		FinSi
	SiNo
		Si a>c Entonces
			Escribir b,' es el mayor'
		SiNo
			Si c>b Entonces
				Escribir c,' es el mayor'
			SiNo
				Si b>c Entonces
					Escribir b,' es el mayor'
				SiNo
					Si a=b Entonces
						Escribir 'Todos son iguales'
					SiNo
						Escribir b,' es el mayor'
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
