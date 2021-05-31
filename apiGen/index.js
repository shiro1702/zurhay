
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
var fs = require('fs');

var getDate = require('./getDate.js');
var files = require('./files.js');

// console.log('process.argv', process.argv);

// console.log('$npm_config_', npm_config_name);
// var dateYYYYMM = getDate.getYYYYMM();
// var dateYYYYMM = getDate.getYYYYMM(0, '2021-06-01');
var dateYYYYMM = '2021-05';
// console.log(dateYYYYMM);
var data = {};
files.readFiles(`./static/month/${dateYYYYMM}/`, function(filename, content) {
    var name = filename.split('.');
    name.pop();
    name = name.join('.')
    var content = JSON.parse(content);
    delete content.info;
    data[name] = content;
}, function(err) {
    throw err;
},
function () {
    fs.writeFileSync(`./static/month/${dateYYYYMM}.json`, JSON.stringify(data))
}
);
// setTimeout(() => {
//     console.log('data', data);
// }, 1000);
// const fs = require('fs');

// let rawdata = fs.readFileSync(`./static/month/${getDate.getYYYYMM()}.json`);
// let month = JSON.parse(rawdata);
// // console.log(month);
// Object.entries(month).forEach(([key, value]) => console.log(`${key}: ${value.haircut.text}`)); // "foo: bar", "baz: 42"

