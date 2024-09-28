import windowClosed from '../images/window_closed.jpg';
import newManager from '../images/new-manager.png';
import pipe from '../images/Journalist_With_Pipe.jpg';
import barj from '../images/biblically_accurate.png';
import kingsley from '../images/kingsley.jpg';
import fisticuffs from '../images/Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg';
import pie1 from '../images/3598354144_ab9cfc61f9_c.jpg';
import athletico_partick from '../images/athletico_partick.jpg';
import giantLeg from '../images/giant_leg1.png';
import goalposts from '../images/goalposts.jpg';
import spence from '../images/spence.jpg';
import funeral from '../images/pexels-cottonbro-10485641.jpg';
import morrissey from '../images/Morrissey-Madrid2008.jpg';
import frida from '../images/747px-Frida_Kahlo,_by_Guillermo_Kahlo_(cropped).jpg';
import spiderman3 from '../images/spiderman3.jpg';
import martinLuther from '../images/martin_luther.jpg';
import krankies from '../images/krankies.jpg';
import craigCharles from '../images/craig_charles.png';
import joffrey from '../images/Joffrey-Baratheon---shoul-011.jpg';
import jardel from '../images/jardel.jpg';
import geri from '../images/Geri_horner1_(cropped).jpg';
import grimace from '../images/Grimace.png';
import grint from '../images/Rupert_Grint_01_(20672352144).jpg';
import davros from '../images/davros.jpg';
import nappy from '../images/Varos 2 (nappies).jpg';
import jollyGreen from '../images/jolly_green_giant.png';
import billyBear from '../images/billy_bear.jpg';
import bertha from '../images/big_bertha.jpg';
import happyFarmer from '../images/pexels-gustavo-fring-4975359.jpg';
import sosig from '../images/sosig.png';
import shania from '../images/that-dont-impress-me-much-.jpg';
import trainingDrills from '../images/training_drills.jpg';
import walk from '../images/spiderman3_walk.gif';
import sillyBear from '../images/silly_bear.jpg';
import angryBear from '../images/elite_commando_by_zubair273_dfxe966-414w-2x.jpg';
import souttarInjury from '../images/defribrilator.jpg';
import sheen1 from '../images/Michael-Sheen1.jpeg';
import shoelaces from '../images/shoelaces.jpg';
import leagueCup from '../images/league_cup.avif';

const signings = [
  // {"nam201e": "A Giant Leg", "position": ", a Pressing Forward",  "image": giantLeg, "transfer": "for £4.7 million"},
  {"name": "Frida Kahlo", "position": ", an Attacking Midfielder",  "image": frida, "transfer": "on loan"},
  {"name": "Spider-man 3", "position": ", a Target Man",  "image": spiderman3, "transfer": "for £258 million"},
  {"name": "Morrissey", "position": ", a Right Winger",  "image": morrissey, "transfer": "in return for releasing his latest album"},
  {"name": "Martin Luther", "position": ", a Right Back",  "image": martinLuther, "transfer": "for £4.7 million"},
  {"name": "The Krankies", "position": ", a Carrilero",  "image": krankies, "transfer": "on loan from the Birmingham Hippodrome"},
  {"name": "Craig Charles", "position": ", a Sweeper Keeper",  "image": craigCharles, "transfer": "f"},
  {"name": "Joffrey", "position": ", a Left Wing Back",  "image": joffrey, "transfer": "on loan"},
  {"name": "Geri Halliwell", "position": ", a Ball Winning midfielder",  "image": geri, "transfer": "on loan"},
  {"name": "Jardel (now)", "position": ", a Centre Forward",  "image": jardel, "transfer": "on loan"},
  {"name": "Davros, creator of the Daleks", "position": ", a Segundo Volante",  "image": davros, "transfer": "on loan"},
  {"name": "This old guy in a nappy", "position": ", an Inverted Full-Back",  "image": nappy, "transfer": "on loan"},
  {"name": "The Jolly Green Giant", "position": ", a Roaming Playmaker",  "image": jollyGreen, "transfer": "on loan"},
  {"name": "Rupert Grint", "position": ", an Anchor Man",  "image": grint, "transfer": "on loan"},
  {"name": "Grimace", "position": ", a No-Nonsense Centre Back",  "image": grimace, "transfer": "on loan"},
  {"name": "Billy Bear Ham", "position": "(Ham)",  "image": billyBear, "transfer": "on loan"},
  {"name": "Big Bertha from the 1989 CBBC series 'Big Bertha'", "position": ", a Box-to-Box midfielder",  "image": bertha, "transfer": "on loan"},
]

const signingsNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const randomNumber = [0,1,2,3,4]

const bottomSix = ["Ross County", "St Johnstone", "Hibs", "Motherwell"]

const topSix = [{"club": "Dundee", "insult": "bams who were too edgy for Forfar."}, 
{"club": "Hearts", "insult": "halloumi-quaffing milquetoast protestants."}, 
{"club": "St Mirren", "insult": "scarf-weaving airport wankers."}, 
{"club": "Kilmarnock", "insult": "clinically depressed pie-fuckers."}, 
{"club": "Aberdeen", "insult": "oil-shagging granite fanatics."}
]

const championsLeague = ["Dynamo Kyiv", "FC Twente", "Partizan Belgrade", "Lille", "Fenerbahçe", "Slavia Prague", "FC Salzburg", "Club Brugge"]

const goalsAgainst = [3, 5, 7, 11, 19]

const cool = ["rad", "sweet", "groovy", "neato", "wicked sick", "totally tubular", "funky fresh", "bodacious", "gnarly", "way cool", "outrageous", "snazzy"];

const lowerLeague = ["Elgin City", "East Fife", "Annan", "Kelty Hearts", "Fourth Lanark"]

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

let index = getRandomItem(randomNumber)
let index2 = getRandomItem(randomNumber)

let transferIndex1 = getRandomItem(signingsNumbers)
let transferIndex2 = getRandomItem(signingsNumbers)
let transferIndex3 = getRandomItem(signingsNumbers)
let transferIndex4 = getRandomItem(signingsNumbers)
let transferIndex5 = getRandomItem(signingsNumbers)

