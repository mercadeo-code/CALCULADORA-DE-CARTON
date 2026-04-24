let materiales = {
"OC36": 3279,
"OC40": 2985,
"OC44": 2778,
"OC48": 2564,
"OC52": 2381,
"CC48": 3077,
"CC58": 2632,
"WA48": 2564,
"KC40": 2985,
"KC48": 2564,
"BS60": 5555
};

// Llenar dropdown (esto corre porque el script está al final del HTML)
let select = document.getElementById("material");

// opción inicial
let op = document.createElement("option");
op.value = "";
op.text = "Seleccione";
select.appendChild(op);

// cargar materiales
for (let m in materiales) {
let option = document.createElement("option");
option.value = m;
option.text = m;
select.appendChild(option);
}

// cálculo
function calcular() {


let cantidad = document.getElementById("cantidad").value;
let corteA = document.getElementById("corteA").value;
let corteB = document.getElementById("corteB").value;
let cabida = document.getElementById("cabida").value;
let material = document.getElementById("material").value;

if (cantidad === "" || corteA === "" || corteB === "" || cabida === "" || material === "") {
    alert("Complete todos los campos");
    return;
}

let rendimiento = materiales[material];

let total = (((corteA * corteB )* (cantidad / cabida ))/10000)*1000 / rendimiento;

document.getElementById("resultado").innerText = total.toFixed(2);


}

function limpiar() {
document.getElementById("cantidad").value = "";
document.getElementById("material").value = "";
document.getElementById("corteA").value = "";
document.getElementById("corteB").value = "";
document.getElementById("cabida").value = "";
document.getElementById("resultado").innerText = "0";
}
