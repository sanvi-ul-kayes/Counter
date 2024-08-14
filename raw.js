// counter

let heading = document.querySelectorAll(".heading")

heading.forEach((elem) => {
    let count = 0;
    function counter() {
        if (count <elem.dataset.countnumber) {
            count++
            elem.innerHTML = count;
        } else {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        counter()
    }, 600);
});










//promise:

// new Promise((Resolve, Reject) => {
//     let result = true;
//     if (result) {
//         Resolve("success")
//     } else {
//         Reject("error")
//     }
// })
// Promise.then(() => {
//     console.log("success hoise");
// })
// Promise.catch(() => {
//     console.log("error khaise");
// });


