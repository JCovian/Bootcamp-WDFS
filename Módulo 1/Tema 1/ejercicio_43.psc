Algoritmo ejercicio_28
	Definir ss,mm,hh,i Como Entero;
	
	ss = 0;
	mm = 0;
	hh = 0;
	
	Para i = 0 Hasta 100000 Con Paso 1 Hacer
		Si ss < 59 Entonces
			ss = ss + 1;
		SiNo
			ss = 0;
			mm = mm + 1;
			Si mm > 59 Entonces
				mm = 0;
				hh = hh + 1;
				Si hh > 23
					hh = 0;
				FinSi
			Fin Si
		Fin Si
		Escribir hh,":",mm,":",ss;
		Esperar 1 Segundos;
		Limpiar Pantalla;
	Fin Para
	
FinAlgoritmo
