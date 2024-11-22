//const { Console } = require('console');
//const fs = require('fs');

//fs.readFile('./docs/blog1.txt', (err, data) => {
//    if (err) {
//        console.log(err);
//    }
//       console.log(data);
//});
//  console.log('last line');



//FileSystem.writefile('./docs/blog1.txt', 'Hello, World', () => {
//    console.log ('File was written')
//})

//directories 





 if (!FileSystem.existsSync ('./assets')){
    FileSystem.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
    } else {
    FileSystem.rmdir('.assets',(err)=>{
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}
//deleting files
if (FileSystem.existsSync('./docs/delete.txt')){
    FileSystem.unlink('./docs/delete.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('file deleted');
    })
}