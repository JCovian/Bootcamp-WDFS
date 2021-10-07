Algoritmo ejercicio_10
	Escribir "Seleccione la categoría del trabajador (1, 2, 3 ó 4)"
	Leer cat
	Escribir "Introduzca el sueldo"
	Leer sueldo
	Segun cat Hacer
		1:
			sueldo = sueldo * 1.15
		2:
			sueldo = sueldo * 1.10
		3:
			sueldo = sueldo * 1.06
		4:
			sueldo = sueldo * 1.03
		De Otro Modo:
			Escribir "Ha introducido una categoría no valida"
	Fin Segun
	Escribir "El salario incrementado es de ",sueldo," euros"
FinAlgoritmo
