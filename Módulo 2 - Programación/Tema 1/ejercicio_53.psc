Funcion promedio = calc_prom (array,long)
	Definir i,suma Como Entero;
	Definir promedio Como Real;
	
	promedio = 0;
	suma = 0;
	
	Para i = 0 Hasta long-1 Con Paso 1 Hacer
		suma = suma + array[i];
	Fin Para
	promedio = suma / long;
FinFuncion

Algoritmo ejercicio_52
	Definir i,n,promedio,array Como Entero;
	
	Escribir "Cuantos datos quieres introducir";
	Leer n;
	Dimension array[n];
	Escribir "Introduce los números";
	
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		Leer array[i];
	Fin Para
	
	Escribir "El promedio de los números introducidos es ",calc_prom(array,n);
	
FinAlgoritmo
