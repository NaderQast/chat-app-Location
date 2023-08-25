const users = []


const addUser = ({id,username,room}) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(! username || !room){
        return{
            error:'username and room are required !'
        }
    }
    const exixtingUser = users.find((user)=> { 
        return user.room === room && user.username === username
    })
if(exixtingUser){
    return{
        error: 'Username is in use'
    }
}
const user = {id, username ,room}
users.push(user)
return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id == id)

    if(index !== -1){
        return users.splice(index,1)[0]
    }

}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room === room)
}

addUser({
    id:44,
    username:'HAM',
    room:'f1'
})

module.exports = {addUser,getUser,removeUser,getUsersInRoom}
