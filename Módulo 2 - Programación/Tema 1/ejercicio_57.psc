Algoritmo ejercicio_57
	Definir matriz,curso,alum,i,j Como Entero;
	
	curso = 3;
	alum = 5;
	Dimension matriz[curso,alum];
	
	Para i = 0 Hasta curso - 1 Con Paso 1 Hacer
		Para j = 0 Hasta alum - 1 Con Paso 1 Hacer
			Escribir "Introduce nota del alumno ",j + 1," del curso ",i + 1,": " Sin Saltar;
			Leer matriz[i,j];
			Escribir "";
		Fin Para
		Escribir "======================================================";
	Fin Para
	
	Escribir "Listado de notas:";
	
	Para i = 0 Hasta curso - 1 Con Paso 1 Hacer
		Para j = 0 Hasta alum - 1 Con Paso 1 Hacer
			Escribir "Curso ",i + 1,", alumno ",j + 1,", nota: ",matriz[i,j];
		Fin Para
		Escribir "======================================================";
	Fin Para
	
FinAlgoritmo
