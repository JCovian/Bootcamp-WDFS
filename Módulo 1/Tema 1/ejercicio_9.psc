Algoritmo ejercicio_9
	Escribir "Introduzca las calificaciones del alumno"
	Leer cal1,cal2,cal3,cal4,cal5
	promedio = (cal1+cal2+cal3+cal4+cal5)/5
	Si promedio >= 5 Entonces
		Escribir "Su promedio es de ",promedio, ", está aprobado"
	SiNo
		Escribir "Su promedio es de ",promedio,", está suspenso"
	Fin Si
FinAlgoritmo
