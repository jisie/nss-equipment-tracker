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

// const renderTypeName = (database) => {
//     database.checkoutLogs.forEach(log => {
//         database.types.forEach(type)
//         if (log.typeId === type.Id) {
//             typeName = Type.Name;
//         }
//     })
// };

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

    const div = document.createElement("div");
    const id = document.createTextNode(`${log.Id}. `);
    const date = document.createTextNode(`Date: ${log.Date} `);         // Create a text node
    const equipmentNum = document.createTextNode(`Equipment Number: ${log.EquipmentNumber} `);         // Create a text node
    const instructor = document.createTextNode(`Instructor: ${log.Instructor} `);         // Create a text node
    const student = document.createTextNode(`Student: ${log.Student} `);
    const returnedResult = lookUpReturnedBoolean(log);
    const returned = document.createTextNode(`Status: ${returnedResult} `);
    let typeNameText;
    API.singleTypeFetch(log.TypeId).then(type => {
        typeNameText = type.Name
    })
    const typeName = document.createTextNode(typeNameText);         // Create a text node
    div.appendChild(id)
    div.appendChild(date);
    div.appendChild(equipmentNum);
    div.appendChild(instructor);
    div.appendChild(student);
    div.appendChild(returned);
    div.appendChild(typeName)
    document.getElementById("logContainer").appendChild(div);
    const deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "delete";
    deleteButton.setAttribute("id", `delete--${log.Id}`);
    document.getElementById("logContainer").appendChild(deleteButton);



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