const texts = [
  {
    id: 1,
    text: 
`You awake to find yourself manager of Glasgow Rangers F.C.

 This comes after your predecessor had - after a promising start - fucked it.

 BUT THAT WON'T HAPPEN TO YOU EH`,
    image: newManager,
    alt: "A man without a face holding up a Rangers shirt.",
    options: [
      {
        text: "I be manage Rangers",
        nextText: 2,
      },
      {
        text: "Brrm brrm, let's go",
        nextText: 2,
      },
   ]
  },
  {
    id: 2,
    text: `You meet the assembled squad. You talk about how they're good players but seem to have lost confidence, but you believe in them. As you speak you swear you can hear the most beautiful singing.`,
    image: athletico_partick,
    alt: "A picture of the Athletico Partick squad, mid-nineties.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Explain your ethos, tactics and style.",
        nextText: 4,
      },
      {
        text: "Just stare at them until someone looks away.",
        nextText: 3,
      },
    ]
    },
  {
    id: 3,
    text: `You believe football is simple. Eleven men – or women, nowadays – get the ball and score a goal. But don’t let the other men or women do that. Ideally you’d score a few goals, which you do by putting the ball in the net (Specifically the net attached to the white rectangle – but do not be confused by the white line on the pitch at the bottom of the rectangle: it is part of the rectangle, yes, but it’s not the same as the other three lines: it is soft and yielding. Also there are throw ins.`,
    image: goalposts,
    alt: "An illustrated guide to how goalposts are.",
    loopCountUpdate: 0,
    options: [
      {
        text: "And that's your footballing philosophy. Bish bash bosh.",
        nextText: 4,
      },
      {
        text: "Also: we will play for free kicks and James will score them. Bish bash bosh.",
        nextText: 4,
      },
    ],
  },
 {
    id: 4,
    text: `The Team are behind you, both spiritually and physically, as you leave the dressing room and go out to meet the press. You tell them…`,
    image: pipe,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Football is simple, like pies. You put the meat in the pastry. You put the ball in the net. But sometimes it is a vegetarian or vegan alternative like beans or macaroni. Still, you must put it in the pie. That is football, that is life.",
        nextText: 7,
      },
      {
        text: "Attention scum. Kneel before my might. You shall live out the rest of your days in abject fear, watching helplessly as I bend the world to my will; knowing you are utterly powerless to stop me, that you are not important enough for me to destroy.",
        nextText: 5,
      },
    ],
  },
 {
    id: 5,
    text: 
`Jim Spence - the only working class journalist in Scotland (non-rap division) - stands up and spits at your feet defiantly. He will not kneel, and says everyone is with him.`,
    image: spence,
    alt: "Noted journalist and former Dundee United consultant Jim Spence",
    loopCountUpdate: 0,
    options: [
      {
        text: "Challenge Spencey to a fight.",
        nextText: 6,
      },
      {
        text: "Ask if anyone has any questions about pies.",
        nextText: 7,
      },
    ],    
  },
 {
    id: 6,
    text: "Jim Spence is no match for you. Before you despatch him he looks around for aid. 'Hauners?' he asks desperately. But no help is coming.",
    image: funeral,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
    options: [
      {
        text: "Ask if anyone has any questions about pies.",
        nextText: 7,
      },
      {
        text: "Read the eulogy at his funeral. 'No one else was brave enough to challenge me, apart from Spencey. Rest in peace you brave Dundonian fool.'",
        nextText: 7,
      },
    ],
  },
 {
    id: 7,
    text: "You then field more questions about pies.",
    image: pie1,
    alt: "Bespoke Scotch pie manufacturing.",
    loopCountUpdate: 0,
    options: [
      {
        text: "‘I think the greatest thing about pies is the element of surprise. You simply do not know what's going to be inside.’",
        nextText: 8,
      },
      {
        text: "‘The greatest thing I've ever eaten is a live crab, and what is a crab if not nature's pie?’",
        nextText: 8,
      },
    ],
  },
 {
    id: 8,
    text: "You then field yet more questions about pies.",
    image: pipe,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
    options: [
      {
        text: "‘A small bowl of meat with some puff pastry on top is not a pie.’",
        nextText: 9,
      },
      {
        text: "‘What I'd like to see more of are small pies for children.’",
        nextText: 9,
      },
    ],
  },
 {
    id: 9,
    text: "After fielding seventy-four questions about pies you field your first Rangers XI. You throw a few surprises:  a youth team prospect, a change of centre back, and the return of a frozen out midfielder. You win 2-0 against St Johnstone.",
    image: shania,
    alt: "A very cheerful Derek Adams.",
    loopCountUpdate: 0,
     options: [
      {
        text: "Celebrate the start of a glorious reign.",
        nextText: 12,
      },
      {
        text: "Tell the players that celebrating a 2-0 win against St Johnstone is like celebrating breathing in and out or tying your own shoelaces.",
        nextText: 10,
      }
       ],
  },
 {
    id: 10,
    text: "John Souttar asks for help doing up his shoelaces.",
    image: shoelaces,
    alt: "People jumping for joy against the backdrop of a colourful sunset",
    loopCountUpdate: 0,
     options: [
      {
        text: "-	Tell him to learn himself, he's an adult.",
        nextText: 11,
      },
      {
        text: "Help him with the knots.",
        nextText: 12,
      }
    ],
  },
 {
    id: 11,
    text: "John Souttar is now injured for six months.",
    image: souttarInjury,
    alt: "An Old Timey journalist, probably with a Brooklyn accent, relaying his notes down the phone.",
    loopCountUpdate: 0,
     options: [
      {
        text: "Well I can't say I'm totally shocked.",
        nextText: 12,
      },
      {
        text: "Maybe you should have *stuck* to velcro lol.",
        nextText: 12,
      },
    ],
  },
 {
    id: 12,
    text: "The mood is good in the dressing room. You go on a winning run and make up some ground on Celtic, who you play next the League Cup semi-final.",
    image: trainingDrills,
    alt: "The Scotsport panel discuss the latest news in Scottish football.",
    loopCountUpdate: 0,
     options: [
      {
        text: "Do repeated training drills of staying compact in defence and speedy counter-attack transitions.",
        nextText: 13,
      },
      {
        text: "Practice kicking things really hard.",
        nextText: 14,
      },
    ],
  },
 {
    id: 13,
    text: "You win 2-1 thanks to an 86th minute lightning-fast counter attack. You are one step closer to your first silverware as boss!",
    image: pipe,
    alt: "Three vague shapes discuss the latest SPFL action.",
    loopCountUpdate: 0,
      options: [
      {
        text: "More like Brendan Rodgered!",
        nextText: 15,
      },
      {
        text: "No let up before Christmas!",
        nextText: 15,
      }
    ],
  },
 {
    id: 14,
    text: "You win 3-2 on penalties after having two players sent off. You are one step closer to your first silverware as boss!",
    image: pipe,
    alt: "A very chipper Derek Adams.",
    loopCountUpdate: 0,
           options: [
      {
        text: "More like Brendan Rodgered!",
        nextText: 15,
      },
      {
        text: "No let up before Christmas!",
        nextText: 15,
      },
    ],
  },
 {
    id: 15,
    text: 
    `You feel your team is lacking a few players to take you to the next level, such as a defender who isn’t broken and a central creative midfielder. Your scouts have taken a look at a young Dutch prospect who fits the bill, bags of potential and likely to have a huge sell-on value. 
    You recommend putting everything into signing him, and getting a loan signing for cover in defence.
    Meanwhile you are playing ${topSix[index].club} in the League Cup Final.`,

    image: angryBear,
    alt: "The Buddies Park (aka The SMISA Stadium), Paisley.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Okay lads. We are Glasgow Rangers. We are born winners. Let's get out there and show everyone.",
        nextText: 17,
      },
      {
        text: `Let's get into these ${topSix[index].insult}`,
        nextText: 19,
      },
    ],
  },
 {
    id: 16,
    text: 
`You are 2-0 down at half time.
'Don't worry lads,' you say, 'We can still win this game!'
'Why?' say the lads.`,

    image: sillyBear,
    alt: "The Buddies Park (aka The SMISA Stadium), Paisley.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Because it's only half time. You know how good you are, you can go out there and score three goals.’",
        nextText: 17,
      },
      {
        text: "Because I SAID SO, FUCKFACE.",
        nextText: 18,
      },
    ],
  },

{
    id: 17,
    text: 
`You win on penalties! The League Cup is yours!`,

image: leagueCup,
alt: "Derek Adams giving an interview",
loopCountUpdate: 0,
           options: [
      {
        text: "The first of many, you're sure.",
        nextText: 19,
      },
      {
        text: "Let's just enjoy this moment.",
        nextText: 20,
      },
    ],
  },

{
    id: 18,
    text: 
`You win 5-2. What a team talk! The League Cup is yours!`,

    image: leagueCup,
    alt: "Derek Adams giving an interview",
    loopCountUpdate: 0,
           options: [
      {
        text: "The first of many, you're sure.",
        nextText: 19,
      },
      {
        text: "Let's just enjoy this moment.",
        nextText: 20,
      },
    ],
  },
{
    id: 19,
    text: 
`The team are buoyed by your confidence. You swear you can hear angelic choirs in the background when you walk down the corridors at Ibrox.`,

      image: walk,
      alt: "Derek Adams giving an interview",
      loopCountUpdate: 0,
          options: [
      {
        text: "There's a good feeling around the club right now and you intend to keep it that way.",
        nextText: 21,
      },
      {
          text: "It's all about laying strong foundations for the future.",
        nextText: 21,
      },
    ],
  },

