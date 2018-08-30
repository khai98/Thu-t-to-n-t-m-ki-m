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

this.seqSearch = function (arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
};

this.insertionSort = function () {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
        document.write(this.toString());
    }

};

this.count = function (arr, dataStore) {
    var count = 0;
    var position = seqSearch(arr, dataStore);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == dataStore) {
                ++count;
            }
            else {
                break;
            }
        }

        for (var i = position + 1; i < arr.length; ++i) {
            if (arr[i] == dataStore) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    return count;
};


var dataStore = [];
for (var i = 0; i < 100; ++i) {
    dataStore[i] = Math.floor(Math.random() * 101);
    document.write(dataStore[i])
}


document.write("<br/>");

var val = parseInt(prompt("Enter a value to count for : "));
document.write("Enter a value to count for : " + val);
document.write("</br>");

var retVal = count(dataStore, val);
document.write(" Found " + val + " at  position  " +  retVal + ".");
