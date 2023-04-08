"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["kms", "ttm", "serius"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id, psword = req.body.psword;
        console.log(id, psword);

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
        });
    },
};

module.exports = {
    output,
    process,
};