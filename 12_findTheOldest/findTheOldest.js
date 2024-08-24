const findTheOldest = function(people) {
    let oldestAge = 0
    let oldestPerson = {}

    for (let person of people) {
        let age
        if (!person.yearOfDeath) {
            year = new Date().getFullYear()
            age = year - person.yearOfBirth
        } else {
            age = person.yearOfDeath - person.yearOfBirth
        }
        if (age > oldestAge) {
            oldestAge = age
            oldestPerson = person
        }
    }

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
