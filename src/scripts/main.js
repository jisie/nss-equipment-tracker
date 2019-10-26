import API from "./dataManager.js"

API.typeFetch().then(types => {
    renderTypes(types);
});
API.logFetch().then(checkoutLogs => {
    renderLogs(checkoutLogs);
});
// API.logAndTypeFetch().then(database => {
//     renderTypeName(database);
// })
const renderLogs = (logs) => {
    logs.forEach(log => {
        createLog(log);
    });
};
const renderTypes = (types) => {
    types.forEach(type => {
        createTypeListItem(type);
    });
};
let typeName = ""
const renderTypeName = (database) => {
database.checkoutLogs.forEach(log => {
    database.types.forEach(type)
    if (log.typeId === type.Id) {
         typeName = Type.Name;
    }
})
};

const createTypeListItem = type => {
    var node = document.createElement("option"); // Create a <li> node
    var textnode = document.createTextNode(type.Name); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("typeDropDown").appendChild(node);
};

const lookUpReturnedBoolean = (log) => {
    if (log.Returned === true) {
        return "returned"
    } else {
        return "not returned"
    }
};

const createLog = log => {
    var div = document.createElement("div");                 // Create a <li> node
    var id = document.createTextNode(`${log.Id}. `);         // Create a text node
    var date = document.createTextNode(`Date: ${log.Date} `);         // Create a text node
    var name = document.createTextNode(`Name: ${log.name} `);         // Create a text node
    var equipmentNum = document.createTextNode(`Equipment Number: ${log.EquipmentNumber} `);         // Create a text node
    var instructor = document.createTextNode(`Instructor: ${log.Instructor} `);         // Create a text node
    var student = document.createTextNode(`Student: ${log.Student} `); 
    var returnedResult = lookUpReturnedBoolean(log);
    var returned = document.createTextNode(`Status: ${returnedResult} `);
    API.logAndTypeFetch().then(database => {
            renderTypeName(database);
    }),
    div.appendChild(id);                            // Append the text to <li>
    div.appendChild(date);                            // Append the text to <li>
    div.appendChild(equipmentNum);                            // Append the text to <li>
    div.appendChild(instructor);                            // Append the text to <li>
    div.appendChild(student);                            // Append the text to <li>
    div.appendChild(returned);                            // Append the text to <li>
    document.getElementById("logContainer").appendChild(div);
    const deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "delete";
    deleteButton.setAttribute("id", `delete--${log.Id}`);
    document.getElementById("logContainer").appendChild(deleteButton);

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