{
    id: 20,
    text: 
`The team feel relaxed after you don't put any extra pressure on them. You swear you can hear angelic choirs in the background when you walk down the corridors at Ibrox.`,

    image: walk,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
      {
        text: "There's a good feeling around the club right now and you intend to keep it that way.",
        nextText: 21,
      },
      {
          text: "It's all about laying strong foundations for the future.",
        nextText: 21,
      },
    ],
  },

{
    id: 21,
    text: 
`You have drawn 1-1 with St Johnstone.`,

    image: happyFarmer,
    alt: "Derek Adams closes his eyes and makes a decision.",
    loopCountUpdate: 0,
           options: [
      {
        text: "The cup final took a lot out of them. We need some new signings.",
        nextText: 22
      },
      {
          text: "On the bright side John Souttar has learned how to tie his shoelaces.",
        nextText: 22
      },
    ],
  },

{
    id: 22,
    text: `Your Director of Football tells you that there is good news and bad news on the transfer front. 
    The hot young Dutch prospect has moved to ${getRandomItem(championsLeague)} instead, but you have agreed terms with a possible replacement: the Welsh superstar...Michael Sheen.
    Sheen will be in character the entire time as a promising young Dutch midfielder, and has agreed a very reasonable £200,000 per week wage (the majority of which will be donated to a pioneering leek sanctuary near Swansea).`,
    image: sheen1,
    alt: "Derek Adams closes his eyes and makes a decision.",
    loopCountUpdate: 0,
           options: [
            {
                text: "Oh I loved him in Amadeus.",
              nextText: 26
            },
            {
              text: "Are you fucking kidding me?",
            nextText: 23
          },
    ],
  },

{
    id: 23,
    text: 
"No, and we don't have anyone else lined up.",

    image: pipe,
    alt: "Derek looks into the middle distance.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Have we at least got a defender?",
        nextText: 24
      },
      {
        text: "thing",
        nextText: 26
      }
    ],
  },

{
    id: 24,
    text: 
"You did have a defender lined up: former Rangers youth player Gordon Ramsay. However Ramsay has sustained some mysterious injuries during a trip to the Highlands and is no longer available.",

    image: sosig,
    alt: "A dial marked 'OOF SIZE' set to 'Large'.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Okay, fine, we'll play one of the children.",
        nextText: 26
      },
      {
        text: "...what's Jean-Alain Boumsong up to?",
        nextText: 25
      }
    ],
  },

{
    id: 25,
    text: 
"You receive a letter from MI6 stating that there is no known record of anyone called 'Jean Alain-Boumsong' ever existing. The letter then bursts into flames.",

    image: pipe,
    alt: "A wyvern, as seen in a 14th century Welsh manuscript.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Okay, fine, we'll play one of the children.",
        nextText: 26
      },
      {
        text: "Acknowledge that there are more things in heaven and earth than are dreamt of in your philosophy.",
        nextText: 26
      }
    ],
  },

{
    id: 26,
    text: `The signing of Dutch football prodigy Jheronomus van Doodmeester (as played by Michael Sheen) is greeted with gushing praise. 
    Tom English describes it as ‘thinking outside of the box – literally’. 
    Kris Boyd simply and enigmatically says ‘Violence is mint’. 
    Michael Stewart says ‘Sorry, he’s a 55-year-old actor, what the hell?’ but nobody likes him so it doesn’t matter.
    A journalist asks if you will be putting van Doodmeester straight into the first team in the Scottish Cup tie against ${getRandomItem(lowerLeague)}?`,

    image: pipe,
    alt: "Ben Affleck looking sad.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Absolutely, he’s a bit rusty but his quality will tell.",
        nextText: 27
      },
      {
        text: "No, he needs to get back to full fitness after six weeks playing a camp angel.",
        nextText: 27
      },
    ]},
{
    id: 27,
    text: 
`You have bridged the gap between you and Celtic to four points. Van Doodmeester has an assist to his name after coming off the bench against Motherwell, but hasn’t trained fully as he’s been filming links for a documentary about Nye Bevan. `,

    image: pipe,
    alt: "Tynecastle, Edinburgh.",
    loopCountUpdate: 0,
           options: [
      {
        text: "He’ll start against Celtic. He’s ready. If anything the Nye Bevan documentary has fired him up.",
        nextText: 28
      },
      {
        text: "He’ll be on the bench against Celtic. You’ve already proved you can beat your rivals with this eleven.",
        nextText: 29
      },
    ]
},

{
    id: 28,
    text: 
"Van Doodmeester toe-pokes the ball into the net from a low cross, and Ibrox is singing his name something glorious. Unfortunately he then gets sent off when Greg Taylor tells him that Kate Beckinsale’s career has plateued, and the Dutch maestro attempts to rip off the diminutive left back’s face. You lose 3-1.",

    image: pipe,
    alt: "Derek with his Christmas Presents.",
    loopCountUpdate: 0,
           options: [
      {
        text: "That’s okay, there’s still a lot of football to be played.",
        nextText: 30
      },
      {
        text: "Well thank fuck we only have to play Celtic once more.",
        nextText: 30
      }

    ],
  },

{
    id: 29,
    text: 
"You start the game well but start flagging around 60 minutes, and van Doodmeester barely touches the ball after his introduction. You lose 2-0.",

    image: pipe,
    alt: "Delicious turkey",
    loopCountUpdate: 0,
           options: [
      {
        text: "That’s okay, there’s still a lot of football to be played.",
        nextText: 30
      },
{
        text: "Well thank fuck we only have to play Celtic once more.",
        nextText: 30
      }
    ],
  },

