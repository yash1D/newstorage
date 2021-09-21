
let world = ['india', 'USA', 'Japan'];

localStorage.setItem('Name', 'sumit');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('country',world);


// localStorage.clear();

// localStorage.removeItem('Name2');

let name = localStorage.getItem('Name');
name = localStorage.getItem('country');
console.log(name)

sessionStorage.setItem('sessionName', 'suraj');
sessionStorage.setItem('sessionName2', 'kishor');
sessionStorage.setItem('sessioncountry',world);
