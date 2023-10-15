const button = document.querySelector("#subbtn");

button.addEventListener("click",()=>{
    fetch("/newUser")
        .then(response =>{ response.json()})
        .then((data)=>{
            const h1 = document.querySelector("h1");
            h1.textContent = data
        }).catch((error)=>{
            console.log("Error experinced while trying to fetch Data :", error);
            h1.textContent = "Nothing My Guy";
        })
})