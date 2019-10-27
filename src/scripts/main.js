import API from "./dataManager.js"

const equipFormHtml = (formInfo) => {
    const equipForm = `
    <section class = "equip-form">


            <label for="checkOutDate">Date</label>
            <input type="date" name="checkOutDate" id="checkOutDate">
        

            <br/>
            <label for="epipNum">Equipment #</label>
            <input type="text" name="epipNum" id="epipNum">
        
        
        
            <label for="eqipType">Type</label>
            <selector type="text" name="eqipType" id="eqipType">
            <select id="typeDropDown">
            </select>
        

        
        
        <label for="instructor">Instructor</label>
        <input type="text" name="instructor" id="instructor">
        
        
        <label for="student">Student</label>
        <input type="text" name="student" id="student">

        <button id = "add-equip-button">Save</button>
        </section>
        `
    const containerDiv = document.getElementById("container");
    containerDiv.innerHTML = equipForm;
}

equipFormHtml();

API.typeFetch().then(types => {
    renderTypes(types);
});
API.logFetch().then(checkoutLogs => {
    renderLogs(checkoutLogs);
});

document.querySelector("#add-equip-button").addEventListener("click", event => {
    const newLogEntry = {
        "TypeId": Number(document.querySelector("#typeDropDown").value),
        "Date": document.querySelector("#checkOutDate").value,
        "EquipmentNumber": document.querySelector("#epipNum").value,
        "Instuctor": document.querySelector("#instructor").value,
        "Student": document.querySelector("#student").value,
        "Returned": false
    }
    console.log(newLogEntry)

    API.submitLog(newLogEntry)
    .then(response => API.logFetch())
    .then(checkoutLogs => {
        document.getElementById("logContainer").innerHTML = ""
        renderLogs(checkoutLogs);
    })
})

// API.logAndTypeFetch().then(database => {
//     renderTypeName(database);
// })

const renderLogs = (logs) => {
    // console.log(logs)
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
    node.setAttribute("value", type.id);
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
    console.log(log)
    const div = document.createElement("div");
    const date = document.createTextNode(`Date: ${log.Date} `); // Create a text node
    const equipmentNum = document.createTextNode(`Equipment Number: ${log.EquipmentNumber} `); // Create a text node
    const instructor = document.createTextNode(`Instructor: ${log.Instuctor} `); // Create a text node
    const student = document.createTextNode(`Student: ${log.Student} `);
    const returnedResult = lookUpReturnedBoolean(log);
    const returned = document.createTextNode(`Returned: ${log.Returned} `);
    API.typeFetch().then(types => {
        types.forEach(type => {
            if (type.id === log.TypeId) {
                console.log(type.Name)
                const typeName = document.createTextNode(type.Name)
                div.appendChild(typeName)
            }
        });
    })
    div.appendChild(date);
    div.appendChild(equipmentNum);
    div.appendChild(instructor);
    div.appendChild(student);
    div.appendChild(returned);
    document.getElementById("logContainer").appendChild(div);
    const deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "Return";
    deleteButton.setAttribute("id", `delete--${log.id}`);
    document.getElementById("logContainer").appendChild(deleteButton);

}


document.getElementById("logContainer").addEventListener("click", event => {
    const equipId = event.target.id.split("delete--")[1]
    console.log(equipId)

    API.deleteLog(equipId)
    .then(response => API.logFetch())
    .then(checkoutLogs => {
        document.getElementById("logContainer").innerHTML = ""
        renderLogs(checkoutLogs);
    })
})
// <fieldset>
//     <label for="extraCord">Extra Cord</label>
//     <input type="text" name="extraCord" id="extraCord">
// </fieldset>

// <fieldset>
//     <label for="adapterType">Adapter Type</label>
//     <input type="text" name="adapterType" id="adapterType">
// </fieldset>
