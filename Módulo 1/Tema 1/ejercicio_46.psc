Algoritmo ejercicio_46
	
	Definir a,b,c,temp Como Entero;
	
	Escribir "Introduce 3 números:";
	Leer a,b,c;
	
	Si a > b Entonces
		temp = a;
		a = b;
		b = temp;
		Si a > c Entonces
			temp = a;
			a = c;
			c = b;
			b = temp;
		SiNo
			Si b > c Entonces
				temp = b;
				b = c;
				c = temp;
			Fin Si
		Fin Si
	SiNo
		Si a > c Entonces
			temp = a;
			a = c;
			c = b;
			b = temp;
		SiNo
			Si b > c Entonces
				temp = b;
				b = c;
				c = temp;
			Fin Si
		Fin Si
	Fin Si
	
	Escribir "Los números ordenados son: ",a," ",b," ",c;
	
FinAlgoritmo
