 function processArray(nums){
  return nums.map(nums =>{
     if (nums % 2 === 0){
       return nums * nums;
     }else{
       return nums * 3;
     }
  });
}
