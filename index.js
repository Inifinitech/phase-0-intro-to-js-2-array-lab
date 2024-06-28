const cats = ["Milo", "Otis", "Garfield"];
// function to add element to the last position
function destructivelyAppendCat(name) {
    return cats.push(name);
}
// function to add element to the first position
function  destructivelyPrependCat(name) {
    return cats.unshift(name);
}
//function to remove the last element 
function  destructivelyRemoveLastCat() {
    return cats.pop();
}
// fucntion to remove the first element 
function  destructivelyRemoveFirstCat() {
    return cats.shift();
}
// function to append a cat to cats array
function appendCat(name) {
    return [...cats, name];
}
// function to prepend a cat to cats array
function prependCat(name) {
    return [name, ...cats];
}
// function to remove the last cat 
function removeLastCat() {
    return cats.slice(0, - 1);
}
// function to remove the first cat
function removeFirstCat() {
    return cats.slice(1);
}