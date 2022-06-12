Algoritmo ejercicio_59
	Definir matriz,i,j,k,centro,curso,alumno,max_c Como Entero;
	Definir media,max Como Real;
	
	centro = 5;
	curso = 4;
	alumno = 10;
	Dimension matriz[centro,curso,alumno];
	max = 0;
	media = 0;
	
	Para i = 0 Hasta centro - 1 Con Paso 1 Hacer
		Escribir "Centro ",i + 1;
		Para j = 0 Hasta curso - 1 Con Paso 1 Hacer
			Escribir "Curso ",j + 1;
			Para k = 0 Hasta alumno - 1 Con Paso 1 Hacer
				Escribir "Introduce nota del alumno ",k + 1,": " Sin Saltar;
				Leer matriz[i,j,k];
				media = media + matriz[i,j,k];
			Fin Para
			media = media / alumno;
			Escribir "La nota media del curso ",j + 1," es ",media;
			si media > max Entonces
				max = media;
				max_c = i;
			FinSi
			media = 0;
		Fin Para
	Fin Para
	
	Escribir "";
	Escribir "La media máxima es ",max," y pertenece al centro ",max_c;
	

FinAlgoritmo
