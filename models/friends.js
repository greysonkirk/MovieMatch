
module.exports = function(sequelize, DataTypes) {
    const Friends = sequelize.define('Friends', {         
        userId: {
            type: DataTypes.INTEGER
           
        },
        partnerId: {
            type: DataTypes.INTEGER
           
        },
        friendUserName: {
            type: DataTypes.STRING
           
        }
    })
 
    return Friends
}