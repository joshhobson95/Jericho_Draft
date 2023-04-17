require('dotenv').config();
const {sequelize} = require('./util/database')
const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {BlogTable} = require('./models/blogtable')




const express = require('express')
const cors = require('cors')



const {register, login} = require('./controllers/auth')
const {getBlogTable} = require('./controllers/blogtable')
const {isAuthenticated} = require('./middleware/isAuthenticated')


const app = express();
app.use(express.json())
app.use(cors())



BlogTable.hasOne(User)
User.belongsTo(BlogTable)



app.post('/login', login)
app.post('/register', register)


app.get('/blog', getBlogTable)







sequelize.sync()
.then(() => {
app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))})
.catch(err => console.log(err))