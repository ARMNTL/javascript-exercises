const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        let age;
        let oldestAge;

        if (!person.yearOfDeath) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (!oldest.yearOfDeath) {
            oldestAge = currentYear - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (age > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
