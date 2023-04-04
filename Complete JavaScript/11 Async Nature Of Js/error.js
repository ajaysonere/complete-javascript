function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function process() {
            console.log("Resolved");
            let data = "Dummy Data";
            reject(data);
        }, 5000);
    });
}

let x = fetchData();
x.then(function(value){
    console.log("Resolved " , value);
},function (err){
    console.log("On Reject ", err);
})