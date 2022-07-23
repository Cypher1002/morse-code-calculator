const crypt = new Map([['a', '._'],
['b', '_...'],
['c', '_._.'],
['d', '_..'],
['e', '.'],
['f', '.._.'],
['g', '__.'],
['h', '....'],
['i', '..'],
['j', '.___'],
['k', '_._'],
['l', '._..'],
['m', '__'],
['n', '_.'],
['o', '___'],
['p', '.__.'],
['q', '__._'],
['r', '._.'],
['s', '...'],
['t', '_'],
['u', '.._'],
['v', '..._'],
['w', '.__'],
['x', '_.._'],
['y', '_.__'],
['z', '__..'],
[' ', '/']
]);


const reversed = new Map([
[ '._', 'a'],
['_...', 'b'],
['_._.', 'c'],
['_..', 'd'],
['.', 'e'],
['.._.', 'f'],
['__.', 'g'],
['....', 'h'],
['..', 'i'],
['.___', 'j'],
['_._', 'k'],
['._..', 'l'],
['__', 'm'],
['_.', 'n'],
['___', 'o'],
['.__.', 'p'],
['__._', 'q'],
['._.', 'r'],
['...', 's'],
['_', 't'],
['.._', 'u'],
['..._', 'v'],
['.__', 'w'],
['_.._', 'x'],
['_.__', 'y'],
['__..', 'z']
]);


///translate word from english to morse code 
function translateword(word){
firstletter = ""
 for(let i=0;i<word.length-1;i++){
     firstletter += crypt.get(word[i].toLowerCase())
     firstletter += " "
 }
 firstletter += crypt.get(word[word.length-1])
 return firstletter
}

function encryptWord(){
    word = document.getElementById("inputword").value
    document.getElementById("translateword").value = translateword(word)

}

function translateCode(code){
    translation=""
    splitcode = code.split(" ")
    for(let i =0 ;i<splitcode.length;i++){
     translation += reversed.get(splitcode[i])
    }
    return translation  
}
//makes the english word appear

function encryptCode(){
    word = document.getElementById("inputCode").value
    document.getElementById("translateCode").value = translateCode(word)

}
