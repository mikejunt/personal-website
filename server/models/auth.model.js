const bcrypt = require('bcrypt')

function logIn(response, request) {
    // temporary
    bcrypt.hash(request.password, 10, (err, result) => {console.log(result)})
    // real
    bcrypt.compare(request.password, process.env.PWD, (err, result) => {
        if (err) {
            return response.send({ success: false, msg: "Error @ bcrypt compare" }
            )
        }
        if (!result) {
            return response.send({ success: false, msg: "Username or password invalid." })
        }
        return response.send({ success: true, msg: "", favteam: res.rows[0].favteam })
    })
}

module.exports.login = logIn