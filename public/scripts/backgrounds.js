let backgounds = document.getElementsByTagName('BODY')[0];
let dropdownBtn = document.querySelector('.backgroundBtn');
let dropdownMenu = document.querySelector('.dropdownMenu');
let backgroundSubmit = document.querySelector('.backgroundSubmitBtn');


backgounds.style.backgroundPosition = "center";
backgounds.style.backgroundSize = "cover";

switch(localStorage.background) {
    case 'jungle':
        backgounds.style.backgroundImage = "url('./images/jungle.jpg')";
        break;
    case 'blackSand':
        backgounds.style.backgroundImage = "url('./images/blackSand.jpg')";
        break; 
    case 'waterfall':
        backgounds.style.backgroundImage = "url('./images/waterfall.jpg')";               
        break;
    case 'mountain':
        backgounds.style.backgroundImage = "url('./images/mountain.jpg')";                
        break;
    case 'leaves':
        backgounds.style.backgroundImage = "url('./images/leaves.jpg')";                
        break;
    case 'iceland':
        backgounds.style.backgroundImage = "url('./images/waterfall2.jpg')";                
        break;
    default: 
        backgounds.style.backgroundImage = "url('./images/leaves.jpg')"; 
}

dropdownMenu.addEventListener('submit', () => {
    let value = document.querySelector('input[name="background"]:checked').value;
    switch(value) {
        case 'blackSand':
            localStorage.setItem('background', 'blackSand');                
            break;
        case 'waterfall':
            localStorage.setItem('background', 'waterfall');                
            break; 
        case 'mountain':
            localStorage.setItem('background', 'mountain');                
            break;
        case 'leaves':
            localStorage.setItem('background', 'leaves');                
            break;
        case 'jungle':
            localStorage.setItem('background', 'jungle');                
            break;
        case 'iceland':
            localStorage.setItem('background', 'iceland');                
            break;
    }
});    

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.style.display === "none" ? dropdownMenu.style.display = "block" : dropdownMenu.style.display = "none";
});

backgroundSubmit.addEventListener('click', () => {
    dropdownMenu.style.display = "none";
});