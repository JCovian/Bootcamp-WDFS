Algoritmo ejercicio_33
	
	Definir producto Como Caracter;
	Definir precio, total Como Real;
	Definir opc, cantidad, numart, tamano, i Como Entero;
	
	tamano = 4;
	Dimension producto[tamano];
	Dimension precio[tamano];
	Dimension numart[tamano];
	
	producto[0] = "Bocadillo de jamón";
	producto[1] = "Refresco";
	producto[2] = "Cerveza";
	producto[3] = "Pan";
	
	precio[0] = 1.50;
	precio[1] = 1.05;
	precio[2] = 0.75;
	precio[3] = 2.00;
	
	numart[0] = 0;
	numart[1] = 0;
	numart[2] = 0;
	numart[3] = 0;
	
	total = 0.00;
	cantidad = 0;
	opc = -1;
	
	Mientras opc <> 0 Hacer
		Escribir "***************************";
		Escribir "1.",producto[0];
		Escribir "2.",producto[1];
		Escribir "3.",producto[2];
		Escribir "4.",producto[3];
		Escribir "0. Para salir";
		Escribir "***************************";
		Escribir "";
		Escribir "Introduzca el código del articulo";
		Leer opc;
		Si opc <> 0
			Escribir "Cantidad";
			Leer cantidad;	
		FinSi
		Segun opc Hacer
			1:
				total = total + (precio[opc-1] * cantidad);
				numart[opc-1] = numart[opc-1] + cantidad;
			2:
				total = total + (precio[opc-1] * cantidad);
				numart[opc-1] = numart[opc-1] + cantidad;
			3:
				total = total + (precio[opc-1] * cantidad);
				numart[opc-1] = numart[opc-1] + cantidad;
			4:
				total = total + (precio[opc-1] * cantidad);
				numart[opc-1] = numart[opc-1] + cantidad;
			De Otro Modo:
				Limpiar Pantalla;
				Si opc <> 0 Entonces
					Escribir "Introducir un codigo de producto válido";
					Esperar 2 Segundos;
				Fin Si
		Fin Segun
		Limpiar Pantalla;
	Fin Mientras
	
	Escribir "Listado de articulos adquiridos:";
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Si numart[i] <> 0 Entonces
			Escribir producto[i]," cantidad ",numart[i];
		Fin Si
	Fin Para
	Escribir "";
	Escribir "Total a pagar ",total," euros";
FinAlgoritmo
