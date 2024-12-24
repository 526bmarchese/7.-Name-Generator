// Generate Prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return "The Great";
    } else {
        return "Master";
    }
}

// Generate First Name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    if (firstLetter === "a") {
        return "Jeff";
    } else if (firstLetter === "b") {
        return "Pablo";
    } else {
        return "Julian";
    }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
    switch (roadType) {
        case "road":
            return `${favoriteColor}ridge`; //blueridge
        case "street":
            return `${favoriteColor}son`; //blueson
        case "circle":
            return `${favoriteColor}field`; //bluefield
        case "ave":
            return `${favoriteColor}wood`; //bluewood
        case "lane":
            return `${favoriteColor}brook`; //bluebrook
        case "drive":
            return `${favoriteColor}hill`; //bluehill
        default:
            return `${favoriteColor}stone`; //bluestone
    }
}

// Generate Last Name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1);
    switch (lastLetter) {
        case "a":
            return "Shadow";
        case "e":
            return "Storm";
        case "i":
            return "Blaze";
        case "o":
            return "Thorn";
        case "u":
            return "Frost";
        default:
            return "Moon";
    }
}

//Generate Suffix
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan.`;
}

//Validate Inputs
function validateInputs() {
    const inputs = document.querySelectorAll(
        "#fantasyForm input, #fantasyForm select"
    );
    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill out all fields.");
            return false;
        }
    }
    return true;
}

//generate full name
function genFullName() {
    if (!validateInputs()) return;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const roadType = document.getElementById("roadType").value;
    const favoriteColor = document.getElementById("favoriteColor").value.trim();
    const favoriteAnimal = document
        .getElementById("favoriteAnimal")
        .value.trim();

    const prefix = genPrefix(firstName);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(roadType, favoriteColor);
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedLastName = capitalize(newLastName);

    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;
    console.log(fullName);

    document.getElementById("result").textContent = fullName;
}

//Capitalization
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}