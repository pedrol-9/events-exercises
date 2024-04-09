// ejercicio 2
let form = document.getElementById("form");
let textInput = document.getElementById("input");
let boton = document.getElementById("boton")
let colorInput = document.getElementById("color");
// let newDivOutput = document.createElement("div");
let wallSection = document.getElementById("wall-section");
let nodoSpan = document.getElementById("nodoSpan");
let posterStyle = document.getElementById("Poster");
let graffitiStyle = document.getElementById("Graffiti");
let newDiv;

function clearDiv() {
    output.removeChild(output.firstChild);
} // still without calling


function createPoster(nodo, color) {
    newDiv = document.createElement("div");
    newDiv.classList.add("border", "border-black", "border-solid", "h-[300px]", "w-[300px]", "m-4", "rounded-md", "relative", `bg-[${color}]`);
    newDiv.appendChild(nodo);
    return newDiv;
}

// Punto 3
function createText(texto) {
    let auxP = document.createElement("p");
    auxP.className = "overflow-x-auto text-4xl m-4 font-bold text-yellow-100 w-[70%] h-[85%]";
    auxP.innerText = texto;
    return auxP;
}

// Punto 4
function createSpan(nodoPadre) {
    let divCloser = document.createElement("span");
    divCloser.innerText = "X";
    divCloser.id = "nodoSpan";
    divCloser.className = "text-5xl m-8 font-bold text-yellow-100 border-yellow border border-solid absolute -top-6 -right-6 p-2"
    nodoPadre.appendChild(divCloser);

    divCloser.addEventListener("click", () => {
        // wallSection.removeChild(event.target.)})
        nodoPadre.remove();
    })

    return divCloser;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    let inputValue = textInput.value;
    let selectedColor = colorInput.value;
    let nodoTexto = createText(inputValue);
    let nodoPoster = createPoster(nodoTexto, selectedColor);
    let nodoSpan = createSpan(nodoPoster);
    wallSection.appendChild(nodoPoster);
})

// Punto 5
posterStyle.addEventListener("change", () => {
    if (posterStyle.checked) {
        newDiv.style.fontFamily = "Roboto Black";
        // probar con toggle
        newDiv.classList.toggle("font-serif", true);
    } else if (graffitiStyle.checked) {
        newDiv.style.fontFamily = "Roboto Black";
    }
})



/* form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    clearDiv(); // Se pone de primero para que revise si tiene un child lo borre y luego se ejecute y renderice el nuevo.

    // Obtener el valor del input
    inputValue = textInput.value;

    // Insertar el valor del input en un párrafo de html
    let auxP = document.createElement("p");
    auxP.innerHTML = inputValue;
    // Aplicar estilos al texto insertado
    auxP.className = "text-5xl m-8 font-bold text-yellow-100";

    //Renderizar el valor del input en el div de salida
    // output.textContent = inputValue; // esto si fuera directamente insertar el string del value dentro del div output
    output.appendChild(auxP); // como está contenida en un <p> hay que insertar el elemento dentro del div output.

    // Aplicar estilos al div que refleja el input
    // output.className = "border border-black border-solid h-[300px] w-[300px] m-4 bg-[#61d5ff] rounded-md";
    output.classList.add("border", "border-black", "border-solid", "h-[300px]", "w-[300px]", "m-4", "bg-[#61d5ff]", "rounded-md");
    // let defaultBgColor = output.classList.add = "bg-[#61d5ff]"; // Se agrega el class sin reemplazar los anteriores, con el className pasa lo contrario. No sirve ***

    // Limpiar el valor del input
    textInput.value = "";

    // Opcional: Puedes hacer más cosas con el valor del input aquí
    // Por ejemplo, puedes almacenarlo en una variable para su posterior uso
    console.log("Valor del input:", inputValue); // me imprime en consola, el valor del input ingresado.

    // return defaultBgColor; // se retorna, pero no sé cómo usarlo fuera de este scope. No sirve ***
}) */

// Ejercicio 3
/* colorInput.addEventListener("input", event => {
    event.preventDefault();
    console.clear();
    console.log(event.target.value); // imprime un string con el código hax del color seleccionado

    // contengo el valor del colorInput para poder usarlo
    let selectedColor = event.target.value;
    // console.log(selectedColor); // imprime igual que el primero, osea está funcionando perfectamente hasta aquí.

    // Testeo qué hay en "output.classList"
    console.log([output]) // No hay nada, y tiene sentido, porque no está en el html, y las clases se están creando dinámicamente con el form.addEventListener, pero para cambiar eso depronto mi abuelita sabe. Entonces, solo tendría que agregarle ese selected color al div output creado en mi html.

    // Aplicando el selected color al div output en el html.
    output.classList.replace("bg-[#61d5ff]", `bg-[${selectedColor}]`); // Lo logréeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee pero solo se cambia una vez.
    // probando con .className:
    // output.className = ""
    output.classList.toggle(`bg-[${selectedColor}]`, false); // forza la eliminación de la clase existente
    output.classList.toggle(`bg-[${selectedColor}]`, true); // forza la creación de la class nueva.

    // Para que se repita, porque solo se aplica una vez. Y se se limpie el div output content cuando se pone otro valor.

    console.log(output.className);
    // clearDiv();
}) */

// Ejercicio 4

