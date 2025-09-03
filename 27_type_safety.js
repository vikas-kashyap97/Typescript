var favHobbies = function (hobby) {
    // return hobby.map((item) => item); 
    if (typeof hobby === 'object') {
        return hobby.map(function (item) { return item; });
    }
    else {
        console.log(hobby);
    }
};
console.log(favHobbies(['Sports', 'Cooking']));
