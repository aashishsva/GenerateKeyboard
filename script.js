let result = document.getElementById('result');


window.addEventListener('keydown', (e)=>{
    result.innerHTML = `The key Pressed is <span> ${e.key}</span <span>Key Code : ${e.keyCode} </span>`;
    // console.log(`Key: ${e.key}, Key Code: ${e.keyCode}`);
    playSound();
    if(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey){
        let combination = [];
        if(e.ctrlKey) combination.push('Ctrl');
        if(e.metaKey) combination.push('Meta');
        if(e.shiftKey) combination.push('Shift');
        if(e.altKey) combination.push('Alt');
        combination.push(e.key);
        result.innerHTML += `<div>Combination: ${combination.join('+')}</div>`;
    }
})

function playSound(){
    let audio = new Audio('spacebar.mp3');
    audio.play();
}
