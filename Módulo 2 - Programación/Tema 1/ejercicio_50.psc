Algoritmo ejercicio_50
	Definir frase,letra Como Caracter;
	Definir i,cont Como Entero;
	
	cont = 0;
	
	Escribir "Introduce una frase";
	Leer frase;
	Escribir "Qué letra quieres que cuente?";
	Leer letra;
	
	Para i = 0 Hasta Longitud(frase) - 1 Con Paso 1 Hacer
		si Minusculas(Subcadena(frase,i,i)) == Minusculas(letra) Entonces
			cont = cont + 1;
		FinSi
	Fin Para
	
	Escribir "La letra ",letra," aparece ",cont," veces.";
FinAlgoritmo