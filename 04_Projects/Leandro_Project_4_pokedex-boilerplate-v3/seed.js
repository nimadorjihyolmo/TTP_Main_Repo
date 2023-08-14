const { db } = require("./server/db/");
const {Pokemon,Trainer} = require('./server/db/index');
// const Trainer = require('./server/db/index');

const seed = async () => {
  
    await db.sync({ force: true });

    //create some pokemon
    const pikachu =await Pokemon.create({
      name: "Pikachu",
      type: "Electric",
      trainer: "Ash",
      date: new Date(),
      image:
      "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
    });

    const charizard =await Pokemon.create({
      name: "Charizard",
      type: "Fire/Flying",
      trainer: "Ash",
      date: new Date(),
      image:
      "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
    });

    const mewtwo =await Pokemon.create({
      name: "Mewtwo",
      type: "Psychic",
      trainer: "Red",
      date: new Date(),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    });

    //create some trainers

    const ash = await Trainer.create({
      firstName: "Ash",
      lastName: "Ketchum",
      team: "Team Rocket",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Ash_Ketchum_Journeys.png"
    });

    const red = await Trainer.create({
      firstName: "Red",
      lastName: "Unknown",
      team: "Leaf Garden",
      image: "https://static.wikia.nocookie.net/nintendo/images/a/a8/Leaf.png/revision/latest/scale-to-width-down/209?cb=20180711131056&path-prefix=en"

    });

    const serena = await Trainer.create({
      firstName: "Serena",
      lastName: "Unknown",
      team: "Pokemon X and Y",
      image: "https://static.wikia.nocookie.net/nintendo/images/7/75/Serena_%28Pok%C3%A9mon_X_and_Y%29.png/revision/latest/scale-to-width-down/266?cb=20131102212642&path-prefix=en"
    });

    // magic methods to assign
    await ash.addPokemon([pikachu, charizard]);
    await red.addPokemon([mewtwo]);

    db.close();
    console.log(`
      Seeding successful! Pokedex is ready.
      `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
