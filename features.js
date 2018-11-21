
// import AsyncLib from './async-feature';
// async function start() {
//     var citiesCount = await AsyncLib.getList();
//     console.log("Data :::", citiesCount);
// }
// start();
// console.log('Get Name: ', AsyncLib.getData());



import { getData, getList } from './async-feature';
console.log('Get Name: ', getData());

async function start() {
    var citiesCount = await getList();
    console.log("Data :::", citiesCount);
}
start();


