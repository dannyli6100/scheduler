let isInput = true, scribeData = [], providerData = [] // note to self: map dropdown menu to the arrays arr[i]["name"]

// json templates
const scribeForm = {
    'name': '',
    'hoursPerWeek': '',
    'availability': {
        'mon': '',
        'tue': '',
        'wed': '',
        'thur': '',
        'fri': ''
    }
}

const providerForm = {
    'name': '',
    'workHoursPerDay': {
        'mon': '',
        'tue': '',
        'wed': '',
        'thur': '',
        'fri': ''
    }
}
// use prompts to get data, assign to forms and then create a new scribe/provider and push it to the array of data
function inputForScribe() {
    const name = prompt("Enter Scribe Name:");
    const workHours = parseInt(prompt("Enter Work Hours per Week (numbers only):"));
    const availability = {};

    availability["Monday"] = prompt("Available on Mondays? In this format (12pm - 5pm):");
    availability["Tuesday"] = prompt("Available on Tuesdays? In this format (12pm - 5pm):");
    availability["Wednesday"] = prompt("Available on Wednesdays? In this format (12pm - 5pm):");
    availability["Thursday"] = prompt("Available on Thursdays? In this format (12pm - 5pm):");
    availability["Friday"] = prompt("Available on Fridays? In this format (12pm - 5pm):");

    scribeForm.name = name;
    scribeForm.hoursPerWeek = workHours;
    scribeForm.availability = availability;
    const newScribe = Object.assign({}, scribeForm)

    console.log(scribeForm)
    scribeData.push(newScribe)
    console.log(scribeData)
}

function inputForProvider() {
    const name = prompt("Enter Provider Name:");
    const workHoursPerDay = {};

    workHoursPerDay["Monday"] = prompt("Monday schedule. In this format (12pm - 5pm):");
    workHoursPerDay["Tuesday"] = prompt("Tuesday schedule. In this format (12pm - 5pm):");
    workHoursPerDay["Wednesday"] = prompt("Wednesday schedule. In this format (12pm - 5pm):");
    workHoursPerDay["Thursday"] = prompt("Thursday  schedule. In this format (12pm - 5pm):");
    workHoursPerDay["Friday"] = prompt("Friday schedule. In this format (12pm - 5pm):");

    providerForm.name = name;
    providerForm.workHoursPerDay = workHoursPerDay;
    const newProvider = Object.assign({}, providerForm)

    providerData.push(newProvider)
    console.log(providerData)
}

// while true, get input
while(isInput) {
    const scribeOrDoc = prompt('Enter (scribe/doctor) or "q" to quit:')
    if (scribeOrDoc === 'q') {
        isInput = false
        break
    }

    if(scribeOrDoc.toLowerCase() === 'scribe') {
        inputForScribe();
    }
    else if(scribeOrDoc.toLowerCase() === 'doctor') {
        inputForProvider();
    }
    else {
        alert('Please enter "scribe" or "doctor"')
    }
}

console.log("Scribe Data:", JSON.stringify(scribeData))
console.log('Provider Data:', JSON.stringify(providerForm))
console.log(scribeData)