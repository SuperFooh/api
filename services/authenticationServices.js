const bcrypt = require('bcrypt')
const { raw } = require('express')

const encryptPassword = (rawPassWord, cb) => {
    //averiguar que hace el segundo parametro
    bcrypt.hash(rawPassWord, 10, (err, hash) => {
        
            
    })    
}