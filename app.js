// let arg = process.argv;
// // console.log(arg[2]);
//
// let a = arg[2];
// let b = arg[3];
//
// if (a > b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// const fs = require('fs');
// const path = require('path'); // Отвечает за чтение форматов файлов

// fs.readFile('t1.txt','utf-8',(err,data)=>{
//     console.log(data);
// });
//
// // Синхронное чтение
// let x = fs.readFileSync('t1.txt','utf-8');
// console.log(x);

// Чтение папки
// Название папки и функция обработки данных  Получаем на выходе массив. Перебираем его циклом
// fs.readdir('one',(err,data)=> {
//     console.log(data);
//     data.forEach(file =>{
//         console.log(file);
//         console.log(path.extname(file)) // Показывает расширение файла который мы читали
//         console.log(fs.statSync('one/'+file).size)  // Выводит всю информацию о файле + в конце узнаем чисто размер
//     })

// });
// Узнаем расширения файлов, типы

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead("Access-Control-Allow-Origin:http://alexnoch-blog.ru");
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({newName:"Hello World"}))
}).listen(3000);

