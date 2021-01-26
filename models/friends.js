
module.exports = function(sequelize, DataTypes) {
    const Friends = sequelize.define('Friends', {         
        userId: {
            type: DataTypes.INTEGER
           
        },
        partnerId: {
            type: DataTypes.INTEGER
           
        }
    })

    Friends.associate = function(models) {
            Friends.belongsTo(models.User, {
                onDelete: 'CASCADE',
                foreignKey: {
                    allowNull: false
                }
            })
        }
    return Friends
}