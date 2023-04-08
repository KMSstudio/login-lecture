"user strict"

class UserStorage {
    static #users = {
        id: ["kms", "ttm", "serius"],
        psword: ["1234", "1234", "123456"],
        name: ["강명석", "리미트", "디퍼렌"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;