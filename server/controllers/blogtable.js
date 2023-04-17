require("dotenv").config();
const {BlogTable} = require('../models/blogtable')



module.exports = {
    getBlogTable: async (req, res) => {
        try {
            const blogtable = await BlogTable.findAll({             
        limit: 50,
        order: [
            ["blogtableid", "ASC"]
           ],                      
            })
            res.status(200).send(blogtable)
        } catch (error) {
            console.log('ERROR IN getBlogTable')
            console.log(error)
            res.sendStatus(400)
        }
    }
}
