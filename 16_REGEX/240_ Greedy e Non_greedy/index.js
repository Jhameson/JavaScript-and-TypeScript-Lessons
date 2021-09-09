const { html } = require('../base');

// . tudo exeto quebra de linha
const exp01 = /<.+> .+ <\/.+>/gi //com greedy
const exp02 = /<.+?> .+? <\/.+?>/gi //non greedy

console.log(html.match(exp01)); //com greedy

console.log(html.match(exp02)); //non-greedy

let alf;
for (  i = 9, alf = ''; ++i < 36;){
   alf += i.toString(36)
}
console.log(alf.toUpperCase())