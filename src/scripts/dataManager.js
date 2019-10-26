const API = {
    typeFetch() {
        return fetch("http://localhost:3000/types")
            .then(response => response.json())
    },
    logFetch() {
        return fetch("http://localhost:3000/checkoutlog")
            .then(response => response.json())
    },
    submitLog(newLog) {
        return fetch("http://localhost:3000/checkoutlog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLog)
        })
            .then(response => response.json()) //the object that was just created
    },
    deleteLog(log) {
        return fetch(`http://localhost:3000/checkoutLog/${log}`, {
            method: "DELETE",
        })
            .then(response => response.json())
    },

}
export default API