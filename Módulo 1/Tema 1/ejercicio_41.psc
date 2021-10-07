Algoritmo ejercicio_41
	Definir array,i,j,n,alea,lim_i,lim_s Como Entero;
	Definir existe Como Logico;
	
	existe = Falso;
	n = 20;
	lim_i = 1;
	lim_s = 20;
	Dimension array[n];
	
	array[0] = Aleatorio(lim_i,lim_s);
	
	Para i = 1 Hasta n - 1 Con Paso 1 Hacer
		alea = Aleatorio(lim_i,lim_s);
		Para j = 0 Hasta i - 1 Con Paso 1 Hacer
			Si array[j] == alea Entonces
				existe = Verdadero;
			FinSi
		Fin Para
		Si existe = Falso Entonces
			array[i] = alea;
		SiNo
			existe = Falso;
			i = i - 1;
		FinSi
		
	Fin Para
	
	Para i = 0 Hasta n - 1 Con Paso 1 Hacer
		Escribir array[i]," " Sin Saltar;
	Fin Para
	
	Escribir "";
	
FinAlgoritmo