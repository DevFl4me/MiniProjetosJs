const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lampada = document.querySelector('#lampada');

function isLampBroken(){
    return lampada.src.indexOf( 'Quebrada' ) > -1
}

function lampOn(){
    if(!isLampBroken()){
        lampada.src ='../images/lampadaLigada.jpg';
        
    }
}

function lampOff(){
    if(!isLampBroken()){
    lampada.src ='../images/lampadaDesligada.jpg';
    }
}

function lampBroken(){
    lampada.src = '../images/lampadaQuebrada.jpg';
}

turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
lampada.addEventListener('mouseover',lampOn);
lampada.addEventListener('mouseleave',lampOff);
lampada.addEventListener('dblclick',lampBroken);