{
    id: 30,

    text: `You get Celtic in the Scottish Cup semi-final.
    You spend the Friday before the semi with the squad taking turns to goad Michael Sheen, trying to make him break character. Jack Butland almost manages it by saying his performance in Twilight: New Moon wasn’t tonally in-keeping with the rest of the film, but Michael Sheen is no longer in the room. He is subsumed by Jheronomus van Doodmeester.`,
    image: pipe,
    alt: "Gorgie City Farm with a 'Regrettably we are closed' sign on the gate.",
    loopCountUpdate: 0,
           options: [
      {
        text: "You’re going to win this match, you know it.",
        nextText: 31
      },
      {
        text: "You consider adding improv workshops to training rota.",
        nextText: 31
      }
    ],
  },
{
    id: 31,
    text: 
"It’s 1-1. The full-time whistle has blown. Van Doodmeester has played like a man possessed, ignoring all criticism of his Tony Blair performances as ‘too broad’, setting up a late equaliser. It goes to penalties.",

    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 0,
                  options: [
      {
        text: "You feel strangely fine, as if you were a successful American Rock album that went platinum based on the lead single ‘Closing Time’.",
        nextText: 32
      },
      {
        text: "Like the twenty second studio album by American singer and actress Cher, you believe.",
        nextText: 32
      }
    ],
  },
  {
    id: 32,
    text: "You miss every single penalty because you spent Friday practicing method acting rather than set pieces.",
    image: pipe,
    alt: "Coaches and scouts assessing a player.",
    loopCountUpdate: 0,
           options: [
      {
        text: "*shakes fist* VAN DOODMEESTER!",
        nextText: 33
      },
    {
        text: "Make a mental note to fire the Director of Football.",
        nextText: 34
      },
    ],
  },

  {
    id: 33,
    text: `Van Doodmeister tries to get onto the team bus but is intercepted by David Tennant and the Welsh, who demand to know where he’s been and what he’s been up to. Sheen, having gone completely method, says he does not know who this ‘Michael Sheen’ is. Tennant drags him into an unmarked van which drives off into the night.`,
    image: pipe,
    alt: "A player signing a contract",
           options: [
      {
        text: "Make a mental note to fire the Director of Football.",
        nextText: 34
      },
      {
        text: "Okay, let’s just put all our focus on the remaining fixtures.",
        nextText: 35
      },
    ],
  },
{
    id: 34,
    text: 
`The Director of Football turns out to have been three kids in a trenchcoat the entire time.`,

    image: pipe,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
      {
        text: "That reminds you, that guy in a trenchcoat said he’d look after your car and you haven’t seen it for three weeks.",
        nextText: 35
      },
      {
        text: "Okay, it’s disappointing, but we’re still only 4 points behind in the league with 10 to play.",
        nextText: 35
      }
    ],
  },
{
    id: 35,
    text: `You have lost 1-0 to ${getRandomItem(bottomSix)}`,
    image: pipe,
    alt: "Happy New Year from everyone at Aberdeen Football Club",
    loopCountUpdate: 0,
           options: [
      {
        text: "Okay, it’s disappointing but have you considered that there is no god and life is meaningless?",
        nextText: 36
      },
      {
        text: "Insist that you will keep trying to win the league until it is mathematically impossible for you to do so.",
        nextText: 36
      }
    ],
  },
  {
    id: 36,
    text:  `It is mathematically impossible for you to win the league. You sign off with a 2-0 win over ${topSix[index2].club}, and head to the last press conference of the season.`,
    image: pipe,
    alt: "Derek Adams pointing at the player he wants.",
    loopCountUpdate: 0,
           options: [
      {
text: "Tell the press that, despite falling short at the last, you’re proud of the players and the levels they reached under you.",
        nextText: 37
      },
      {
text: "Tell the press that once you really put your stamp on the team you’ll challenge Celtic all the way for the title.",
        nextText: 37
      },
    ],
  },
{
    id: 37,
    text: `The press conference is finished. Everyone has gone. You lean back against the wall, sighing, and hear a click and a whirr.
    Part of the wall slides aside, showing only darkness. It is a secret passageway! Do you:`,
    image: pipe,
    alt: "A blurred image of a new signing, Ross County scarf aloft",
    loopCountUpdate: 0,
           options: [
{
text: "Go in and explore?",
        nextText: 38
      },
{
text: "Close it and move on with your life.",
        nextText: 86
      },

    ],
  },

{
    id: 38,
    text: `The tunnel is extremely dark. In this distance you hear a faint vibration.
Do you continue stumbling blindly into the dark?`,
    image: pipe,
    alt: "Kingsley, the Partick Thistle mascot.",
    loopCountUpdate: 0,
           options: [
      {
        text: "In a way, don’t we all?",
        nextText: 39
      },
      {
    text: "Turn back and forget about the whole thing.",
        nextText: 86
      }
    ],
  },
  {
    id: 39,
    text: 
    `Your eyes adjust to the gloom. Then you remember your phone has a torch.
    The tunnel is made of matt black bricks, arched at the top. Dust motes float like jellyfish. The chanting grows louder, but not loud: a bassy incantation, the same sounds on a loop:
    
    Ah'hri  c' ah'hri ephaiah'hri ah'ehye'drnn
    nilgh'ri ahagl, nilgh'ru ahagl, c' llll ephaiah'hri`,

image: pipe,
alt: "alt",
loopCountUpdate: 0,
           options: [
{
text: "I’ve seen this film, I’m getting the fuck out of here.",
        nextText: 86
      },
{
text: "Keep going. Maybe they’re singing something nice.",
        nextText: 40
      },

    ],
  },

{
    id: 40,
text: `The floor slopes downwards, the air growing close, eventually you come to a narrow bridge across a seemingly infinite chasm. Across the bridge is an archway, and from your torchlight you can see what looks like a domed stone building. From within you can hear the chanting:

llll ahagl's nafl n'ghaauh'e l' vulgtmnahor turn'ghftor agl ah'ehye'drnn,
mg nafl ehye, ng ahagl mgsyha'h ahor ah ehye!

The chant finishes, and the last syllable echoes into the chasm.`,

image: pipe,
alt: "A player signing a contract",
loopCountUpdate: 0,
           options: [
{
text: "Turn back, you’ve got that charity golf tournament at the weekend.",
        nextText: 75
      },
{
text: "Cross the bridge.",
        nextText: 41
      },

    ],
  },
{
    id: 41,
    text: 
`You enter a domed hall. The floor is thick glass, and beneath it the abyss you glimpsed outside seemingly continues. At the opposite end is a dark wooden throne. There is a light coming through a stained-glass window, but it’s not clear where the light is coming from. The ceiling, though, is a series of wooden hexagons – the same dark wood as the throne – arranged in what seems like circular patterns to create further hexagon-like tunnels. There are multiple layers of this, like they’ve been added at random. Not carved so much as…grown. 

While you are pondering the mystery of the ceiling a loud thump attracts your attention. A heavy staff has been thumped against the ground by an elderly man in multi-coloured robes, wearing a lopsided conical cloth hat and sporting a huge white beard. On closer inspection, the robes appear to be made of the 1993-94 Adidas Away kit.

‘You’re early,’ he says. ‘Welcome to the Netherbrox.’
`,

    image: pipe,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Demand an explanation for all this.",
        nextText: 42
      },
      {
        text: "Ask if it was him singing.",
        nextText: 42
      }
    ],
  },
{
    id: 42,
    text: `He chuckles, and waves a hand. The stained-glass loses its colours. A shape is visible beyond it. You move towards the glass and squint. It is a figure of enormous size, chained and forlorn, dwelling in a colossal chamber: the body of a defensive midfielder with a many-winged head, each wing adorned with multiple eyes and a single colossal eye in the centre of its face.
    ‘A Biblically Accurate Ryan Jack’, you whisper.`,

    image: barj,
    alt: "Derek Adams biting his lip.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Your brain, it explodes.",
        nextText: 200
      },
      {
        text: "Ask him to explain the explanation.",
        nextText: 43
      }
    ],
  },
{
    id: 43,
    text: `The Biblically Accurate Ryan Jack yearns for freedom, but should it escape to the surface its song is too beautiful for the human mind to comprehend.
    
    The Wizard’s name is Johnny John Johnny John John John John. He has been expecting you.

    ‘All of your predecessors made their way down here. Are you ready to begin your task?'`,
    image: pipe,
    alt: "Derek Adams closes his eyes.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Begin?",
        nextText: 44
      },
      {
        text: "Task?",
        nextText: 44
      }
    ],
  },

  {
    id: 44,
    text: "You thought yourself merely a football person? The position of Rangers Manager has had occult significance since the schism of the Golden Dawn.",
    image: pipe,
    alt: "Derek Adams pointing at the player he wants.",
    loopCountUpdate: 0,
           options: [
{
text: "The fuck are you talking about?",
        nextText: 45
      },
{
text: "Golden Dawn? Like, Satanists?",
        nextText: 45
      },

    ],
  },

{
    id: 45,
    text: `The path of Hellfire had become well-trodden, the desire lines like veins on Mother Earth. Crowley and his ilk had their day, while we, who remained in the shadows, carry on unto the present to guard against the remnants of death bringers and chaos merchants. We are the last guardians against the eternal night.`,
    image: pipe,
    alt: "A blurred image of a new signing, Ross County scarf aloft",
    loopCountUpdate: 0,
    options: [
{
text: "No seriously, what the fuck are you talking about.",
        nextText: 47
      },
{
text: "That all makes perfect sense, no notes.",
        nextText: 46
      },

    ],
  },

