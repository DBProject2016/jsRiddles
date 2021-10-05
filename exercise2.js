//Inventory Update Challenge
function AppearsIn(item,array1)
{
    for(var i=0; i<array1.length; i++)
    {
        if(item==array1[i][1])
        {
            return i;
        }
    }
    return -1;
}

function InsertInOrder(item,array1)
{
    //deleting spaces for all items in array 1
    var array2=[];
    for(var j=0; j<array1.length; j++)
    {
        array2=[...array2, (array1[j][1]).split(' ').join('')];
    }
    //console.log("array2 is: ",array2);
    //sorting
    var temp=[];
    for(var i=0; i<array1.length; i++)
    {
        if(i+1<array1.length)
        {
            if(item[1]>=array2[i] && item[1]<=array2[i+1])
            {
                array1.splice(i+1,0,item);
                console.log("array1 is: ",array1);
            }
            if(i==0 && item[1]<array2[i])
            {
                //array1.splice(1,0,item);

                temp.push(item);
                for(var k=0; k<array1.length; k++)
                {
                    temp.push(array1[k]);
                    //console.log("temp is: ",temp);
                }

                array1=temp;
                //console.log("item1 is: ",item[1]," array 1 is: ",array1);
            }
        }

        if(i==array1.length-1 && item[1]>array2[i])
            array1.push(item);

    }

    if(array1.length==0)
        array1.push(item);
    //console.log("end of for, array 1 is: ",array1);
    return array1;
}
function updateInventory(arr1, arr2) {
    for(var i=0; i<arr2.length; i++)
    {
        var index=AppearsIn(arr2[i][1],arr1);
        if(index>=0)
        {
            //updating only the amount
            arr1[index][0]=arr1[index][0]+arr2[i][0];
        }
        else {
            //adding item according to abc order
            arr1=InsertInOrder(arr2[i],arr1);
        }
    }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//console.log(updateInventory(curInv, newInv));
//console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"],[67,"Bowling ball"]]));
//console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
