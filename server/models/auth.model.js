const bcrypt = require('bcrypt')

function logIn(request,response) {
    bcrypt.compare(request.body.password, process.env.admPWD, (err, result) => {
        if (err) {
            return response.send({ success: false, msg: "Error @ bcrypt compare" }
            )
        }
        if (!result) {
            return response.send({ success: false, msg: "Username or password invalid." })
        }
        console.log("Admin login")
        return response.send({ success: true, msg: "Its Mike" })
    })
}

module.exports.login = logIn