

const hello = localStorage.getItem('hello');
const akash = localStorage.getItem('akash');
console.log(hello, akash);



const setAge = () =>{
    window.localStorage.setItem('age', 40);
}
setAge();