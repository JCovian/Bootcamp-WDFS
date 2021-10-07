Algoritmo ejercicio_24
	//Ejercicio 24
	Definir alum Como Caracter
	Definir npractica,nproblemas,nteoria Como Entero
	Definir media,ppractica,pproblemas,pteoria,notafinal Como Real
	Definir error Como Caracter
	alum = ""
	error = "Valor incorrecto"
	ppractica = 0.10
	pproblemas = 0.50
	pteoria = 0.40
	
	Repetir
		Escribir "Introduce nombre del alumno (dejar en blanco para salir)"
		Leer alumn
		Si Longitud(alumn) <> 0
			Escribir "Nota de práctica"
			Leer npractica
			si npractica >= 0 Y npractica <= 10 Entonces
				Escribir "Nota de problemas"
				Leer nproblemas
				Si nproblemas >= 0 Y nproblemas <= 10 Entonces
					Escribir "Nota de teoría"
					Leer nteoria
					Si nteoria >=0 y nteoria <= 10 Entonces
						notafinal = (npractica * practica) + (nproblemas * pproblemas) + (nteoria * pteoria)
						Escribir "Nota final: ",notafinal
					SiNo
						Escribir error
					FinSi
				SiNo
					Escribir error
				FinSi
			SiNo
				Escribir error
			FinSi
		FinSi
	Hasta Que alumn = ""
	
FinAlgoritmo
