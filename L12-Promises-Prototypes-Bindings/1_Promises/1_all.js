function getArray1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("This is not fulfilled");
        }, 1000);
    });
}

function getArray2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([2, 4, 6, 8, 10, 111])
        }, 3000);
    });
}

Promise.all([getArray1(), getArray2()]).then((data) => {
    let arr1 = data[0];
    let arr2 = data[1];

    console.log(arr1)
    console.log(arr2)
    // spread operator ki help se we can create another array
    let newArr = [...arr1, ...arr2];
    console.log(newArr);

    // Sort this array
    // newArr.sort(); // by default this will lexicographical sort
    newArr.sort((a, b) => {
        return a - b;
    })
    console.log(newArr);
}).catch(err => {
    console.log(err);
})