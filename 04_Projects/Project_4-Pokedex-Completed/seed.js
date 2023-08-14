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

    const squirtle = await Pokemon.create({
      name: "Squirtle",
      type: "Water",
      trainer: "Ash",
      date: new Date(),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    });

    //create some trainers

    const ash = await Trainer.create({
      firstName: "Ash",
      lastName: "Ketchum",
      team: "Team Rocket",
      image: "https://static.wikia.nocookie.net/sonicpokemon/images/8/8c/Ashanime.png/revision/latest/scale-to-width-down/220?cb=20200811025240",
    });

    const red = await Trainer.create({
      firstName: "Red",
      lastName: "Unknown",
      team: "Leaf Garden",
      image: "https://static.wikia.nocookie.net/pokemon/images/5/57/Red_FireRed_and_LeafGreen.png/revision/latest?cb=20220702182643"

    });

    const serena = await Trainer.create({
      firstName: "Serena",
      lastName: "Unknown",
      team: "Pokemon X and Y",
      image: "https://archives.bulbagarden.net/media/upload/thumb/e/e1/XY_Serena.png/200px-XY_Serena.png"
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
