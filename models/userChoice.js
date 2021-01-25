// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const UserChoice = sequelize.define('UserChoice', {
            // The email cannot be null, and must be a proper email before creation
            userId: {
                type: DataTypes.INTEGER
            },
            // The password cannot be null
            partnerId: {
                type: DataTypes.INTEGER

            },
            movieId: {
                type: DataTypes.INTEGER

            },
            movieImg: {
                type: DataTypes.STRING

            },
            movieName: {
                type: DataTypes.STRING
            },
            movieDesc: {
                type: DataTypes.STRING
            },
            streamService: {
                type: DataTypes.STRING
            }

        })
    return UserChoice
}