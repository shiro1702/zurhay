
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
// var dateYYYYMM = '2021-06';
// console.log(dateYYYYMM);
var data = {};

const { readdirSync } = require('fs')

let finalPath = [];

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const month = getDirectories('./static/month/')

finalPath = month.map(item => '/'+item);


month.forEach(item=> {
    files.readFiles(`./static/month/${item}/`, function(filename, content) {
        var name = filename.split('.');
        name.pop();
        name = name.join('.')
        var content = JSON.parse(content);
        delete content.info;
        data[name] = content;
        var shortName = name.split('-')[name.split('-').length - 1]
        finalPath.push(`/${item}/${shortName}`)
    }, function(err) {
        throw err;
    },
    function () {
        fs.writeFileSync(`./static/month/${item}.json`, JSON.stringify(data))
        console.log('finalPath', finalPath);
        fs.writeFileSync(`./apiGen/routesGen.js`, `export const routesGen = [${finalPath.map(item => '\''+item+'\'')}]` )
    }
    );
})


// setTimeout(() => {
//     console.log('data', data);
// }, 1000);
// const fs = require('fs');

// let rawdata = fs.readFileSync(`./static/month/${getDate.getYYYYMM()}.json`);
// let month = JSON.parse(rawdata);
// // console.log(month);
// Object.entries(month).forEach(([key, value]) => console.log(`${key}: ${value.haircut.text}`)); // "foo: bar", "baz: 42"