{
    id: 46,
    text: "'Really?'",
    image: pipe,
    alt: "GOB Bluth from Arrested Development acknowledging that he's made a huge mistake.",
    loopCountUpdate: 0,
           options: [
      {
        text: "NO",
        nextText: 47
      },
      {
        text: "NO?",
        nextText: 47
      }
    ],
  },
{
    id: 47,
    text: `Some magic cunts who do dangerous shit got themselves noticed, we thought things were getting a bit much, and they might come back and do more dangerous shit.`,
    image: pipe,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
           options: [
      {
        text: "Fine, I don't care.",
        nextText: 48
      },
      {
        text: "You mentioned a task?",
        nextText: 48
      }  
 ],
  },
{
    id: 48,
    text: 
`It is the duty of every Rangers manager to retrieve the three sacred relics required to perform the purging; the ritual that keeps Govan safe from those that would do us harm.`,

    image: pipe,
    alt: "Celtic Park, Glasgow",
    loopCountUpdate: 0,
           options: [
      {
        text: "Okay, sounds good.",
        nextText: 49
      },
      {
        text: "I have a bad feeling about this.",
        nextText: 51
      }
    ],
  },
  {
    id: 49,
    text: 
"Your role is to guide the football team to success in order to retrieve the relics.",

image: pipe,
alt: "Captain America 'So...' meme image",
loopCountUpdate: 0,
           options: [
{
text: "I see.",
        nextText: 50
      },
{
text: "Ah. Shit.",
        nextText: 50
      },

    ],
  },

{
    id: 50,
text: `You must bring three Scottish Football Trophies to this place to complete the ritual.`,
image: pipe,
alt: "A player signing a contract",
loopCountUpdate: 0,
           options: [
{
text: "I understand.",
        nextText: 53
      },
{
text: "How did this work when we were in League Two?",
        nextText: 51
      },

    ],
  },
{
    id: 51,
    text: "'Shut the fuck up,' says the wizard.'",
    image: pipe,
    alt: "RuPaul saying 'And don't fuck it up'.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Fair enough.",
        nextText: 52
      },
      {
        text: `Any trophies in particular?`,
        nextText: 52
      }
    ],
  },
{
    id: 52,
    text: "'It can be any trophy, but they must be the genuine thing, not the little one you get to keep.",
    image: pipe,
    alt: "RuPaul saying 'Meh'.",
    loopCountUpdate: 0,
           options: [
            {
        text: "Right. Yep. I can do that.",
        nextText: 54
            },
            {
        text: "Any chance this could wait a year?",
        nextText: 53
            }
    ],
  },
{
    id: 53,
    text: 
`'No.'`,

    image: pipe,
    alt: "The Tony Macaroni Arena (aka Almondvale Stadium), Livingston.",
    loopCountUpdate: 0,
           options: [
          {
        text: "Shit.",
        nextText: 54
          },
          {
        text: "That's fine, I have a plan.",
        nextText: 54
      },
    ],
  },
  {
    id: 54,
    text: 
"You go to the Trophy Room: you have the current League Cup and the 1988 Skol Cup that meet the criteria but you need a third trophy. After a quick bit of googling you decide you only have two possible courses of action:",

    image: pipe,
    alt: "Derek Adams pointing at the player he wants.",
    loopCountUpdate: 0,
           options: [
{
text: "1.	Burgle Celtic Park and steal the League or Cup trophy.",
        nextText: 55
      },
{
text: "2.	Burgle Firhill and steal the Tennents Sixes trophy off of Partick Thistle.",
        nextText: 56
      },

    ],
  },

{
    id: 55,
    text: `You go to Celtic Park, disguised as a priest. Long story short, after you try to do the Catherine Zeta-Jones Entrapment shimmy you set off the alarm. 
    
    The Green Brigade unfurl from the ceiling like bats, their black hoodies envelop you and you are never seen again.`,
    image: pipe,
    alt: "A blurred image of a new signing, Ross County scarf aloft",
    loopCountUpdate: 0,
           options: [
{
text: "Hang on, am I dead?",
        nextText: 200
      },
{
text: "Time to begin the recruitment process again I guess.",
        nextText: 1
      },

    ],
  },
{
    id: 56,
    text: 
`It’s pre-season friendly time. You head for the Aitken Suite at Firhill. No one recognises you because the only top flight team they remember is Ross County. You have a few IPAs and look at the many pictures of Alan Rough drawn by Dave Shrigley, and the life size model of John Lambie made entirely from cheese.

When the game starts and everyone has left you head out, pausing only to take a quick nibble of Lambie’s thumb, and make for the Board Room. There, in pride of place, held aloft by two cheese-sculptured angels, is the Tennents’ Sixes trophy.`,

image: pipe,
alt: "RuPaul saying 'And don't fuck it up'.",
loopCountUpdate: 0,
           options: [
      {
        text: "Just grab it and run.",
        nextText: 64
      },
      {
        text: "Check for traps.",
        nextText: 57
      },
    ],
  },
{
    id: 57,
    text: `You check for traps, gently tapping the walls like they do in films. A panel slides back revealing…Kingsley, the Partick Thistle Mascot.
    
    Except this isn’t someone in a costume. There’s no joins. The texture is too…meat-like. The smell is like a panda died in a mayonnaise bottling plant. This is the real Kingsley.`,
    image: kingsley,
    alt: "GOB Bluth from Arrested Development acknowledging that he's made a huge mistake.",
    loopCountUpdate: 0,
           options: [
        {
        text: "Run for it.",
        nextText: 58
        },
        {
        text: "Stand and fight.",
        nextText: 59
      },
    ],
  },
{
    id: 58,
    text: `You run for it, Kinglsey pursuing you on all fours and grunting like an inbred dog, his brow even more furrowed, drool escaping his…does he even have lips? You slow Kingsley down by slamming doors behind him, and see the exit. Just before you open the door, however, you find yourself falling. You slam into an uneven bumpy surface, screaming as you break a leg. You are surrounded by shattered skeletons. 
    
    ‘I’ll take that,’ says a voice, and you see an elasticated limb stretch impossibly far and snatch the trophy from you. ‘Come on Kingsley, din-dins.’
    
    The last thing you see before Kingsley joins you in the pit to dine on your flesh is the smiling face of Gerry Britton.
    `,
    image: kingsley,
    alt: "RuPaul saying 'And don't fuck it up'.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Wait am I dead?",
        nextText: 200
      },
      {
        text: "Wheel turns, civilisations arise, wheel turns, civilisations fall.",
        nextText: 1
      },
    ],
  },
{
    id: 59,
    text: "Kingsley is mostly spikes, teeth and weird little T-Rex arms. He has no discernible genitals, which is probably for the best, but this means his weak spot is his knees. You know what to do.",
    image: kingsley,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 0,
           options: [
      {
        text: "Go for the right knee.",
        nextText: 60
      },
      {
        text: "Go for the left knee.",
        nextText: 60
      },
    ],
  },
  {
    id: 60,
    text: `Your sessions in the Bilel Mohsni Memorial Scudding Parlour pay off, and your knee-height slide tackle removes both of Kingsley’s knees. He screams and bellows like a bereaved Kaiju. 
    
    You hear footsteps, hide behind a pillar, and see Kingsley’s keeper – Gerry Britton – enter the room.`,
    image: kingsley,
    alt: "Harry Redknapp in his car on transfer deadline day.",
    loopCountUpdate: 0,
           options: [
{
text: "Leg it.",
        nextText: 61
      },
{
text: "Take care of Gerry first.",
        nextText: 62
      },

    ],
  },

