const equipFormHtml = (formInfo) => {
    const equipForm = `

        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>
        <form>
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
            </fieldset>

            <fieldset>
                <label for="extraCord">Extra Cord</label>
                <input type="text" name="extraCord" id="extraCord">
            </fieldset>
            
            <fieldset>
                <label for="adapterType">Adapter Type</label>
                <input type="text" name="adapterType" id="adapterType">
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
 