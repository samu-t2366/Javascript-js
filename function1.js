function applyLoan(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= 50000) {
                resolve(" Loan Approved");
            } else {
                reject("Loan Rejected");
            }
        }, 2000);
    });
}

applyLoan(30000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    
console.log("Processing your loan...");