{
    id: 61,
    text: `Gerry Britton hears your movement, and uses his gangly limbs – which seem to be stretching somehow – to reach out and grab you. His dark eyes show nothing but contempt as he drags you towards the gaping maw of Kingsley’s mouth.`,
    image: kingsley,
    alt: "A player signing a contract",
    loopCountUpdate: 0,
           options: [
{
text: "This is not how I expected to die.",
        nextText: 200
      },
{
text: "Maybe it'll be like the black hole in Interstellar.",
        nextText: 1
      },

    ],
  },
{
    id: 62,
    text: "You are fighting Gerry Britton.",
    image: fisticuffs,
    alt: "Painting by Giulio del Torre: 'Zwei raufende Buben' (Two Scuffling Boys) 1927.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Ask if he knows Queensberry Rules.",
        nextText: 61
      },
      {
        text: "Have at the long-limbed maverick.",
        nextText: 63
      },
    ],
  },
{
    id: 63,
    text: "You cosh Gerry Britton on the head with the trophy and leg it the fuck out of Firhill. Now you are ready to begin the ritual.",
    image: pipe,
    alt: "A knee to the balls.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Leg it.",
        nextText: 64
      },
      {
        text: "Go back for more Lambie cheese.",
        nextText: 65
      },
    ],
  },
{
    id: 64,
    text: 
`You arrive back at Ibrox, slightly hungry.

The Wizard is waiting for you, now dressed in robes made from the 1995-96 goalkeeper top. You greet him and he sneers. ‘I am not Johnny John Johnny John John John, I am his brother Greig. Have you brought the trinkets?’ `,

    image: pipe,
    alt: "An illustration from a mid-13th century Welsh manuscript.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Yes here they are.",
        nextText: 66
      },
      {
        text: "naw I’ve just got a massive misshapen sack making loads of clinking noises for some other reason, prick'",
        nextText: 66
      },

    ],
  },
  {
    id: 65,
    text: 
`You arrive back at Ibrox with a full stomach and head down to the secret chamber.

The Wizard is waiting for you, now dressed in robes made from the 1995-96 goalkeeper top. You greet him and he sneers. ‘I am not Johnny John Johnny John John John, I am his brother Greig. Have you brought the trinkets?’ `,
    image: pipe,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
{
        text: "Yes here they are.",
        nextText: 66
      },
{
        text: "naw I’ve just got a massive misshapen sack making loads of clinking noises for some other reason, prick",
        nextText: 66
      },
    ]
  },
{
    id: 66,
    text: 
`The ritual begins. From one vessel to another is poured the sacred mixture: the tears of Paul Gascoigne, the vomit of Paul Gascoigne, the s…basically it’s a lot of Paul Gascoigne, and the cold sweat of Chick Young after interviewing Walter Smith. Once the liquid passes into the League Cup trophy, Greig begins to chant: 

Ymg''re ahehyee vulgtmnahog
vulgtmnahor nilgh'ri mgahehyee uh'e

From the hive-like ceiling the chant echoes differently from each hexagon-cave, an overwhelming cacophony. At least, you find yourself thinking, they’re probably echoes.

Steam rises rapidly from the cup. Greig begins to vibrate, unleashing a rising roar.
`,

    image: pipe,
    alt: "Ben Affleck looking sad.",
    loopCountUpdate: 0,
           options: [
{
        text: "Kick the trophy from his hands.",
        nextText: 67
      },
{
        text: "Probably fine, just leave it.",
        nextText: 68
      },
    ]
  },
  {
    id: 67,
    text: "Greig’s face is badly burned. but that is instantly solved when something whips through the air, pierces Greig’s neck, and then yanks the flesh from his bones. You see a hexagon begin to chew on these remnants, and realise you were right about the noise not being echoes just as a beam of dark wood flicks towards your eye-",
    image: windowClosed,
    alt: "The Transfer Window has closed.",
    loopCountUpdate: 0,
            options: [
{
text: "Am I to take it that the great Transfer Window that is life...is closed?",
        nextText: 200
      },
      {
        text: "The cosmic ballet goes on.",
                nextText: 1
      },
    ],
  },

