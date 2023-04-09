"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);
        
        if (id) {
            if(id === client.id && psword === client.psword){
                return { success: true };
            }
            return {success: false, msg: "pw error"};
        }
        return {success: false, msg: "id error"};
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(this.body);
            return response;
        } catch(err) {
            return {success: false, msg: err}
        }
    }
}

module.exports = User