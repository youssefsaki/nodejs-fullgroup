//* 2. CORE MODULES : 
//? fs (File System) for reading/writing files : 

let fs = require('fs');
let path = require('path');
let os = require('os');

console.log(path)

// Reading Files 
fs.readFile('./files/data.txt', (err, data) => {
    if(err) console.log(err);

    console.log(data.toString());
});

// Writing in a file : 
fs.writeFile('./files/data2.txt', 'Welcome To Node js', () => {
    console.log('yes the file is written successfully')
});

// Directories : 
if(!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if(err) console.log(err);
        console.log('Directory is Created');
    })
}else {
    fs.rmdir('./docs', (err) => {
        if(err) console.log(err);
        console.log('Directory is Deleted');
    })
}

//* To Delete A File we use fs.unlink();

if(fs.existsSync('./files/data3.txt')) {
    fs.unlink('./files/data3.txt', (err) => {
        if(err) console.log(err);

        console.log('File Deleted Successfully')
    })
}

//os : 
console.log(os.platform(), os.hostname(), os.userInfo());