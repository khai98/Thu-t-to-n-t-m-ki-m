
this.seqSearch = function(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
};

this.dispArr = function(arr) {
    for (var i = 0; i < arr.length; ++i) {
        document.write(arr[i] + " " );
        if(i%10==9){
            document.write("\n");
        }
    }
    if(i%10!=0){
        document.write("\n");
    }
};

var nums = [];
for(var i=0; i<100; ++i){
    nums[i] = Math.floor(Math.random() * 101);
}

dispArr(nums);
var number = prompt("Enter a number to search for: ");

var position = seqSearch(nums, number);

if (number > -1) {
    document.write(number + " is in the array at position " + position);
} else {
    document.write(number + " is not in the array.")

};
