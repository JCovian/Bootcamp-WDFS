Algoritmo ejercicio_49
	Definir dulces,bebidas,conservas,i,max,max_i,min,min_i,prom,n Como Entero;
	Definir mes,producto Como Caracter;
	
	n = 12;
	Dimension dulces[n],bebidas[n],conservas[n];
	Dimension mes[n];
	max = 0;
	prom = 0;
	min = 500;
	
	mes[0] = "enero";
	mes[1] = "febrero";
	mes[2] = "marzo";
	mes[3] = "abril";
	mes[4] = "mayo";
	mes[5] = "junio";
	mes[6] = "julio";
	mes[7] = "agosto";
	mes[8] = "septiembre";
	mes[9] = "octubre";
	mes[10] = "noviembre";
	mes[11] = "diciembre";
	
	//Llenar arrays con datos aleatorios
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		dulces[i] = Aleatorio(200,500);
		bebidas[i] = Aleatorio(200,500);
		conservas[i] = Aleatorio(200,500);
	Fin Para
	
	//Visualizar el array para testear
	Escribir "Dulces: " Sin Saltar;
	Para i=0 Hasta n-1 Con Paso 1 Hacer
		Escribir dulces[i],"   " Sin Saltar;
	Fin Para
	Escribir "";
	Escribir "Bebidas: ",Sin Saltar;
	Para i=0 Hasta n-1 Con Paso 1 Hacer
		Escribir bebidas[i],"   " Sin Saltar;
	Fin Para
	Escribir "";
	Escribir "conservas: ",Sin Saltar;
	Para i=0 Hasta n-1 Con Paso 1 Hacer
		Escribir conservas[i],"   " Sin Saltar;
	Fin Para
	Escribir "";
	
	//a) Calcula mayor coste producción dulces
	Para i = 0 Hasta n -1 Con Paso 1 Hacer
		Si dulces[i] > max Entonces
			max = dulces[i];
			max_i = i;
		Fin Si
	Fin Para
	Escribir "El mes con mayor coste de producción de dulces fue ",mes[max_i];
	
	//b) Calcula promedio anual coste producción bebidas, mes mayor coste, mes menor coste
	max = 0;
	Para i = 0 Hasta n -1 Con Paso 1 Hacer
		prom = prom + bebidas[i];
		Si bebidas[i] > max Entonces
			max = bebidas[i];
			max_i = i;
		Fin Si
		Si bebidas[i] < min Entonces
			min = bebidas[i];
			min_i = i;
		FinSi
	Fin Para
	Escribir "El promedio de coste de producción de bebidas fue ",prom/n;
	Escribir "El mes con mayor coste de producción de bebida fue ",mes[max_i];
	Escribir "El mes con menor coste de producción de bebida fue ",mes[min_i];
	
	//c) Quién tuvo menor coste de producción en diciembre
	Si dulces[11] < bebidas[11] Entonces
		Si dulces[11] < conservas[11] Entonces
			min_i = dulces [11];
			producto = "dulces";
		SiNo
			min_i = conservas[11];
			producto = "conservas";
		FinSi
	SiNo
		Si bebidas[11] < conservas[11] Entonces
			min_i = bebidas[11];
			producto = "bebidas";
		SiNo
			min_i = conservas[11];
			producto = "conservas";
		FinSi
	Fin Si
	Escribir "El producto con menor coste de producción en diciembre es ",producto," con ",min_i," euros";
	
FinAlgoritmo
