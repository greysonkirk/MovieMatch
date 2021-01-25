
module.exports = function(sequelize, DataTypes) {
    const UserProfile = sequelize.define('UserProfile', {
   
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 15]
            }
        },
        partnerId: {
            type: DataTypes.INTEGER
           
        }
    })

    UserProfile.associate = function(models) {
            UserProfile.belongsTo(models.User, {
                onDelete: 'CASCADE',
                foreignKey: {
                    allowNull: false
                }
            })
        }
    return UserProfile
}