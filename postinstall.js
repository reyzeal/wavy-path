var fs = require('fs');
var path = require('path');

var dirname = __dirname.replace(/\\/g, '/');
var root = path.resolve(dirname.slice(0, dirname.lastIndexOf('/node_modules/')));

var mapping = [
    {
        original: root,
        link: ""
    }
]
if(fs.existsSync(path.join(root,"wavy-path.config.json"))){
    mapping = [...mapping,...require(path.join(root,"wavy-path.config.json"))]
}
for(let map of mapping){
    var link = root+"/node_modules/~"+map.link
    try {
        var existingReal = path.resolve(fs.realpathSync(link));
    } catch (e) {
        fs.symlinkSync(map.original, link, 'junction');
        process.exit(0);
    }
    if (existingReal && existingReal !== root) {
        throw new Error(link + ' is already being used')
    }
}
