Algoritmo ejercicio_11
	Escribir "Introduzca el valor total de la compra"
	Leer subtotal
	total = 0
	Si subtotal > 15000 Entonces
		total = subtotal - (subtotal * 0.25)
	SiNo
		Si subtotal > 7000 Entonces
			total = subtotal - (subtotal * 0.20)
		SiNo
			Si subtotal > 1000 Entonces
				total = subtotal - (subtotal * 0.10)
			SiNo
				Si subtotal > 500 Entonces
					total = subtotal - (subtotal * 0.05)
				SiNo
					total = subtotal
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	Escribir "Su precio total es de ",total," euros"
FinAlgoritmo
