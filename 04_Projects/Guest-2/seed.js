const { db, School, Student } = require("./server/db");
const { green, red } = require("chalk");

// require your models here


// DUMMY CAMPUS DATA

const campuses = [
  {
    name: "Hogwarts School of Witchcraft and Wizardry",
    imageURL: "https://i.ibb.co/30JYJkB/hogwarts.webp",
    location: "Hogwarts Castle, Highlands, Scotland, Great Britain",
    description:
      "Hogwarts School of Witchcraft and Wizardry, often shortened to Hogwarts, is the British wizarding school located in the Scottish Highlands. It accepts magical students from Great Britain and Ireland for enrollment. It is a state-owned school, funded by the Ministry of Magic.",
  },
  {
    name: "Beauxbatons Academy of Magic",
    imageURL: "https://i.ibb.co/Xts8Jnw/beauxbatons.webp",
    location: "French Pyrenees, France",
    description:
      "Beauxbatons Academy of Magic (French: Académie de Magie Beauxbâtons) is the French wizarding school located in the Pyrenees mountains of southern France. It is one of the three largest wizarding schools in Europe (the other two being Hogwarts School of Witchcraft and Wizardry and the Durmstrang Institute).",
  },
  {
    name: "Castelobruxo",
    imageURL: "https://i.ibb.co/nrMpMZt/castelobruxo.webp",
    location: "Amazon Rainforest, Brazil, South America",
    description:
      "Castelobruxo is the Brazilian wizarding school. Located amid the Amazon rainforest in northern Brazil, it accepts students from all over South America. It has produced a number of famous ex-students, including one of the world’s most famous potioneers, Libatius Borage.",
  },
  {
    name: "Durmstrang Institute",
    imageURL: "https://i.ibb.co/K66wVWf/durmstrang.webp",
    location: "The far north of Europe",
    description:
      "Durmstrang Institute (Cyrillic: Дурмстранг) is one of the three largest wizarding schools in Europe (the other two being Hogwarts School of Witchcraft and Wizardry and Beauxbatons Academy of Magic). Located in the far north of the continent, the school is willing to accept international students from as far afield as Bulgaria.",
  },
  {
    name: "Ilvermorny School of Witchcraft and Wizardry",
    imageURL: "https://i.ibb.co/7pdhd9S/ilver.webp",
    location:
      "Mount Greylock, Adams, Massachusetts, United States of America, North America[1]",
    description:
      "Ilvermorny School of Witchcraft and Wizardry is the American wizarding school, located on Mount Greylock in Massachusetts. It accepts students from all over North America. Students of this school, as at Hogwarts in Scotland, are sorted into four houses.",
  },
  {
    name: "Mahoutokoro School of Magic",
    imageURL: "https://i.ibb.co/wQ3PyHQ/Mahoutokoro.webp",
    location: "Minami Iwo Jima, Japan",
    description:
      "Mahoutokoro (Japanese: 魔法処マホウトコロ, Mahōtokoro) is the Japanese wizarding school, located on the topmost point of the volcanic island of Minami Iwo Jima. It has the smallest student body of the eleven major wizarding schools.",
  },
  {
    name: "Uagadou School of Magic",
    imageURL: "https://i.ibb.co/xM2vCw4/uao.jpg",
    location: "Mountains of the Moon, Uganda, East Africa",
    description:
      "Uagadou is the Ugandan wizarding school, located in the Mountains of the Moon in western Uganda. It is the largest of the eleven wizarding schools, accepting students from all over Africa.",
  },
  {
    name: "Koldovstoretz",
    imageURL: "https://i.ibb.co/mX0VQ7v/Koldovstoretz.webp",
    location: "Russia",
    description:
      "Koldovstoretz (Russian: колдовсторец) is the Russian wizarding school. It is one of the eleven schools registered with the International Confederation of Wizards. Students from Koldovstoretz play a version of Quidditch where they fly on entire, uprooted trees instead of broomsticks.",
  },
];

// DUMMY STUDENT DATA

const students = [
  {
    firstName: "Harry",
    lastName: "Potter",
    email: "hpotter@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/tPqV51G/harry.webp",
    gpa: 3.5,
    SchoolId: 1,
  },
  {
    firstName: "Ronald",
    lastName: "Weasley",
    email: "rweasley@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/QmnT5fv/ron.jpg",
    gpa: 2.7,
    SchoolId: 1,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hgranger@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/QdVQvYF/hermione-jpg.webp",
    gpa: 4.3,
    SchoolId: 1,
  },
  {
    firstName: "Dean",
    lastName: "Thomas",
    email: "dthomas@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/Z8wnwds/dean.jpg",
    gpa: 3.8,
    SchoolId: 1,
  },
  {
    firstName: "Padma",
    lastName: "Patil",
    email: "papatil@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/5BvhztF/padma.jpg",
    gpa: 3.0,
    SchoolId: 1,
  },
  {
    firstName: "Ginny",
    lastName: "Weasley",
    email: "gweasley@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/yf6nwqj/ginny.jpg",
    gpa: 3.9,
    SchoolId: 1,
  },
  {
    firstName: "Luna",
    lastName: "Lovegood",
    email: "llovegood@hogwarts.co.uk",
    imageURL: "https://i.ibb.co/mTsjh1W/Luna.webp",
    gpa: 3.9,
    SchoolId: 1,
  },
  {
    firstName: "Viktor",
    lastName: "Krum",
    email: "vkrum@durmstrang.eu",
    imageURL: "https://i.ibb.co/c2WNq2D/krum.webp",
    gpa: 2.4,
    SchoolId: 3,
  },
  {
    firstName: "Fluer",
    lastName: "Delacour",
    email: "fleur@beauxbatons.fr",
    imageURL: "https://i.ibxsb.co/c2WNq2D/krum.webp",
    gpa: 3.4,
    SchoolId: 2,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      campuses.map((campus) => {
        return School.create(campus);
      })
    );

    await Promise.all(
      students.map((student) => {
        return Student.create(student);
      })
    );

    console.log(green("WINGARDIUM LEVIOSA! Seeding successful!"));
    db.close();
  } catch (err) {
    console.error(red("Bloody Hell! Something went wrong!"));
    console.error(err);
    db.close();
  }
};

seed();
