let user = {
    loginIn: "SELECT id AS uid,user_name AS username,nick_name AS nickname,qq,wx,phone FROM user WHERE user_name = ? AND PASSWORD = ?",
    queryAll: "SELECT * FROM user"
}

module.exports = user
