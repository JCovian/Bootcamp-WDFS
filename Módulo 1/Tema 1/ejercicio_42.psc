Algoritmo ejercicio_42
	Definir array,n,mayores,i Como Entero;
	Definir prom,prom_positivos Como Real;
	
	Escribir "Introduce el número de elementos que tendrá el array";
	Leer n;
	Dimension array[n];
	mayores = 0;
	prom = 0;
	prom_positivos = 0;
	
	//Llenar el array
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		array[i] = Aleatorio(-100,100);
	Fin Para
	
	//Leer el array
	Para i = 0 Hasta n-1 Con Paso 1 Hacer
		Si array[i] > 0 Entonces
			mayores = mayores + 1;
			prom_positivos = prom_positivos + array[i];
		Fin Si
		prom = prom + array[i];
	Fin Para
	
	prom_positivos = prom_positivos / mayores;
	prom = prom / n;
	Escribir "Hay ",mayores," números mayores que 0";
	Escribir "El promedio de los números positivos es ",prom_positivos;
	Escribir "El promedio de todos los números es ",prom;
	
FinAlgoritmo
