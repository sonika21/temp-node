//const fs = require('fs');
const {readFile, writeFile} = require('fs'); 
//destructure both of them to get asynchronous methods pf Fs module
console.log('start');
//callback- run when we are done with whatever functionality we are doing\
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second= result;
        writeFile('./content/result-async.txt',`Here is the result ${first},${second}`, {flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');


