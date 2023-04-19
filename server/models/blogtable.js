const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    BlogTable : sequelize.define('blogtable', {
        blogtableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        title2: DataTypes.STRING,
      date: DataTypes.STRING,
        img_1_url: DataTypes.STRING,
        img_2_url: DataTypes.STRING,
        img_3_url: DataTypes.STRING,
        img_4_url: DataTypes.STRING,
        img_5_url: DataTypes.STRING,
        img_6_url: DataTypes.STRING,
        img_7_url: DataTypes.STRING,
        img_8_url: DataTypes.STRING,
        img_9_url: DataTypes.STRING,
        img_10_url: DataTypes.STRING,
        img_1_captions: DataTypes.STRING,
        img_2_captions: DataTypes.STRING,
        img_3_captions: DataTypes.STRING,
        img_4_captions: DataTypes.STRING,
        img_5_captions: DataTypes.STRING,
        img_6_captions: DataTypes.STRING,
        img_7_captions: DataTypes.STRING,
        img_8_captions: DataTypes.STRING,
        img_9_captions: DataTypes.STRING,
        img_10_captions: DataTypes.STRING,
        link: DataTypes.STRING,
        link2: DataTypes.STRING,
        icon: DataTypes.STRING,
        icon2: DataTypes.STRING,
        icon3: DataTypes.STRING,
        intro: DataTypes.TEXT,
        body_1: DataTypes.TEXT,
        body_2: DataTypes.TEXT,
        body_3: DataTypes.TEXT,
        body_4: DataTypes.TEXT,
        conclusion: DataTypes.STRING,
        span_green: DataTypes.STRING,
        span_yellow: DataTypes.STRING,
        span_brown: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })
}
