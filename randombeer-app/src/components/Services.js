

export function getTasks(callbackOk, callbackError){


    fetch("http://localhost:8080/randombeer/0")
        .then(res => res.json())
        .then(
            result => {
                callbackOk(result);
            },
            (error) => {
                callbackError(error);
                });


}





