require('dotenv').config()
const { json } = require('express')
const express = require('express')
const auth = require('./middleware/auth')
const app = express()
const pool = require('./config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')



app.use(express.json({
    limit: "50mb"
}))

app.get('/', (req, res) => {
    return res.status(200).send({'message': 'Selamat datang di program saya mohon maaf atas kekurangannya :D'});
  });
/*
app.post('/api/v1/user', async(req, res) => {
    try{
        const {firstName, lastName, email, password} = req.body

        if(!(email && password && firstName && lastName)) {
            res.status(400).json({
                status: false,
                message: 'All input is required'
            })
        }

        var encryptedUserPassword = await bcrypt.hash(password, 10)

        pool.query(`SELECT * FROM customer WHERE email = '${email}'`, (error, result) => {
            if(error) {
                res.status(400).json({
                    status: false,
                    message: 'User already registered'
                })
            }

            var isExist = result.rowCount
            console.log(isExist, '<<<<')
            
            if(isExist == 1) {
                res.status(400).json({
                    status: false,
                    message: 'User already registered'
                })
            } else {

                pool.query('INSERT INTO customer (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, encryptedUserPassword], (error) => {
                if(error){
                    res.status(400).json({
                        status: false,
                        message: 'Failed register user'
                    })
                }
                })

                res.status(200).json({
                    status: true,
                    message: 'Success'
                })
            }
        })

    }catch (err) {
        res.status(400).json({
            status: false,
            message: err
        })
    }
})

app.post('/api/v1/users/login', async(req,res) => {
    try{
        const {email, password} = req.body

        if(!(email && password)) {
            res.status(400).json({
                status: false,
                message: 'All input is required'
            })
        }
        
        pool.query(`SELECT * FROM customer WHERE email = '${email}'`, (error, result) => {
            if(error) {
                res.status(400).json({
                    status: false,
                    message: 'Email not registerd'
                })
            }
            var isExist = result.rowCount
            console.log(isExist, '<<<<')
            
            if(isExist == 0) {
                res.status(400).json({
                    status: false,
                    message: 'Email not registerd'
                })
            } else{

                
            var passUser = result.rows[0].password
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                passUser
              );
        
              if (!passwordIsValid) {
                return res.status(401).send({
                    status: false,
                  message: "Invalid Password!"
                });
              }

            if ((bcrypt.compare(password, passUser))){
                const token = jwt.sign(
                    {
                        id: result.rows[0].id,
                        email
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "1h"
                    }
                )
    
                result.rows[0].token = token

                pool.query(`UPDATE customer SET token = $1 WHERE email ='${email}'`,[token], (error) => {
                    if(error){
                        res.status(400).json({
                            status: false,
                            message: 'Failed register user'
                        })
                    }
                    })
    
                return res.status(200).json(result.rows[0])
            }else{
                return res.status(400).send('Invalid credentials!')
            }

        }

            
        })

    }catch (err) {
        console.log(err)
    }
})

app.put('/api/v1/update', auth, async(req, res) => {
    try{
        const {firstName, lastName, email} = req.body
        const token = req.headers['x-access-token'] 

        if(!(email && firstName && lastName)) {
            res.status(400).json({
                status: false,
                message: 'All input is required'
            })
        }
             pool.query(`UPDATE customer SET first_name = $1, last_name = $2, email = $3 WHERE token ='${token}'`, [firstName, lastName, email], (error) => {
                if(error){
                    res.status(400).json({
                        status: false,
                        message: 'Failed change data'
                    })
                } else{
                    res.status(200).json({
                        status: true,
                        message: 'Update Success'
                    })
                }
               
                })

            }catch (err) {
        res.status(400).json({
            status: false,
            message: err
        })
    }
})

app.get('/api/v1/users/me', auth, async(req, res) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] 
    pool.query(`select first_name, last_name, email from customer where token ='${token}'`,(error, result) => {
        if(error) {
            res.status(400).json({
                status: false,
                message: 'Show Failed'
            })
        }
        return  res.status(200).send(result.rows);
    })
})

app.get('/api/v1/users', auth, async(req, res) => {

    pool.query('select first_name, last_name, email from customer',(error, result) => {
        if(error) {
            res.status(400).json({
                status: false,
                message: 'Show Failed'
            })
        }
        return  res.status(200).send(result.rows);
    })
})


*/

app.listen(process.env.PORT, () => {
    console.log("Listening on PORT "+ process.env.PORT);
})


