let taskarray=[]

/* task popup*/
let popup = document.querySelector('.addtask')
let taskbox = document.querySelector('.alltasktext')
let exit = document.querySelector('.exitbutton')

popup.addEventListener ('click', () =>{
    taskbox.classList.toggle ('show');
})

exit.addEventListener ('click', () =>{
    taskbox.classList.remove ('show');
})

/*task button*/
let textCollector = document.querySelector('.taskin')
let textInput = document.querySelector('#addtext')


//new function//
function cardGenerator() {
    let createCard = '';
    taskarray.forEach((task) => {
    createCard += `
    <div class="realTask">
        <input type="checkbox" class="js-delete-checkbox"> ${task.Name}
    </div>
    `;
});

    document.querySelector('.realtask').innerHTML = createCard;

    document.querySelectorAll('.js-delete-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
    taskarray.splice(index, 1);
    cardGenerator();
    });
});
}



textInput.addEventListener ('click', () =>{
let taskData = textCollector.value;
console.log (taskData);
if (taskData.trim()===''){
    alert('Input a value')
}
else{
    let taskObj={
    Name:taskData
    };

    taskarray.push(taskObj);
    cardGenerator();
    textCollector.value='';
}
});




