Algoritmo ejercicio_20
	cont = 1
	Escribir "Escribe la contraseņa"
	Leer palabra
	Mientras cont < 3 Y palabra <> "EUREKA" Hacer
		Escribir "Contraseņa incorrecta, vuelve a intentarlo"
		Leer palabra
		cont = cont + 1
	Fin Mientras
	Si cont > 2 Entonces
		Escribir "Has fallado 3 veces la contraseņa"
	SiNo
		Escribir "Contraseņa correcta"
	Fin Si
FinAlgoritmo
