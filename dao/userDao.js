const mysql = require('mysql')
const $conf = require('../config/conf')
const $sql = require('./userSqlMapper')

/**
 * 创建连接池
 */
const pool = mysql.createPool($conf.mysql)

/**
 * 返回json方法的简单封装
 */
const jsonWrite = function (res,req) {
    if (typeof res === 'undefined') {
        res.json({
            code: '500',
            data: null,
            msg:'操作失败'
        })
    } else {
        res.json(req)
    }
}

module.exports = {
    loginIn(req,res,next){
        const params = req.body
        pool.getConnection((err,conn) => {
            conn.query($sql.loginIn,[params.username,params.password],(err,result) => {
                if (err) {
                    console.log('登录异常')
                } else {
                    if (result.length === 0) {
                        res.render('login',{
                            title: '登录',
                            result: "用户名或密码错误"
                        })
                    } else {
                        res.redirect('/')
                    }
                }
                conn.release()
            })
        })
    },
    queryAll(req,res,next){
        pool.getConnection((err,conn) => {
            conn.query($sql.queryAll,(err,result) => {
                res.render('list',{
                    title: '用户列表',
                    result: result
                })
                conn.release()
            })
        })
    }
}
