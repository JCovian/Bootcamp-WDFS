Algoritmo ejercicio_42
	Definir array,n,mayores,i Como Entero;
	Definir prom,prom_positivos Como Real;
	
	Escribir "Introduce el n�mero de elementos que tendr� el array";
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
	Escribir "Hay ",mayores," n�meros mayores que 0";
	Escribir "El promedio de los n�meros positivos es ",prom_positivos;
	Escribir "El promedio de todos los n�meros es ",prom;
	
FinAlgoritmo
