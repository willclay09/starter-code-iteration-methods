// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)

    for(let i = 0; i < object.length; i++){
        let currentUser = object[i]
        console.log(currentUser)
        let userDiv = document.createElement('div')
        userDiv.className = "user"
        
        for(key in currentUser){
            let propertyDiv = document.createElement('div')
            propertyDiv.className = "property"
            propertyDiv.append(key + ": " + currentUser[key])
            userDiv.append(propertyDiv)
        }
        detailsElement.append(userDiv)
    }
}



const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
//const greenEyes2 = users.filter(function (user) {
    //return user.eyeColor === "green"
//})
printKata(0, greenEyes1)

const activeUsers = users.filter(user => user.isActive === true)

printKata(1, activeUsers)

const email1 = users.map(user => user.email)

printKata(2, email1)

const company1 = users.some(user => user.company === 'OVATION')

printKata(3, company1)

const age1 = users.find(user => user.age > 38)

printKata(4, age1)

const age2 = users
    .filter(user => user.isAtive === true)
    .find(user => user.age > 38)

printKata(5, age2)

const balance1 = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)

printKata(6, balance1)

const age3 = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)

printKata(7, age3)