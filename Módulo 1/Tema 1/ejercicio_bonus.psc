Funcion resultado = calc_potencia (base,exponente)
	Definir resultado Como Entero;
	
	si exponente == 0 Entonces
		resultado = 1;
	SiNo
		resultado = base * calc_potencia(base,exponente-1);
	FinSi	
FinFuncion

Funcion resultado = calc_factorial(base)
	Definir resultado Como Entero;
	
	Si base == 0 Entonces
		resultado = 1;
	SiNo
		resultado = base * calc_factorial(base - 1);
	FinSi
	
FinFuncion

Algoritmo ejercicio_bonus
	Definir base,exponente Como Entero;
	
	Escribir "Introduce el número" Sin Saltar	;
	Leer base;
	Escribir "Introduce el exponente: " Sin Saltar;
	Leer exponente;
	
	Escribir base,"^",exponente," es igual a ",calc_potencia(base,exponente);
	Escribir "El factorial de ",base," es ",calc_factorial(base);
	
FinAlgoritmo
