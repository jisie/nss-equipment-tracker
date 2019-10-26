filterEntryMood(radioValue) { //created function inside of API to query data from fetch then parse then return
    return fetch(
        `http://localhost:3000/entries?currentMood=${radioValue}`
    ).then(entries => entries.json());
}
filterEntryMood(mood).then(filteredData => {
    console.log('filteredData: ', filteredData);