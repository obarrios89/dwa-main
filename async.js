console.log(1)

const promesa= new Promise((  resolve,reject  )=>{
    setTimeout(() => {
        console.log(2)
    }, 2000);
});

console.log(3);
