const store =  require('./store_chat');


function addChat(users){
    if(!users || !Array.isArray(users)){
     return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };

    return store.add(chat);
}

function listChats(userId){
    return store.list(userId);
}

module.exports = {
    add: addChat,
    list: listChats
}