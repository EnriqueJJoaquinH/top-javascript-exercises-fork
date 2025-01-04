const findTheOldest = function(people) {
    let agePeople = people.map(pearson => {
        let lastYear = 0;
        if (pearson.yearOfDeath === undefined){
            lastYear = new Date().getFullYear();
        } else {
            lastYear = pearson.yearOfDeath;
        }

        return { name: pearson.name, age: lastYear - pearson.yearOfBirth }
    });
    agePeople.sort((a, b) => b.age - a.age);

    return people.find(pearson => pearson.name === agePeople[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
