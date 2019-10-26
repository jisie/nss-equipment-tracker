import API from "./dataManager.js"

API.typeFetch().then(types => {
    renderTypes(types);
});



const renderTypes = (types) => {
    types.forEach(type => {
        createTypeListItem(type);
    });
};

const createTypeListItem = type => {
    var node = document.createElement("option"); // Create a <li> node
    var textnode = document.createTextNode(type.Name); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("typeDropDown").appendChild(node);
};

const equipFormHtml = (formInfo) => {
    const equipForm = `

    <form>
    <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
    </ul>
    <fieldset>
                <label for="checkOutDate">Date</label>
                <input type="date" name="checkOutDate" id="checkOutDate">
            </fieldset>

            <fieldset>
                <label for="epipNum">Equipment #</label>
                <input type="text" name="epipNum" id="epipNum">
            </fieldset>
            
            <fieldset>
                <label for="eqipType">Type</label>
                <selector type="text" name="eqipType" id="eqipType">
                <select id="typeDropDown">
                </select>
            </fieldset>

            
            <fieldset>
            <label for="instructor">Instructor</label>
            <input type="text" name="instructor" id="instructor">
            </fieldset>
            
            <fieldset>
            <label for="student">Student</label>
            <input type="text" name="student" id="student">
            </fieldset>
            `
    const containerDiv = document.getElementById("container");
    containerDiv.innerHTML = equipForm;
}

equipFormHtml();

// <fieldset>
//     <label for="extraCord">Extra Cord</label>
//     <input type="text" name="extraCord" id="extraCord">
// </fieldset>

// <fieldset>
//     <label for="adapterType">Adapter Type</label>
//     <input type="text" name="adapterType" id="adapterType">
// </fieldset>