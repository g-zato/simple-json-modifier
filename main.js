const fs = require('fs')
const fileName = 'file' //CHANGE FILE TO READ HERE
const json = require(`./${fileName}.json`)

let newValue = []

json.map((item) => {
    newValue.push({ "label": item.label,"value": item.label })
})

fs.writeFile(`new_${fileName}.json`, JSON.stringify(newValue), function writeJSON(err) {
    if (err) return console.log(err);
    console.log('writing to new_' + fileName + '.json');
 })
