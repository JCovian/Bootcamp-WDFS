Algoritmo ejercicio_59
	Definir matriz,i,j,k,pag,fil,col,cont Como Entero;
	
	pag = 3;
	fil = 4;
	col = 5;
	Dimension matriz[pag,fil,col];
	cont = 1;
	
	Para i = 0 Hasta pag - 1 Con Paso 1 Hacer
		Para j = 0 Hasta fil - 1 Con Paso 1 Hacer
			Para k = 0 Hasta col - 1 Con Paso 1 Hacer
				matriz[i,j,k] = cont;
				cont = cont + 1;
			Fin Para
		Fin Para
	Fin Para
	
	cont = 1;
	Para i = 0 Hasta pag - 1 Con Paso 1 Hacer
		Escribir "========= PAGINA ",cont," ==========";
		Para j = 0 Hasta fil - 1 Con Paso 1 Hacer
			Para k = 0 Hasta col - 1 Con Paso 1 Hacer
				Escribir matriz[i,j,k],"   " Sin Saltar;
			Fin Para
			Escribir "";
		Fin Para
		cont = cont + 1;
	Fin Para
FinAlgoritmo
