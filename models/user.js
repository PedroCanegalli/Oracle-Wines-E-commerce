const fs = require ('fs');

const user = {
    filename: "./data/usersDataBase.json",
    getData: function (){
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    generateID: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    findAll: function(){
        return this.getData();
    },

    findByPK: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateID(),
            ...userData,
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
        return true;
    }

}

//console.log(user.getData());

module.exports = user;