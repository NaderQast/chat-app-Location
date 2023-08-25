const generateMessage = (username,text) => {
    return{
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username,ur) => {
    return{
         username,
         url,
         createdAt : new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage 
}