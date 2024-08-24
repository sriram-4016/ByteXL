
let submit = document.querySelector('#subBtn');
let result = document.getElementById('result');

submit.addEventListener('click', (e) => {
    e.preventDefault(); // to prevent the form submission so that the values in the DOM are not cleared.
    let min = +(document.getElementById('minVal').value);
    let max = +(document.getElementById('maxVal').value);
    if (max <= min) {
        result.innerHTML = `max should be greater than min`;
    }
    else {
        result.innerHTML = `Your random value from the selected range is ${Math.floor(Math.random() * (max - min + 1)) + min}`;
    }
        
})
