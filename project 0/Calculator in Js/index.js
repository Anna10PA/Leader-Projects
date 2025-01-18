function BackgroundModerl(){
    let Color = document.getElementById('background_moder').value

    if (Color){
        if (Color === 'Black'){
            document.body.style.backgroundColor = Color;
            document.body.style.Color = 'White';
            document.button.style.color = 'Green'
        }else if (Color === 'white'){
            document.body.style.backgroundColor = Color;
            document.calculator.style.backgroundColor = 'green'
        }
    }
}

let display = document.getElementById('result')

function element(Element){
    display.value = display.value + Element
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'None'
    }
}

function clean(){
    display.value = ''
}

function Delete(){
    display.value = display.value.slice(0, -1)
}

function procent(){
    display.value = display.value / 100
}