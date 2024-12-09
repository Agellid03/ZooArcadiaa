const User = require('./Users');
const Animal = require('./Animal');
const Habitat = require('./Habitat');
const Service = require('.Service');
const Report = require('./Report');

User.hasMany(Animal, { foreignKey: 'userId' });
Animal.belongsTo(Habitat, { foreignKey: 'habitatId' });
Animal.belongsTo(User, { foreignKey: 'userId' });
Habitat.hasMany(Animal, { foreignKey: 'habitatId' });
Service.belongsToMany(Animal, { through: 'AnimalService' });
Service.belongsTo(User, { foreignKey: 'userId' });
Report.belongsTo(User, { foreignKey: 'vetId' });
Report.belongsTo(Animal, { foreignKey: 'animalId' });

module.exports = {
  User,
  Animal,
  Habitat,
  Service,
  Report,
};
