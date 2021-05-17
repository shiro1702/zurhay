
// const GenerateJsonPlugin = require('generate-json-webpack-plugin');
// module.exports = {
//     // ...
//     plugins: [
//       // ...
//         new GenerateJsonPlugin('my-file.json', {
//             foo: 'bar',
//         }),
//     ],
//     // ...
// };

'use strict';
console.log('testing')

const fs = require('fs');

let rawdata = fs.readFileSync('./static/month/2021-03.json');
let month = JSON.parse(rawdata);
// console.log(month);
Object.entries(month).forEach(([key, value]) => console.log(`${key}: ${value.haircut.text}`)); // "foo: bar", "baz: 42"

