Algoritmo ejercicio_14
	Definir pgasolina Como Real
	Definir lgalon Como Real
	Definir gal Como Real
	Definir lit Como Real
	pgasolina = 1.333
	lgalon = 3.78541
	gal = 0.01
	lit = 0.00
	total = 0.00
	Mientras gal > 0 Hacer
		Escribir "Para finalizar introduzca 0"
		Escribir "Introduzca los galones surtidos"
		Leer gal
		lit = gal * lgalon
		total = lit * pgasolina
		Escribir "Ha surtido ",gal," galones (",lit," litros) y tiene que abonar ",total," euros"
	Fin Mientras
FinAlgoritmo

