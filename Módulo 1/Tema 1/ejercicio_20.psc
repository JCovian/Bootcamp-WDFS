Algoritmo ejercicio_20
	cont = 1
	Escribir "Escribe la contrase�a"
	Leer palabra
	Mientras cont < 3 Y palabra <> "EUREKA" Hacer
		Escribir "Contrase�a incorrecta, vuelve a intentarlo"
		Leer palabra
		cont = cont + 1
	Fin Mientras
	Si cont > 2 Entonces
		Escribir "Has fallado 3 veces la contrase�a"
	SiNo
		Escribir "Contrase�a correcta"
	Fin Si
FinAlgoritmo
