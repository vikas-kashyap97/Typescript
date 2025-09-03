const favHobbies = (hobby: string | string[]) => {
    // return hobby.map((item) => item); 
    if (typeof hobby === 'object') {
        return hobby.map((item) => item);
    } else {
        console.log(hobby);
        
    }
    
};

console.log(favHobbies(['Sports', 'Cooking'])); 
