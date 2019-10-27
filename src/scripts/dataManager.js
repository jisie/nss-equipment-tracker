const API = {
    typeFetch() {
        return fetch("http://localhost:3000/types")
            .then(response => response.json())
    },
    logFetch() {
        return fetch("http://localhost:3000/checkoutlogs")
            .then(response => response.json())
    },
    logAndTypeFetch() {
        return fetch("http://localhost:3000")
            .then(response => response.json())
    },

    singleTypeFetch(id) {
        return fetch(`http://localhost:3000/types/${id}`)
            .then(response => response.json())
    },
    deleteLog(Id) {
        //    const entryBody = JSON.stringify(newJournalEntry)
        //    console.log(entryBody)
        return fetch(`http://localhost:3000/checkoutlogs/${Id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
    },
    submitLog(newLog) {
        //    const entryBody = JSON.stringify(newJournalEntry)
        //    console.log(entryBody)
        return fetch("http://localhost:3000/checkoutlogs", {
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