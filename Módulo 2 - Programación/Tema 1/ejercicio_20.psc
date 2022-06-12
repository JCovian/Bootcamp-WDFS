Algoritmo ejercicio_20
	cont = 1
	Escribir "Escribe la contraseña"
	Leer palabra
	Mientras cont < 3 Y palabra <> "EUREKA" Hacer
		Escribir "Contraseña incorrecta, vuelve a intentarlo"
		Leer palabra
		cont = cont + 1
	Fin Mientras
	Si cont > 2 Entonces
		Escribir "Has fallado 3 veces la contraseña"
	SiNo
		Escribir "Contraseña correcta"
	Fin Si
FinAlgoritmo
