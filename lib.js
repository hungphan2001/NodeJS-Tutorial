function message(){
    return 'Hello Nodejs';
}

// const message1 =() => 'Hello NodeJS1';

// module.exports = {
//     message:message,//message
//     message1:message1,
// }

// module.exports= message;

module.exports =()=> {
    return 'Hello Nodejs';
}

// export default {message,message1}