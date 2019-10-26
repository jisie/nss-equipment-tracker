const API = {
    typeFetch() {
        return fetch("http://localhost:3000/types")
            .then(response => response.json())
    },
    logFetch() {
        return fetch("http://localhost:3000/checkoutlog")
            .then(response => response.json())
    },
    submit(newLog) {
        return fetch("http://localhost:3000/checkoutlog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLog)
        })
            .then(response => response.json()) //the object that was just created
    },

}
export default API