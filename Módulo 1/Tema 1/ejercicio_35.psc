Algoritmo ejercicio_35
	Definir alea,num Como Entero;
	Definir cond Como Logico;
	
	alea = Aleatorio(1,10);
	cond = Falso;
	num = 0;
	
	Mientras cond = Falso Hacer
		Escribir "Adivina que número estoy pensando entre 1 y 10";
		Leer num;
		Si num == alea Entonces
			Escribir "Has acertado";
			cond = Verdadero;
		SiNo
			Escribir "Has fallado";
		Fin Si
	Fin Mientras
	
FinAlgoritmo
