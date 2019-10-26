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
    var node = document.createElement("option");                 // Create a <li> node
    var textnode = document.createTextNode(type.Name);         // Create a text node
    node.appendChild(textnode);                            // Append the text to <li>
    document.getElementById("typeDropDown").appendChild(node);
};
