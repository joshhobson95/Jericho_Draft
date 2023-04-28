require("dotenv").config();
const {SalesTable} = require('../models/salestable')



module.exports = {
    getSalesTable: async (req, res) => {
        try {
            const salestable = await SalesTable.findAll({             
        limit: 50,
        order: [
            ["salestableid", "DESC"]
           ],                      
            })
            res.status(200).send(salestable)
        } catch (error) {
            console.log('ERROR IN getSalesTable')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    addNewSalesPost: async (req, res) => {
        try {
          const {
          id,
          name,
          img_url,
          description,
          price,
          discount,
          tagline,
          start_date,
          expiration
          } = req.body;
          await SalesTable.create({
            id,
            name,
            img_url,
            description,
            price,
            discount,
            tagline,
            start_date,
            expiration
          });
          res.sendStatus(200);
        } catch (error) {
          console.log("ERROR IN addSalesPost");
          console.log(error);
          res.sendStatus(400);
        }
      }, 
      deleteSalesPost: async (req, res) => {
        try {
            const {salestableid} = req.params
            await SalesTable.destroy({where: {salestableid: +salestableid}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN DELETE SALES POST')
            console.log(error)
            res.sendStatus(400)
        }
    },
    editSalesPost: async (req, res) => {
      try {
        const { salestableid } = req.params;
        const {
            name,
            img_url,
            description,
            price,
            discount,
            tagline,
            start_date,
            expiration
        } = req.body;
        await SalesTable.update(
          {
            name,
            img_url,
            description,
            price,
            discount,
            tagline,
            start_date,
            expiration
          },
          { where: { salestableid: +salestableid } }
        );
        res.sendStatus(200);
      } catch (error) {
        console.log('ERROR in EDIT SALES POST');
        console.log(error);
        res.sendStatus(400);
      }
    }
  }