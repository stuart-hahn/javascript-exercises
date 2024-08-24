const findTheOldest = function(people) {
    let oldestPerson = people.reduce((currentOldest, currentPerson) => {
        const currentYear = new Date().getFullYear()
        const currentPersonAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth
        const oldestPersonAge = (currentOldest.yearOfDeath || currentYear) - currentOldest.yearOfBirth

        return currentPersonAge > oldestPersonAge ? currentPerson : currentOldest
    })

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
