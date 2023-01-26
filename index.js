async function eventRetrieveal() {

    // Fetching Data from Regular Table in Airtable
    try {
        //Array to capture information from the Regular Table
        let regularMembers = [];
        //Saved the response to a variable
        let regularResponse = await fetch(`https://api.airtable.com/v0/appf7G8225c26By1w/Regular?api_key=keyU9BHPSgikWgQC9`)
        //Response will be converted into text
        let regularText = await regularResponse.text();
        //Splits the response text when there is a comma
        if (regularText.endsWith(",")) regularText = regularText.slice(0, -1);
        //Response text will be parsed
        regularMembers = JSON.parse(regularText);
        //Length of the captured table 
        let regularLength = regularMembers.records.length;
        //Getting span element for seats
        let regularLengthText = document.getElementById('reg-seats-left');
        if (200 - regularLength !== 1) {
            regularLengthText.innerText = `Only ${200 - regularLength} spaces are left.`;
        } else {
            regularLengthText.innerText = `Only ${200 - regularLength} space are left.`;
        }

        //The three buttons at the bottom of the page
        const threeButtonsDiv = document.getElementById("three-buttons-div");
        //Blue package div 
        const packageDiv = document.getElementById("white-box");
        //Blue Button in the blue package
        const packageButtonDiv = document.getElementById("regular-box");

        //Check if the length of the regular table is over 200
        if (regularLength >= 200) {
            //Remove Reserve my space button
            packageDiv.removeChild(packageDiv.childNodes[3]);
            //Remove They'll go fast quote on the site.
            packageButtonDiv.removeChild(packageButtonDiv.childNodes[11]);
            //Change "Only 200 spaces are available" to "All 200 spaces sold out"
            packageButtonDiv.childNodes[9].className = "regular-highlighted";
            packageButtonDiv.childNodes[9].innerText = "All 200 spaces sold out";

            //Create a new button in the package div to lead to the waiting list
            const button = document.createElement('a');
            button.className = "btn btn-cartoon btn-cartoon-shadow btn-blue btn-fill";
            button.href = "https://register.centercentre.com/metricswaitlist";
            button.target = "_blank";
            button.style = "color: #000";

            const div = document.createElement('div');
            div.id = "regular-text";
            div.className = "cta";
            div.innerText = "JOIN OUR WAITING LIST";

            //The waiting list text is appendding to button
            button.appendChild(div);
            //Button appended to packageDiv
            packageDiv.appendChild(button);

            //Changing the button at the bottom of the page
            threeButtonsDiv.childNodes[1].innerText = "SOLD OUT!\nJOIN OUR WAITING LIST";
        }
    } catch (err) {
        // //If it fails to catch the airtable data for regular

        // //Blue package div 
        // const packageDiv = document.getElementById("white-box");

        // //Remove Reserve my space button
        // packageDiv.removeChild(packageDiv.childNodes[3]);

        // //Create a new button in the package div to tell them the page failed to load data
        // const button = document.createElement('a');
        // button.className = "btn btn-cartoon btn-cartoon-shadow btn-blue btn-fill";
        // button.ariaDisabled = "true";
        // button.target = "_blank";
        // button.style = "color: #000";

        // const div = document.createElement('div');
        // div.id = "regular-text";
        // div.className = "cta";
        // div.innerText = "Too Many Requests\nRefresh the page";

        // //The waiting list text is appended to button
        // button.appendChild(div);
        // //Button appended to packageDiv
        // packageDiv.appendChild(button);
    }

    // Fetching Data from VIP Table in Airtable
    // try {
    //     //Array to capture information from the VIP Table
    //     let vipMembers = [];
    //     //Saved the response to a variable
    //     let vipResponse = await fetch(`https://api.airtable.com/v0/appf7G8225c26By1w/VIP?api_key=keyU9BHPSgikWgQC9`);
    //     //Response will be converted into text
    //     let vipText = await vipResponse.text();
    //     //Splits the response text when there is a comma
    //     if (vipText.endsWith(",")) vipText = vipText.slice(0, -1);
    //     //Response text will be parsed
    //     vipMembers = JSON.parse(vipText);
    //     //Length of the captured table 
    //     let vipLength = vipMembers.records.length;
    //     //Getting span element for seats
    //     let vipLengthText = document.getElementById('vip-seats-left');
    //     if (50 - vipLength !== 1) {
    //         vipLengthText.innerText = `Only ${50 - vipLength} spaces are left.`;
    //     } else {
    //         vipLengthText.innerText = `Only ${50 - vipLength} space are left.`;
    //     }
    //     //Change inner text of span
    //     //The three buttons at the bottom of the page
    //     const threeButtonsDiv = document.getElementById("three-buttons-div");
    //     //Purple package div 
    //     const purpleBoxDiv = document.getElementById("purple-box");
    //     //Purple package button 
    //     const vipBoxDiv = document.getElementById("vip-box");

    //     //Check if the length is over 50
    //     if (vipLength >= 50) {
    //         //Remove Reserve my space button
    //         purpleBoxDiv.removeChild(purpleBoxDiv.childNodes[3]);
    //         //Remove They'll go fast quote on the site.
    //         vipBoxDiv.removeChild(vipBoxDiv.childNodes[11]);
    //         //Change "Only 50 spaces are available" to "All 50 spaces sold out"
    //         vipBoxDiv.childNodes[9].className = "vip-highlighted";
    //         vipBoxDiv.childNodes[9].innerText = "All 50 spaces sold out";
    //         //Button at the bottom will be change to this text
    //         threeButtonsDiv.childNodes[3].innerText = "SOLD OUT!\nJOIN OUR WAITING LIST";

    //         //Create a new button in the package div to lead to the waiting list
    //         const button = document.createElement('a');
    //         button.className = "btn btn-purple btn-cartoon btn-cartoon-shadow btn-fill";
    //         button.href = "https://register.centercentre.com/metricsvipwaitlist";
    //         button.target = "_blank";

    //         const div = document.createElement('div');
    //         div.id = "regular-text";
    //         div.className = "cta";
    //         div.innerText = "JOIN OUR WAITING LIST";

    //         //The waiting list text is appendding to button
    //         button.appendChild(div);
    //         //Button appended to packageDiv
    //         purpleBoxDiv.appendChild(button);
    //     }
    // } catch (err) {
    //     // //If it fails to catch the airtable data for VIP

    //     // //The three buttons at the bottom of the page
    //     // const threeButtonsDiv = document.getElementById("three-buttons-div");
    //     // //Purple package div 
    //     // const purpleBoxDiv = document.getElementById("purple-box");

    //     // //Remove Reserve my space button
    //     // purpleBoxDiv.removeChild(purpleBoxDiv.childNodes[3]);

    //     // //Create a new button in the package div to tell them the page failed to load data
    //     // const otherButton = document.createElement('a');
    //     // otherButton.className = "btn btn-purple btn-cartoon btn-cartoon-shadow btn-fill";
    //     // otherButton.href = "https://register.centercentre.com/metricsvipwaitlist";
    //     // otherButton.target = "_blank";

    //     // const otherDiv = document.createElement('div');
    //     // otherDiv.id = "regular-text";
    //     // otherDiv.className = "cta";
    //     // otherDiv.innerText = "Too Many Requests\nRefresh the page";

    //     // //The waiting list text is appended to button
    //     // otherButton.appendChild(otherDiv);
    //     // //Button appended to packageDiv
    //     // purpleBoxDiv.appendChild(otherButton);
    // }
};

window.onload = (_evt) => {
    eventRetrieveal();
};
