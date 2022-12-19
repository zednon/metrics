async function eventRetrieveal() {

    let regularMembers = [];

    let regularResponse = await fetch(`https://api.airtable.com/v0/appf7G8225c26By1w/Regular?api_key=keyU9BHPSgikWgQC9`);
    let regularText = await regularResponse.text();

    if (regularText.endsWith(",")) regularText = regularText.slice(0, -1);

    regularMembers = JSON.parse(regularText);

    let vipMembers = [];

    let vipResponse = await fetch(`https://api.airtable.com/v0/appf7G8225c26By1w/VIP?api_key=keyU9BHPSgikWgQC9`);
    let vipText = await vipResponse.text();

    if (vipText.endsWith(",")) vipText = vipText.slice(0, -1);

    vipMembers = JSON.parse(vipText);

    let regularLength = regularMembers.records.length;
    let vipLength = vipMembers.records.length;

    const intensiveDiv = document.getElementById("ind-button");
    const teamButton = document.getElementById("team-button");

    if (regularLength >= 200) {
        intensiveDiv.removeChild(intensiveDiv.childNodes[1]);

        const button = document.createElement('a');
        button.className = "cta btn btn-purple btn-cartoon-shadow btn-cartoon";
        button.href = "https://register.centercentre.com/metricsvipwaitlist";
        button.innerText = "JOIN OUR\nWAITING LIST";
        button.target = "_blank";

        intensiveDiv.appendChild(button);
    }

    if (vipLength >= 15) {
        teamButton.removeChild(teamButton.childNodes[1]);

        const button = document.createElement('a');
        button.className = "cta btn btn-purple btn-cartoon-shadow btn-cartoon";
        button.href = "https://register.centercentre.com/metricsvipwaitlist";
        button.innerText = "JOIN OUR\nWAITING LIST";
        button.target = "_blank";

        teamButton.appendChild(button);
    }
};

window.onload = (_evt) => {
    eventRetrieveal();
};
