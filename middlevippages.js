async function eventRetrieveal() {

    let vipMembers = [];

    let vipResponse = await fetch(`https://api.airtable.com/v0/appf7G8225c26By1w/VIP?api_key=keyU9BHPSgikWgQC9`);
    let vipText = await vipResponse.text();

    if (vipText.endsWith(",")) vipText = vipText.slice(0, -1);

    vipMembers = JSON.parse(vipText);

    let vipLength = vipMembers.records.length;

    const intensiveDiv = document.getElementById("ind-button");
    const teamButton = document.getElementById("team-button");

    if (vipLength >= 50) {
        intensiveDiv.removeChild(intensiveDiv.childNodes[1]);

        const button = document.createElement('a');
        button.className = "cta btn btn-purple btn-cartoon-shadow btn-cartoon";
        button.href = "https://register.centercentre.com/metricsvipwaitlist";
        button.innerText = "JOIN OUR\nWAITING LIST";
        button.target = "_blank";

        intensiveDiv.appendChild(button);

        teamButton.removeChild(teamButton.childNodes[1]);

        const button1 = document.createElement('a');
        button1.className = "cta btn btn-purple btn-cartoon-shadow btn-cartoon";
        button1.href = "https://register.centercentre.com/metricsvipwaitlist";
        button1.innerText = "JOIN OUR\nWAITING LIST";
        button1.target = "_blank";

        teamButton.appendChild(button);
    }
};

window.onload = (_evt) => {
    eventRetrieveal();
};
