module.exports = (connection, sequelize) => {
  return connection.define("prdouctDetails", {
    id: {
      type: sequelize.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: sequelize.UUIDV4
    },
    product_name: {
      type: sequelize.TEXT,
      allowNull: false
    },
    product_details: {
      type: sequelize.ARRAY(sequelize.TEXT),
      allowNull: false
    },
    note: {
      type: sequelize.TEXT,
      allowNull: false
    },
    delivery_information: {
      type: sequelize.ARRAY(sequelize.TEXT),
      allowNull: true
    },
    care_instructions: {
      type: sequelize.ARRAY(sequelize.TEXT),
      allowNull: true
    },
    price: {
      type: sequelize.DOUBLE(11),
      allowNull: false
    },
    product_image: {
      type: sequelize.ARRAY(sequelize.TEXT),
      allowNull: false
    }
  });
};
