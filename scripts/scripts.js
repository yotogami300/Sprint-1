
const inputCantidad = document.getElementById("cantidad-pc");
const inputValorCompra = document.getElementById("compra-valor");
const inputValorDescuento = document.getElementById("descuento-valor");
const inputTotal = document.getElementById("total-a-pagar");
const avisoDescuento = document.getElementById("aviso-descuento");
const cajaMain = document.getElementById("caja-main");
const cajaOrden = document.getElementById("caja-orden");
const cajaLoad = document.getElementById("caja-loading");
var descuento, valorDescuento, totalAPagar;

function ImprimirDatos(x, y, z){
	inputValorCompra.value = x;
	inputValorDescuento.value = y;
	inputTotal.value = z;
}

function CalcularDescuento(x, y){
	let z = (x / 100) * y;
	let v = x - z;

	return{
		valorDescuento: z,
		totalAPagar: v
	}
}

function MostrarOrden(){
	cajaOrden.style.display = "block";
	cajaLoad.style.display = "none";
}

function Calcular(){
	let pcsCompradas = Number(inputCantidad.value);

	if (pcsCompradas == "") {
		alert("Debes indicar la cantidad de Computadoras.")
	}
	else if(pcsCompradas < 1){
		alert("Debes indicar un valor mayor que 1.")
	}
	else if(Number.isNaN(pcsCompradas)){
		alert("Debes indicar un valor Numerico.")
	}
	else{
		let valorCompra = pcsCompradas * 820000;

		cajaMain.style.display = "none";

		cajaLoad.style.display = "block";

		setTimeout(MostrarOrden, 2000);

		if (valorCompra < 1640000 || valorCompra > 9840000) {

			ImprimirDatos(valorCompra, 0, valorCompra);

			avisoDescuento.innerHTML = "No hay Descuentos para esta Compra";

		}
		else if (valorCompra >= 1640000 && valorCompra <= 3280000){
			
			descuento = CalcularDescuento(valorCompra, 15);

			ImprimirDatos(valorCompra, descuento.valorDescuento, descuento.totalAPagar);

			avisoDescuento.innerHTML = "Su Descuento es del 15%";

		}
		else if (valorCompra > 3280000 && valorCompra <= 6560000){

			descuento = CalcularDescuento(valorCompra, 25);

			ImprimirDatos(valorCompra, descuento.valorDescuento, descuento.totalAPagar);

			avisoDescuento.innerHTML = "Su Descuento es del 25%";
		}
		else if (valorCompra > 6560000 && valorCompra <= 9840000){

			descuento = CalcularDescuento(valorCompra, 35);

			ImprimirDatos(valorCompra, descuento.valorDescuento, descuento.totalAPagar);

			avisoDescuento.innerHTML = "Su Descuento es del 35%";
		}
		
	}

	
}