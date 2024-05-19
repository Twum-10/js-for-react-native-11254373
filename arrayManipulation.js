 function processArray(nums){
  return nums.map(nums =>{
     if (nums % 2 === 0){
       return nums * nums;
     }else{
       return nums * 3;
     }
  });
}

function formatArrayStrings(strings, nums) {
  const processedNums = processArray(nums);
  if (strings.length !== processedNums.length) {
    throw new Error("The length of both arrays must be the same.");
  }
  return strings.map((str, index) => {
    const num = processedNums[index];
    if (num % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
