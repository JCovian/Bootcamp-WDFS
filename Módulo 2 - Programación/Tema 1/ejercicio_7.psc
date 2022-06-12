Algoritmo ejercicio_7
	Escribir 'Introduzca el precio del producto'
	Leer precio
	Escribir 'Introduzca el dinero entregado'
	Leer entregado
	Si entregado<precio Entonces
		Escribir 'Faltan ',precio-entregado,' euros'
	SiNo
		Si precio==entregado Entonces
			Escribir 'Precio justo'
		SiNo
			Escribir 'El cambio es ',entregado-precio,' euros'
		FinSi
	FinSi
FinAlgoritmo
