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
    }
}
export default API