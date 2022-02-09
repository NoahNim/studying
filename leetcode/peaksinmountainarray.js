//return the index in an array where the mountain peaks
// makke a variable called peak
// loop through the array
// check if arr[i] > arr[i+1], greater than arr[i-1];
// check if it's also greater than the current peak
// after loop ends, return the peak

var peakIndexInMountainArray = function(arr) {
    let peak = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[peak]) {
            peak = i;
        }
        if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) {
            peak = i;
        }
    }
    return peak;
};