{
    id: 68,
    text: 
"The steam rises upwards and warps the wooden shapes in the ceiling, which twist into the shape of screaming mouths as they drip ichor. Greig aims his staff upwards and shoots flame from the tip of his staff, obliterating nearly all the remaining molten flesh even as it shrieks in pain. The one surviving globule of it lands on his shoulder and it instantly melts away, his staff arm dropping to the ground.",

    image: pipe,
    alt: "A man punching a hole in a wall.",
    loopCountUpdate: 0,
           options: [
{
        text: "Ask if he wants any help.",
        nextText: 69
      },
{
        text: "Try to jam the arm back on.",
        nextText: 69
      },

    ],
  },
{
    id: 69,
    text: `
    ‘Stop that. I am clearly doomed,’ he says, blood leaking from his mouth. 'Listen. The ritual is not complete. The defences are down. We have one... chance'.

    His head slumps back. 

You hear a distant rumbling sound. What the hell are you going to do?
`,
    image: pipe,
    alt: "RuPaul saying 'And don't fuck it up'.",
    loopCountUpdate: 0,
           options: [
{
        text: "Run back to the surface.",
        nextText: 71
      },
{
        text: "Eat the wizard.",
        nextText: 70
      },
    ],
  },
{
    id: 70,
    text: 
"That's really weird.",

    image: pipe,
    alt: "16th Century German jousting",
    loopCountUpdate: 0,
           options: [
{
  text: "Run back to the surface.",
    nextText: 71
      },
{
  text: "Walk back to the surface.",
    nextText: 71
      },
    ],
  },
{
    id: 71,
    text: `
    On the surface you hear screams. The rumbling noise is coming from the river. You make your way there through the fleeing crowds.
    
    Across the river, atop a tower in Glasgow’s stylish West End, you see dark blue flames erupt. 
    
    As the flames part you see a man in wizard's robes. 
    
    You recognise him from your induction day.
    
    It's Craig Whyte.`,
    image: pipe,
    alt: "Derek Adams closes his eyes and makes a decision.",
    loopCountUpdate: 0,
           options: [
{
        text: "Lot to unpack here.",
        nextText: 72
      },
{
        text: "Oh come the fuck on.",
        nextText: 72
      },

    ],
  },
{
    id: 72,
    text: `
    Whyte cries vengeance on the club he once pwned:
    'For I am Craig Whyte the Wise, Craig Whyte mortgage-maker, Craig Whyte of Many Colours!'
    He emits blue lightning from his staff and the club shop explodes.
    'And lo it comes now
    as so brings end
    when the beast is sated...
    RELEASE...McCRACKEN.'

    From the depths of the Clyde emerges a huge, tentacled Dundee goalkeeper.`,
    image: pipe,
    alt: "Blurred image of Steve Carrell in 'The Office' holding mug reading 'World's best boss'.",
    loopCountUpdate: 0,

           options: [
{
        text: "Fuck off",
        nextText: 73
      },
{
        text: "Go hide in the Netherbrox.",
        nextText: 74
      },

    ],
  },
{
    id: 73,
    text: `You fuck off. Govan is destroyed.`,
    image: pipe,
    alt: "Street sign in Rowley Regis: 'Bell End'.",
    loopCountUpdate: 1,
           options: [
{
        text: "This whole 'sweet release of death' thing isn't everything it's cracked up to be.",
        nextText: 200
      },
      {
        text: "Looks like we're never getting that ultimate state of soteriological release.",
        nextText: 1
              }

    ],
  },
{
    id: 74,
    text: 
"So you’re hiding in the Netherbrox waiting to be destroyed by a many tentacled Jon McCracken, trying to think of a way out of this mess while ignoring the rapidly decomposing dead wizard on the floor and the plaintive song of the Biblically Accurate Ryan Jack.",

    image: pipe,
    alt: "A knee to the balls.",
    loopCountUpdate: 1,
    options: [
  {
          text: "Give up.",
          nextText: 75
        },
        {
          text: "Pick up the wizard's staff",
          nextText: 76
                }
  
      ],
  },
{
    id: 75,
    text: `You give up. Govan is destroyed.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Due to Ibrox falling into a massive chasm in the Earth you're put on gardening leave.",
        nextText: 1
            },
            {
              text: "We'll all meet again in Valhalla",
        nextText: 200
                    }
          ],
  },
{
    id: 76,
    text: `You have a wizard’s staff. You smash the window to the cell, aim the staff and shout ‘ARTMEEDJA’. Five sparks of lightning dismantle the chains, and at last the Biblically Accurate Ryan Jack is freed.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Run back to the surface.",
        nextText: 77
            },
            {
              text: "Walk back to the surface.",
        nextText: 77
                    }
          ],
  },
{
    id: 77,
    text: `The many-tentacled Dundee keeper has emerged from the Clyde, destroyed the Science Centre Tower and is currently demolishing the BBC. 
    
    With an ear-splitting cry Ryan Jack charges forward and fights him in the wreckage.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Pop into the Co-op for some water, you need to keep your fluids up.",
        nextText: 78
            },
            {
              text: "Go help Ryan",
        nextText: 79
                    }
          ],
  },
{
    id: 78,
    text: `Suitably refreshed, you go help Ryan who is struggling against McCracken’s many tentacles. 
    
    ‘Come the fuck on man,’ you yell hoarsely. ‘You might be Biblically Accurate but you’re still Ryan Jack.’
    
    At which the Biblically Accurate Ryan Jack does a shin-high studs up slide tackle on McCracken, breaking his leg. The monster falls backwards into the Clyde and the BARJ jumps on him, gouging and wringing with all his might.
    `,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Just keep watching the horrific violence.",
        nextText: 80
            },
            {
              text: "Engage Craig Whyte in magical combat.",
        nextText: 81
                    }
          ],
  },
{
    id: 79,
    text: `With a bit of a sore throat, you go help Ryan, who is struggling against McCracken’s many tentacles. 

    ‘Come the fuck on man,’ you yell hoarsely. ‘You might be Biblically Accurate but you’re still Ryan Jack.’

    At which the Biblically Accurate Ryan Jack does a shin-high studs up slide tackle on McCracken, breaking his leg. The monster falls backwards into the Clyde and the BARJ jumps on him, gouging and wringing with all his might.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Just keep watching the horrific violence.",
        nextText: 80
            },
            {
              text: "Engage Craig Whyte in magical combat.",
        nextText: 81
                    }
          ],
  },
{
    id: 80,
    text: `While you are distracted, Craig Whyte hits you in the dick with a bolt of magic lightning.
    
    As you double up in agony, Whyte leaps across the river in one bound and aims his staff at your head. This is it. This is the end.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Prepare yourself for death.",
        nextText: 83
            },
            {
              text: "Ask him to shoot you in the dick again.",
        nextText: 81
                    }
          ],
  },
{
    id: 81,
    text: `After you engage him in magical combat, Craig Whyte hits you in the dick with a bolt of magical lightning. 
    
    As you double up in agony, Whyte leaps across the river in one bound and aims his staff at your head. This is it. This is the end. 
    `,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Prepare yourself for death.",
        nextText: 83
            },
            {
              text: "Ask him to shoot you in the dick again.",
        nextText: 82
                    }
          ],
  },
{
    id: 82,
    text: "Good for you.",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 1 - we can add something to this so once you shoot yourself in the dick 10 times it adds a message.
    options: [
      {
        text: "Now you prepare yourself for death.",
        nextText: 83
            },
            {
              text: "Ask him to shoot you in the dick again.",
        nextText: 82
                    }
          ],
  },
{
    id: 83,
    text: `Ryan Jack screams in rage as he sees you in peril, and Craig Whyte whirls round to shoot him through the heart.
    
    There is a gaping hole in his chest.
    
    With his remaining strength, the dying central midfielder hoists Craig Whyte towards his mouth, and then with his last breaths sings a single perfect note directly into the evil wizard’s face. The skin and flesh is torn from his skull as his brain implodes, the effect of which is not dissimilar to someone filling a chicken with raspberry Slush Puppie and throwing it through a thresher.
    
    Ryan Jack falls backwards into the river, a peaceful expression on his face.
    
    In the calm of the aftermath, people return to the streets. They head down to the river to watch the body gently float out to sea. People cry single tears, throw flowers onto the body. Others pay tribute by halfing Dundonian teenagers or taking lengthy periods off work through injury.
    
    ‘He saved us,’ weeping fathers say to their children. ‘He saved us, the Biblically Accurate Ryan Jack.’
    `,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Join in with the tributes.",
        nextText: 84
            },
            {
              text: "Break the staff over your knee and walk away.",
        nextText: 84
                    }
          ],
  },
{
    id: 84,
    text: "You’re in a Morrisons because you’ve heard they do a flavour of Stoats Porridge bars that you can’ get in Tesco. Do you sign up for a Morrisons Card?",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "No.",
        nextText: 86
            },
            {
              text: "Depends, what are the benefits?",
        nextText: 85
                    }
          ],
  },
{
    id: 85,
    text: "Offers just for you from money off your next shop to treats we think you’ll love.  Find your offers in the Morrisons More App or coupons printed at the checkout.",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Nah, I’m not signing up for another card if I’m just here for Stoats.",
        nextText: 86
            },
            {
              text: "Okay, might as well, free money really isn’t it?",
        nextText: 86
                    }
          ],
  },
{
    id: 86,
    text:
    `You are about to embark on your first full season managing Glasgow Rangers Football Club.
  You have already signed someone from Norwich! Doesn’t matter who! They’re not going to play! And Tom Lawrence will return from injury again. That’s like a new signing! However the following players have left the club:
  
  A bored reserve goalkeeper who's been here since he was 5
  A South American midfielder everyone now agrees was a mistake
  A Scandinavian defender
  Leon Balogun

 Although nobody can remember what the Scandinavian guy looks like.

 Are you confident about this season?
`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "I think, very soon, if I play my cards right, we’ll be blowing the world.",
        nextText: 87
            },
            {
              text: "No.",
        nextText: 87
                    }
          ],
  },
{
    id: 87,
    text:"'Is there anywhere the squad could do with strengthening?'",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Definitely upfront, we need to convert more chances.",
        nextText: 89
            },
            {
              text: "I don't care as long as we sell all our wingers.",
        nextText: 88
                    }
          ],
  },
  
{
    id: 88,
    text:"'Weren't your wingers your best players last season?'",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Are you the manager? No. Who are you? Didn't I kill one of you last season?",
        nextText: 89
            },
            {
              text: "I don't have best players, I only have best team.",
        nextText: 89
                    }
          ],
  },
{
    id: 89,
    text:"'So what can we expect from Rangers this season?'",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "The best football the world has ever seen. The greatest. We’ll be utilising new dimensions.",
        nextText: 90
            },
            {
              text: "You won’t expect us. We’ll be like the aliens from A Quiet Place.",
        nextText: 90
                    }
          ],
  },
{
    id: 90,
    text:"'Did something happen to you in the summer? You seem kinda wired.?'",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "I simply plotted our enemies’ downfall.",
        nextText: 91
            },
            {
              text: "Are you familiar with the concept of super-sanity?",
        nextText: 91
                    }
          ],
  },
{
    id: 91,
    text:"You go to talk to the team. You’ve got a big slideshow set up with animations and everything. You’re going to talk to them about their tactical evolution. Scott Wright asks if this is like Pokémon.",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Shut up Scott or I’ll sell you to Birmingham",
        nextText: 93
            },
            {
              text: "What is Pokémon?",
        nextText: 92
                    }
          ],
  },
{
    id: 92,
    text:"Your slideshow lies dormant. Scott Wright seems to have been talking about Aipom evolving udders for hands if you defeat Tera in battle for around nine hours.",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Sell Scott Wright to Birmingham",
        nextText: 94
            },
            {
              text: "Download Pokémon Go",
        nextText: 94
                    }
          ],
  },
{
    id: 93,
    text:"Your initial team talk for the season is finished. You ask if there are any questions. Scott Wright puts his hand up and says ‘Hey boss, see on fancy crisps? When it says ‘hand cooked’ does that mean some cunt wi hot hands literally cooks the crisps in his palm?’",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "No.",
        nextText: 94
            },
            {
              text: "Shut the fuck up Scott, I swear to God.",
        nextText: 94
                    }
          ],
  },
{
    id: 94,
    text:"You have sold Scott Wright to Birmingham. You feel like you should probably sign some players.",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Sign some players.",
        nextText: 95
            },
            {
              text: "Do not sign some players.",
        nextText: 106
                    }
          ],
  },
{
    id: 95,
    text: `You have signed a Giant Leg.`,
    image: giantLeg,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `${getRandomItem(cool)}`,
        nextText: 96
            },
            {
              text: `${getRandomItem(cool)}`,
        nextText: 96
                    }
          ],
  },
{
    id: 96,
    text: "Do you want to sign somebody else?",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Sign somebody else.",
        nextText: 97
            },
            {
              text: "Do not sign somebody else.",
        nextText: 106
                    }
          ],
  },
  {
    id: 97,
    text: `You have signed ${signings[transferIndex2].name} ${signings[transferIndex2].position}, ${signings[transferIndex2].transfer}.`,
    image: `${signings[transferIndex2].image}`,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `${getRandomItem(cool)}`,
        nextText: 98
            },
            {
              text: `${getRandomItem(cool)}`,
        nextText: 98
                    }
          ],
  },
  {
    id: 98,
    text: "Do you want to sign somebody else?",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Sign somebody else.",
        nextText: 99
            },
            {
              text: "Do not sign somebody else.",
        nextText: 106
                    }
          ],
  },
  {
    id: 99,
    text: `You have signed ${signings[transferIndex3].name} ${signings[transferIndex3].position}, ${signings[transferIndex3].transfer}.`,
    image: `${signings[transferIndex3].image}`,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `${getRandomItem(cool)}`,
        nextText: 100
            },
            {
              text: `${getRandomItem(cool)}`,
        nextText: 100
                    }
          ],
  },
  {
    id: 100,
    text: "Do you want to sign somebody else?",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Sign somebody else.",
        nextText: 101
            },
            {
              text: "Do not sign somebody else.",
        nextText: 106
                    }
          ],
  },
  {
    id: 101,
    text: `You have signed ${signings[transferIndex4].name} ${signings[transferIndex4].position}, ${signings[transferIndex4].transfer}.`,
    image: `${signings[transferIndex4].image}`,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `${getRandomItem(cool)}`,
        nextText: 102
            },
            {
              text: `${getRandomItem(cool)}`,
        nextText: 102
                    }
          ],
  },
  {
    id: 102,
    text: "Do you want to sign somebody else?",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Sign somebody else.",
        nextText: 103
            },
            {
              text: "Do not sign somebody else.",
        nextText: 106
                    }
          ],
  },
  {
    id: 103,
    text: `You have signed ${signings[transferIndex1].name} ${signings[transferIndex1].position}, ${signings[transferIndex1].transfer}.`,
    image: `${signings[transferIndex1].image}`,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `${getRandomItem(cool)}`,
        nextText: 104
            },
            {
              text: `${getRandomItem(cool)}`,
        nextText: 104
                    }
          ],
  },
  {
    id: 104,
    text: "You’ve let the contracts expire on Crawjaws, Jammo, the Unspeakable One, Tender Bulb and Titch. Are you in no mood to replace them?",
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: "Okay, let's sign someone.",
        nextText: 105
            },
            {
              text: "I have replaced them with space and quiet..",
        nextText: 106
                    }
          ],
  },
  {
    id: 105,
    text: `You have signed ${signings[transferIndex5].name} ${signings[transferIndex5].position}, ${signings[transferIndex5].transfer}. Happy now?`,
    image: `${signings[transferIndex5].image}`,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `A bit.`,
        nextText: 106
            },
            {
              text: `I've never been happy.`,
        nextText: 106
                    }
          ],
  },
  {
    id: 106,
    text: `Now you’ve signed some people, are you excited about the first game of the season?`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Yes, bring it on.`,
        nextText: 108
            },
            {
              text: `No, I want to sign more people.`,
        nextText: 107
                    }
          ],
  },
  {
    id: 107,
    text: `Strewth. Alright, you have signed ${getRandomItem(signings).name}.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Lovely stuff.`,
        nextText: 108
            },
            {
              text: `Thank you, my lust for random expenditure is sated.`,
        nextText: 108
                    }
          ],
  },
  {
    id: 108,
    text: `Okay, so the first game of the season. You’re playing Hearts at Tynecastle.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Tricky but we can do it.`,
        nextText: 110
            },
            {
              text: `Oh, is Gorgie City Farm still open?`,
        nextText: 109
                    }
          ],
  },
  {
    id: 109,
    text: `No, Gorgie City Farm is not open.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Shame. I feel a specific kinship with urban bovines.`,
        nextText: 110
            },
            {
              text: `What's the fucking point?`,
        nextText: 110
                    }
          ],
  },
  {
    id: 110,
    text: `You're drawing 0-0 with Hearts. What are you going to do?`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Play for the draw.`,
        nextText: 111
            },
            {
              text: `Summon Matondo.`,
        nextText: 111
                    }
          ],
  },
  {
    id: 111,
    text: `You have drawn 0-0 with Hearts. What are you going to do?`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Aw come on.`,
        nextText: 112
            },
            {
              text: `That’s fine, Hearts have been a third force in Scottish football recently and drawing with them is nothing to be ashamed of they definitely aren’t going to be absolute dogshit this season.`,
        nextText: 112
                    }
          ],
  },
  {
    id: 112,
    text: `You’ve beaten Motherwell well, and now it’s time for the Champions League qualifiers.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `(singing) Die Meister/Die Besten/Les grandes équipes/The champions`,
        nextText: 113
            },
            {
              text: `Come on lads, this a chance to show what we're made of.`,
        nextText: 113
                    }
          ],
  },
  {
    id: 113,
    text: `You have lost to ${getRandomItem(championsLeague)} in a frankly irritating way: your left back was sent off for suggesting the forthcoming TV adaptation of Harry Potter is unnecessary, and also you were bad at football.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Well it is unnecessary.`,
        nextText: 114
            },
            {
              text: `Come on, the films cut out all the House Elf subplots.`,
        nextText: 114
                    }
          ],
  },
  {
    id: 114,
    text: `Still, you beat ${getRandomItem(bottomSix)} 16-0, so that puts you in a good frame of mind for the first Old Firm derby of the season.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Yeah, bring it on!`,
        nextText: 115
            },
            {
              text: `Sometimes at night you see his face, his peaceful face, as his body floats away.`,
        nextText: 115
                    }
          ],
  },
  {
    id: 115,
    text: `You’ve started the game really well, pressing Celtic high and creating numerous half cha-oh fuck they’ve scored.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `Aw what?`,
        nextText: 116
            },
            {
              text: `They've done it again! Fucksake!`,
        nextText: 116
                    }
          ],
  },
  {
    id: 116,
    text: `Ultimately you lose ${getRandomItem(goalsAgainst)} - 0 to Celtic and are now five points behind them in the league by the end of August.`,
    image: pipe,
    alt: "Collapsing on the floor, as if giving up",
    // loopCountUpdate: 0
    options: [
      {
        text: `At least we’ve got a long time to sort things.`,
        nextText: 117
            },
            {
              text: `I feel like we might not have long to sort things.`,
        nextText: 117
                    }
          ],
  },

];


export default texts;
