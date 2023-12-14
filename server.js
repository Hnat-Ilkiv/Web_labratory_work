const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png

let objectContainer = [
  {
    id: uuidv4(),
    image: "https://i.pinimg.com/736x/85/6b/55/856b55a061ea294cb4b747bfbd2b5de8.jpg",
    name: "Monkey D. Luffy",
    age: 19,
    price: 90,
    description: "Monkey D. Luffy, the protagonist of \"One Piece,\" is a daring and optimistic young pirate. His dream is to become the Pirate King by finding the legendary treasure, One Piece. Luffy possesses the power of the Gum-Gum Fruit, which granted him rubber-like abilities. His unwavering spirit and determination make him a charismatic and influential leader among the Straw Hat Pirates."
  },
  {
    id: uuidv4(),
    image: "https://w0.peakpx.com/wallpaper/254/297/HD-wallpaper-naruto-eyes-naruto-uzumaki-sage-mode-naruto-uzumaki-sage-mode-anime.jpg",
    name: "Naruto Uzumaki",
    age: 19,
    price: 80,
    description: "Naruto Uzumaki, the titular character of \"Naruto,\" is a spirited and determined ninja with a turbulent past. Orphaned and ostracized as a child, Naruto strives to become the Hokage, the leader of his village, to earn the acknowledgment he craves. Endowed with immense chakra and the powerful Nine-Tails Fox spirit within him, Naruto's journey is one of self-discovery, friendship, and overcoming adversity."
  },
  {
    id: uuidv4(),
    image: "https://i.pinimg.com/originals/7e/ce/c4/7ecec434137d1fcbe023db38e06c1260.jpg",
    name: "Eren Yeager",
    age: 19,
    price: 90,
    description: "Eren Yeager undergoes a transformation from a young and determined soldier to a key player in humanity's struggle against the colossal Titans. His character evolves dramatically as he uncovers the mysteries surrounding the Titans and confronts the harsh realities of war. Eren's complex persona and the impact of his decisions shape the narrative of \"Attack on Titan.\""
  },
  {
    id: uuidv4(),
    image: "https://e0.pxfuel.com/wallpapers/476/354/desktop-wallpaper-sasuke-uchiha-old-sasuke.jpg",
    name: "Sasuke Uchiha",
    age: 19,
    price: 70,
    description: "Sasuke Uchiha, a brooding and enigmatic ninja, is driven by a quest for power and a desire for vengeance. Haunted by the tragic fate of his clan, Sasuke's journey takes him on a path of darkness and self-discovery. His complex relationship with Naruto and the choices he makes significantly influence the course of the story in \"Naruto\"."
  },
  {
    id: uuidv4(),
    image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ec5c5a18-ccc3-4a2c-afe4-4b77bbac8b38/width=1200/ec5c5a18-ccc3-4a2c-afe4-4b77bbac8b38.jpeg",
    name: "Mikasa Ackerman",
    age: 19,
    price: 80,
    description: "Mikasa Ackerman is a fiercely loyal and skilled warrior, dedicated to protecting her adoptive brother, Eren Yeager. Her character embodies strength, both physically and emotionally, as she navigates the harsh realities of a world besieged by Titans. Mikasa's unwavering commitment and complex emotions contribute to the depth of \"Attack on Titan\"."
  },
  {
    id: uuidv4(),
    image: "https://femtoarts.in/cdn/shop/products/Light_Yagami_Death_Note.jpg",
    name: "Light Yagami",
    age: 19,
    price: 90,
    description: "Light Yagami, a brilliant and ambitious high school student, becomes the bearer of the Death Note—a supernatural notebook with the power to kill anyone whose name is written in it. As Light embarks on a morally ambiguous quest for justice, his character undergoes a profound transformation, exploring the psychological toll of power and the consequences of playing god."
  },
  {
    id: uuidv4(),
    image: "https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png",
    name: "Gon Freecss",
    age: 14,
    price: 70,
    description: "Gon Freecss is a cheerful and adventurous young hunter with an unyielding determination to find his missing father. His journey in \"Hunter x Hunter\" explores the complexities of friendship, morality, and the consequences of pursuing one's goals. Gon's optimistic nature and resilience contribute to the emotional depth of the narrative."
  },
  {
    id: uuidv4(),
    image: "https://static.displate.com/857x1200/displate/2023-01-01/5450740480d23956fe6dd11a9b1a94e9_95a6b62625eaed23f1482062d3aa54af.jpg",
    name: "Izuku Midoriya",
    age: 19,
    price: 80,
    description: "Izuku Midoriya, also known as Deku, is a determined and compassionate aspiring hero in a world where superpowers, known as Quirks, are common. Despite initially lacking powers, Izuku's journey towards becoming the Symbol of Peace is marked by his growth, challenges, and the bonds he forms with fellow heroes."
  },
  {
    id: uuidv4(),
    image: "https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png",
    name: "Sakura Haruno",
    age: 19,
    price: 60,
    description: "Sakura Haruno, a skilled medical ninja, evolves from a determined but initially underpowered character into a formidable force. Her journey in \"Naruto\" explores themes of inner strength, resilience, and the pursuit of excellence in a world dominated by formidable opponents and complex relationships."
  },
  {
    id: uuidv4(),
    image: "https://static.wikia.nocookie.net/listofdeaths/images/f/f2/Ken_Kaneki.png",
    name: "Ken Kaneki",
    age: 19,
    price: 80,
    description: "Ken Kaneki, a bookish college student, undergoes a harrowing transformation into a half-ghoul after a chance encounter. The narrative explores his struggle for identity, acceptance, and survival in a world where ghouls and humans coexist uneasily. Kaneki's journey is a poignant exploration of the human condition."
  },
  {
    id: uuidv4(),
    image: "https://static.wikia.nocookie.net/bokunoheroacademia/images/1/15/Mirio_Togata's_joke.png",
    name: "Mirio Togata",
    age: 19,
    price: 70,
    description: "Mirio Togata, also known as Lemillion, is a charismatic and skilled hero with the power to phase through objects. His unwavering dedication to heroism, even in the face of adversity, makes him a standout character in \"My Hero Academia.\" Mirio's impact is felt not only through his abilities but also through his inspiring spirit."
  },
  {
    id: uuidv4(),
    image: "https://butwhytho.net/wp-content/uploads/2020/09/maxresdefault-28.jpg",
    name: "Inuyasha",
    age: 19,
    price: 60,
    description: "Inuyasha, a half-demon with dog-like features, embarks on a quest to retrieve the Sacred Shikon Jewel. His character embodies the struggle between his human and demon sides, exploring themes of love, redemption, and the consequences of past actions."
  },
  {
    id: uuidv4(),
    image: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Shinji-Ikari.Neon-Genesis-Evangelion.webp",
    name: "Shinji Ikari",
    age: 19,
    price: 90,
    description: "Shinji Ikari, a reluctant and introspective young pilot, is thrust into the responsibility of defending humanity against mysterious beings known as Angels. The narrative delves into Shinji's complex relationships, inner conflicts, and the psychological toll of piloting giant robots in a world on the brink of apocalypse."
  },
  {
    id: uuidv4(),
    image: "https://www.sosyncd.com/wp-content/uploads/2022/08/Celebrity-Database-INTP-3.png",
    name: "Gintoki Sakata",
    age: 21,
    price: 80,
    description: "Gintoki Sakata, the silver-haired samurai, leads the \"Odd Jobs\" agency in a comically dysfunctional Edo period. Gintoki's character is a blend of humor, wisdom, and occasional seriousness, making him a unique and memorable protagonist in the comedic and action-packed world of \"Gintama.\""
  },
  {
    id: uuidv4(),
    image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0a6dff0c-acdd-4530-982e-83acc9084d7f/width=1200/0a6dff0c-acdd-4530-982e-83acc9084d7f.jpeg",
    name: "Ichigo Kurosaki",
    age: 19,
    price: 70,
    description: "Ichigo Kurosaki, a human with Soul Reaper abilities, battles malevolent spirits known as Hollows. His journey in \"Bleach\" explores themes of duty, sacrifice, and the consequences of wielding supernatural powers in a world filled with spiritual entities."
  },
  {
    id: uuidv4(),
    image: "https://static.wikia.nocookie.net/omniversal-battlefield/images/1/1e/Saber.(Fate.stay.night).full.1044734.jpg",
    name: "Saber",
    age: 17,
    price: 90,
    description: "Saber, a legendary character summoned to participate in the Holy Grail War, is characterized by honor, chivalry, and exceptional swordsmanship. Her role in the complex and fate-driven conflicts of the \"Fate\" series adds a layer of mystique and grandeur to the narrative."
  },
  {
    id: uuidv4(),
    image: "https://i.pinimg.com/originals/d2/07/3e/d2073ead81e909a33f42657a1048803f.jpg",
    name: "Natasha Romanoff",
    age: 28,
    price: 80,
    description: "Natasha Romanoff, also known as Black Widow, is a skilled S.H.I.E.L.D. agent and superhero. Her character combines espionage, combat prowess, and a mysterious past, contributing to the intrigue and action in the Marvel-inspired anime."
  },
  {
    id: uuidv4(),
    image: "https://static.wikia.nocookie.net/thejusticeworld/images/b/bb/Kirito-sword-art-online-31698905-1280-720.jpg",
    name: "Kirito",
    age: 19,
    price: 70,
    description: "Kirito, a skilled player in virtual reality MMORPGs, becomes a central figure in various digital worlds. His character explores themes of escapism, friendship, and the blurring lines between virtual and real experiences."
  },
  {
    id: uuidv4(),
    image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/58327514-3255-45b8-b4ae-0821e9810501/width=1200/58327514-3255-45b8-b4ae-0821e9810501.jpeg",
    name: "Lucy Heartfilia",
    age: 19,
    price: 60,
    description: "Lucy Heartfilia, a celestial mage, joins the Fairy Tail guild in search of adventure and camaraderie. Her character contributes to the vibrant and diverse cast of mages in \"Fairy Tail\", exploring themes of loyalty, friendship, and personal growth."
  },
  {
    id: uuidv4(),
    image: "https://static.zerochan.net/Edogawa.Conan.full.3260727.jpg",
    name: "Conan Edogawa",
    age: 7,
    price: 90,
    description: "Conan Edogawa, a brilliant young detective trapped in a child's body, uses his intellect to solve complex crimes. His character, formerly known as Shinichi Kudo, navigates the challenges of maintaining his secret identity while unraveling mysteries in the long-running detective anime."
  }
];

app.get('/objects', (req, res) => {
  const { filterBy, value } = req.query;

  if (filterBy && value) {
    let filteredKuns;

    if (filterBy === "search") {
      filteredKuns = objectContainer.filter((kun) => 
        (kun.name + kun.description).toLowerCase().includes(value.toLowerCase())
      );
    } else {
      filteredKuns = objectContainer.filter((kun) => kun[filterBy] == value);
    }

    res.json(filteredKuns);
  } else {
    res.json(objectContainer);
  }
});

app.get('/ages', (req, res) => {
  res.json(objectContainer
    .map(item => item.age)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort());
});

app.get('/prices', (req, res) => {
  res.json(objectContainer
    .map(item => item.price)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/objects`);
});