//Generate Prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return `The Great`;
    } else {
        return `Master`;
    }
}
//Generate First Name
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

//Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor} ridge` //Example: Blueridge
    } else if (roadType === 'street') {
        return `${favoriteColor} son` //Example: Blueson
    } else {
        return `${favoriteColor} stone` //Example: Bluestone
    }
}

//Generate Last Name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a')
    
    
    
    
    
    
    
    
    
    
    
    
    }

//Generate Suffix
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan.`
}

//MAster Name Building Function
function genFullName() {
    //Get the User's Inputs from the HTML Elements
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

    //Run Name Generating Functions & Store them in New Variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)

    //Capitalize Name Variables when Needed
    const capitalizedPrefix = genPrefix(prefix)
    const capitalizedFirstName = genFirstName(newFirstName)
    const capitalizedMiddleName = genMiddleName(middleName)
    const capitalizedLastName = genLastName(newLastNAme)
    //Combine all of the Name Variables in a New Name

    //Display the New Name

}

    //Capitilization Function
    function capitalize (input) {
        return input.charAt (0).toUpperCAse () + input.slice (1).toLowerCase ()
    }