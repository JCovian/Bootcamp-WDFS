Algoritmo ejercicio_36
	Definir num,array,suma,i,pos Como Entero;
	
	pos = 0;
	num = 0;
	suma = 0;
	i = 0;
	
	Escribir "Introduzca el n�mero de elementos a a�adir en el Array";
	Leer num;
	Dimension array[num];
	
	Repetir
		array[i] = Aleatorio(0,9);
		suma = suma + array[i];
		i = i + 1;
	Mientras Que i < num
	
	Para i = 0 Hasta num - 1 Con Paso 1 Hacer
		pos = pos + 1;
		Escribir "En la posici�n ",pos," indice ",i," el valor es ",array[i];
	Fin Para
	
	Escribir "La suma de todos los valores es: ",suma;

FinAlgoritmo
