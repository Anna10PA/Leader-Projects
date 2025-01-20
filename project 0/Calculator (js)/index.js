function backgroundModerl(){
    let BackgroundColor = document.getElementById('background_moder').value

    if (BackgroundColor){
        document.body.style.backgroundColor = BackgroundColor;
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