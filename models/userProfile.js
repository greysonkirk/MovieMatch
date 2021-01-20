// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const UserProfile = sequelize.define('UserProfile', {
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
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
        // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    return UserProfile
}