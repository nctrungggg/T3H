//bài 1 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce((a, b) => a + b , 0);
let sum  = 0;
arr.forEach(function(e) {
    sum += e;  
})
document.getElementById('sum').innerHTML = sum;


//bài 2
let h2 = document.getElementById('hello');
let btn = document.getElementById('btn');

show = () => {
    h2.innerHTML = 'Hello2';
    h2.style.color = 'red';
    // h2.outerHTML = '<h2>NCT</h2>';

    
}

