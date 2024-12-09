const { User, Animal, Habitat } = require('./models');
const bcrypt = require('bcrypt');
const sequelize = require('./server');

async function seedDatabase() {
  try {
    // Insertion des utilisateurs
    await User.create({
      name: 'Admin User',
      email: 'admin@zoo.com',
      password: await bcrypt.hash('adminpassword', 10),
      role: 'admin',
    });

    await User.create({
      name: 'Employee User',
      email: 'employee@zoo.com',
      password: await bcrypt.hash('employeepassword', 10),
      role: 'employee',
    });

    await User.create({
      name: 'Veterinarian User',
      email: 'vet@zoo.com',
      password: await bcrypt.hash('vetpassword', 10),
      role: 'veterinarian',
    });

    // Insertion des habitats
    const savannah = await Habitat.create({
      name: 'Savannah',
      description:
        'Large grassland with few trees, home to lions and giraffes.',
    });
    const jungle = await Habitat.create({
      name: 'Jungle',
      description:
        'Dense forest with a variety of flora and fauna, home to elephants.',
    });

    // Insertion des animaux
    await Animal.create({
      name: 'Lion',
      species: 'Panthera leo',
      habitatId: savannah.id,
    });
    await Animal.create({
      name: 'Elephant',
      species: 'Loxodonta africana',
      habitatId: jungle.id,
    });
    await Animal.create({
      name: 'Giraffe',
      species: 'Giraffa camelopardalis',
      habitatId: savannah.id,
    });

    console.log('Données insérées avec succès!');
  } catch (error) {
    console.error("Erreur lors de l'insertion des données :", error);
  } finally {
    process.exit();
  }
}

seedDatabase();
