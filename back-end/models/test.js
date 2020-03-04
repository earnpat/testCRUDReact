module.exports = (sequelize, Datatype) => {

    const Test = sequelize.define('test', {
        // id: {
        //     type: Datatype.STRING,
        //     allowNull: false,
        //     primaryKey: true,
        //     unique: true
        // },
        input: {
            type: Datatype.STRING,
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return Test
}