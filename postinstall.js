#!/usr/bin/env node

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
    mapping = [...mapping,...require(path.join(root,"wavy-path.config.json")).map(i => {
        i.original = path.resolve(path.join(root, i.original))
        return i
    })]
}
for(let map of mapping){
    var link = root+"/node_modules/~"+map.link
    try {
        path.resolve(fs.realpathSync(link));
    } catch (e) {
        fs.symlinkSync(map.original, link, 'junction');
        console.log("Mapping", map.original, "⇒", link)
        // process.exit(0);
    }
}
