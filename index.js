document.getElementById("btn_execute").addEventListener("click", () => {


    var intMeta = parseFloat(document.getElementById("meta_general").value);

    var recolecta = [
        document.getElementById("quantitywendy").value,
        document.getElementById("quantitydipper").value,
        document.getElementById("quantitysoos").value,
        document.getElementById("quantitymabel").value,
    ];
    console.log(recolecta);

    recolecta.forEach(element => {
        console.log(cumplimiento(element, intMeta));
    });

    /*.find=> 

    /*function porcentajes(){
    recolecta.forEach(element);
    var total = intMeta * 0.10;
    var porciento = element / total;
    //llamar el valor del arreglo y hacerlo igual a otro arreglo con el porcentaje
        porciento
    ]
    return console.log
    }
});*/

function selectresponsable() {
    var elementohtmlopcion = document.getElementById("select_codigos").value;
    if (elementohtmlopcion != ""){
        alert("Seleccionó a: " + responsable(parseInt(elementohtmlopcion)));
    }
}

function responsable(parametro) {
    var nombre = document.getElementById(parametro).textContent;
    return nombre;
}


function cumplimiento(valorrecogido, meta){
    if(valorrecogido == meta){
        return('cumplió la cuota');
    }if(valorrecogido > meta){
        return('Superó la cuota');
    }else if(valorrecogido < meta){
        return('Hizo falta');
    }
}
    alert($("#meta_general").val());
    var division = (( / 4));
    var nodo = document.getElementById("metaindividual");
    var meeter = document.createTextNode(division)
    nodo.appendChild(meeter);
    $("#metaindividual2").html(division);

var meta = document.getElementById("#meta_general").value;

function metaindividual (meta){

}

document.getElementById("#ingresar").addEventListener("click", () =>{
    var recogido = document.getElementById("#meta").value;
        var arreglodinero = new Array;
        arreglodinero[0] =  new Array recogido;
});
var wendy = 1;
var dipper = 2;
var soos = 3;
var mabel = 4;

function responsable (document.getElementById("#codigo").value){
    if(value == 1){
        return ('wendy' + arreglodinero[0])
    }
}



