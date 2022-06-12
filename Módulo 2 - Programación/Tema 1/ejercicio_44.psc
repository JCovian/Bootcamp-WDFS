Algoritmo Ejercicio_2
	
	Definir opc,op1,op2,resultado Como Entero;
	opc = 0;
	
	Mientras opc <> 5 Hacer
		Limpiar Pantalla;
		Escribir "**************************************";
		Escribir "1. Suma";
		Escribir "2. Resta";
		Escribir "3. Multiplicación;";
		Escribir "4. División";
		Escribir "5. Salir";
		Escribir "**************************************";
		Leer opc;
		Segun opc Hacer
			1:
				Escribir "Introduzca número 1:";
				Leer op1;
				Escribir "Introduzca número 2:";
				Leer op2;
				resultado = op1 + op2;
			2:
				Escribir "Introduzca número 1:";
				Leer op1;
				Escribir "Introduzca número 2:";
				Leer op2;
				resultado = op1 - op2;
			3:
				Escribir "Introduzca número 1:";
				Leer op1;
				Escribir "Introduzca número 2:";
				Leer op2;
				resultado = op1 * op2;
			4:
				Escribir "Introduzca número 1:";
				Leer op1;
				Escribir "Introduzca número 2:";
				Leer op2;
				resultado = op1 / op2;
			5:
				Limpiar Pantalla;
				Escribir "Hasta pronto";
			De Otro Modo:
				Limpiar Pantalla;
				Escribir "Introduzca una opción válida";
				Esperar 3 Segundos;
		Fin Segun
		Si opc > 0 Y opc <5 Entonces
			Escribir "El resultado es: ",resultado;
			Escribir "";
			Escribir "Pulse una tecla para continuar";
			Esperar Tecla;
		Fin Si
	Fin Mientras
	
FinAlgoritmo
