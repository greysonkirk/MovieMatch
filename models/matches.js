// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Matches = sequelize.define('Matches', {
        // The email cannot be null, and must be a proper email before creation
        userId: {
            type: DataTypes.INTEGER,
  
        },
        partnerId: {
            type: DataTypes.INTEGER,
    
        },
        movieId: {
            type: DataTypes.INTEGER,
        
        },
        movieImg: {
            type: DataTypes.STRING,
            
        },
        movieName: {
            type: DataTypes.STRING,
          
        }
    })

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    return Matches
}