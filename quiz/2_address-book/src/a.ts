// function fetchItems(): string[] {
//     var items = ['a','b','c'];
//     return items;
// }
// var result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
    var items = ['a','b','c'];
    return new Promise(function(resolve) {
        resolve(items);
    });
}
fetchItems();