const fs = require('fs');
const revisionHash = require('rev-hash');

const resConf = JSON.parse(fs.readFileSync('./src/assets/res.json'));
resConf.resources.forEach(res => {
    const url = res.url.replace(/\?.+/, '');
    const hash = revisionHash(fs.readFileSync(`./src/assets/${url}`));
    res.url = url + '?' + hash;
});

fs.writeFileSync('./src/assets/res.json', JSON.stringify(resConf, null, 4));

console.log('Resources URL add hash success');