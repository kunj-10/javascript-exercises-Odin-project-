const findTheOldest = function(people) {
    var ans;
    var max = -1;
    const currentYear = new Date().getFullYear();
    for(var i=0; i<people.length; i++){
        if('yearOfDeath' in people[i]){
            if(max < (people[i].yearOfDeath - people[i].yearOfBirth)){
                max = (people[i].yearOfDeath - people[i].yearOfBirth);
                ans = people[i];
            }
        }else{
            if(max < (currentYear - people[i].yearOfBirth)){
                max = (currentYear - people[i].yearOfBirth);
                ans = people[i];
            }
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
