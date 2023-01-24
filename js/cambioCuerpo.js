
const style = document.documentElement.style

const cambioFondo = () => {

if(style.getPropertyValue('--colorCuerpo') === '#07D6F3') {
    style.setProperty('--colorCuerpo', '#CAD6E7');

} else {

    style.setProperty('--colorCuerpo', '#07D6F3');

}

}
   
