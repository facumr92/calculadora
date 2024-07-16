const display = document.querySelector('#display');
const botones = document.querySelectorAll("button");


botones.forEach((boton) => {
    boton.addEventListener('click', () => {

        console.log(boton.id);

        switch (boton.id) {


            case "=":
                if (display.value === "") {

                    return;
                } else 

                    display.value = eval(display.value);
                
                break;

            case "ac": display.value = "";
                break;

            default: display.value += boton.id;
        }
    })
})
