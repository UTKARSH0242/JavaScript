let Radhebtn =document.querySelector('button');
Radhebtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter name of student');
    Radhebtn.textContent = 'Roll NO. 1:' + name;
    // alert("Radhe Radhe 🫰🏻"); 
}