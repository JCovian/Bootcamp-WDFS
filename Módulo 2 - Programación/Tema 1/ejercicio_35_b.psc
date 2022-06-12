Algoritmo ejercicio_35_b
	Definir alea,num Como Entero;
	
	alea = Aleatorio(1,100);
	num = 0;
	
	Repetir
		Escribir "Adivina que número estoy pensando entre 1 y 100";
		Leer num;
		Si num == alea Entonces
			Escribir "Has acertado";
			cond = Verdadero;
		SiNo
			Escribir "Has fallado, el número es " Sin Saltar;
			Si num > alea Entonces
				Escribir "menor";
			SiNo
				Escribir "mayor";
			Fin Si
		Fin Si
	Mientras Que num <> alea
	
FinAlgoritmo
