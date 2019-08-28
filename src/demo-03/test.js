function create(what) {
    return what;
}
create({
    age: 18,
    JJSize: 'big',
    name: 'jack',
    JJLength: 20
});
function identity(arg) {
    return arg;
}
var muIdentity = identity;
identity([1]);
function testLength(arg) {
    return arg.length;
}
var arr;
arr = [1, 2, 3];
testLength(arr);
