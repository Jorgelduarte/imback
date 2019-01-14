// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.

//nums = [0,1,2,2,3,0,4,2];

function removeElement (nums) {
    var newArray = [];
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i];
        for (var j = 0; j < newArray.length; j++) {
            if (first !== newArray[j]){
                
                newArray.push(first)
            }
            
            
        } 
        
    }
    console.log(newArray)
};
removeElement([5,1,2,2])