import kukiScore from "./rankings/kukiScore";

let songs = [
  {
 artist: "Disembodied Tyrant",
  name: "8.6 Blackout",
  album: "Single",
  link: "https://www.youtube.com/watch?v=6Dg702zWjQ4",
},
{
  artist: "The Acacia Strain",
  name: "A Call Beyond",
  album: "You Are Safe From God Here",
  link: "https://www.youtube.com/watch?v=am50h9xy6HE",
},
{
  artist: "Bleed From Within",
  name: "A Hope In Hell",
  album: "Zenith",
  link: "https://www.youtube.com/watch?v=WOrD3iOgviw",
},
{
  artist: "LANDM4RKS",
  name: "A Line In The Dust",
  album: "The Darkest Place I've Ever Been",
  link: "https://www.youtube.com/watch?v=VwEJvGm9e70",
},
{
  artist: "Of Mice & Men",
  name: "Another Miracle",
  album: "Another Miracle",
  link: "https://www.youtube.com/watch?v=cgEREKEvU_g",
},
{
  artist: "We Came As Romans",
  name: "Bad Luck",
  album: "ALL IS BEAUTIFUL… BECAUSE WE'RE DOOMED",
  link: "https://www.youtube.com/watch?v=sBgtsIRR2CU",
},
{
  artist: "Fit For A King",
  name: "Begin The Sacrifice",
  album: "Lonely God",
  link: "https://www.youtube.com/watch?v=_NE7lsJIrRQ",
},
{
  artist: "Igorrr",
  name: "Blastbeat Falafel",
  album: "Amen",
  link: "https://www.youtube.com/watch?v=PYRdJo3cG2Q",
},
{
  artist: "I Promised The World",
  name: "Bliss In 7 Languages",
  album: "I Promised The World",
  link: "https://www.youtube.com/watch?v=s9_D3XbUbrM",
},
{
  artist: "Architects",
  name: "Braindead",
  album: "The Sky, The Earth & All Between",
  link: "https://www.youtube.com/watch?v=W4ZlWw987KI",
},
{
  artist: "Greyhaven",
  name: "Burn A Miracle",
  album: "Keep It Quiet",
  link: "https://www.youtube.com/watch?v=WPD5Du3aDRI",
},
{
  artist: "Sleep Token",
  name: "Caramel",
  album: "Even In Arcadia",
  link: "https://www.youtube.com/watch?v=4iSvoQNfrrk",
},
{
  artist: "Allegaeon",
  name: "Driftwood",
  album: "The Ossuary Lens",
  link: "https://www.youtube.com/watch?v=SrUZdqy7spA ",
},
{
  artist: "Bad Omens",
  name: "Dying To Love",
  album: "Single",
  link: "https://www.youtube.com/watch?v=4xq5QzNG-m8 ",
},
{
  artist: "Electric Callboy",
  name: "Elevator Operator",
  album: "Single",
  link: "https://www.youtube.com/watch?v=BiP0FpY88E4 ",
},
{
  artist: "Poppy, Amy Lee & Courtney LaPlante",
  name: "End Of You",
  album: "Single",
  link: "https://www.youtube.com/watch?v=3rS83uI0Wak",
},
{
  artist: "Dying Wish",
  name: "Flesh Stays Together",
  album: "Flesh Stays Together",
  link: "https://www.youtube.com/watch?v=BED21n0MV3Q",
},
{
  artist: "Downswing",
  name: "For What It's Worth",
  album: "And Everything Was Dark",
  link: "https://www.youtube.com/watch?v=bhotLtV1bXI",
},
{
  artist: "Netherwalker",
  name: "Frost Troll",
  album: "Odyssey of Respair",
  link: "https://www.youtube.com/watch?v=Bo0dGPct_Hc",
},
{
  artist: "Loathe",
  name: "Gifted Every Strength",
  album: "Single",
  link: "https://www.youtube.com/watch?v=JQt3MFzt8PE",
},
{
  artist: "Imminence",
  name: "God Fearing Man",
  album: "The Return Of The Black",
  link: "https://www.youtube.com/watch?v=dEBsQTKZFOE ",
},
{
  artist: "Jinjer",
  name: "Green Serpent",
  album: "Duél",
  link: "https://www.youtube.com/watch?v=637ER6dlGDg",
},
{
  artist: "Moodring",
  name: "Half-Life",
  album: "Single",
  link: "https://www.youtube.com/watch?v=w8DifF-cMFc",
},
{
  artist: "Whitechapel",
  name: "Hate Cult Ritual",
  album: "Hymns in Dissonance",
  link: "https://www.youtube.com/watch?v=QfHGEOA90PU",
},
{
  artist: "Deafheaven",
  name: "Heathen",
  album: "Lonely People With Power",
  link: "https://www.youtube.com/watch?v=xQ2LDJ6j9EE",
},
{
  artist: "Rivers of Nihil",
  name: "House of Light",
  album: "Rivers of Nihil",
  link: "https://www.youtube.com/watch?v=-_5aOlpKFJ4",
},
{
  artist: "Killswitch Engage",
  name: "I Believe",
  album: "This Consequence",
  link: "https://www.youtube.com/watch?v=LgS-fkFOsRA",
},
{
  artist: "Malevolence",
  name: "If It's All The Same To You",
  album: "Where Only The Truth Is Spoken",
  link: "https://www.youtube.com/watch?v=xyTq7_gsZlM",
},
{
  artist: "Paleface Swiss & Stick To Your Guns",
  name: "Instrument Of War",
  album: "The Wilted EP",
  link: "https://www.youtube.com/watch?v=5FTa4GJP5mc",
},
{
  artist: "I Prevail",
  name: "Into Hell",
  album: "Violent Nature",
  link: "https://www.youtube.com/watch?v=3CuGW_fJvgk",
},
{
  artist: "PSYCHO-FRAME",
  name: "INVERTED SPEAR OF HEAVEN",
  album: "SALVATION LAUGHS IN THE FACE OF A GRIEVING MOTHER",
  link: "https://www.youtube.com/watch?v=84UpmfXXKCA",
},
{
  artist: "Currents",
  name: "It Only Gets Darker",
  album: "All That Follows",
  link: "https://www.youtube.com/watch?v=SfpVmH5jzd4",
},
{
  artist: "Stray From The Path",
  name: "Kubrick Stare",
  album: "Clockworked",
  link: "https://www.youtube.com/watch?v=RWr1yoK7jpw",
},
{
  artist: "Bury Tomorrow",
  name: "Let Go",
  album: "Will You Haunt Me, With That Same Patience",
  link: "https://www.youtube.com/watch?v=5uTE09KwQ1o",
},
{
  artist: "Spite",
  name: "Lights Out",
  album: "NEW WORLD KILLER",
  link: "https://www.youtube.com/watch?v=HK4MJB_Cua8",
},
{
  artist: "PeelingFlesh",
  name: "Midnight",
  album: "PF Radio 2",
  link: "https://www.youtube.com/watch?v=tq75F0LpgwU",
},
{
  artist: "Dream Theater",
  name: "Midnight Messiah",
  album: "Parasomnia",
  link: "https://www.youtube.com/watch?v=JwOjMJB0Q2k",
},
{
  artist: "A Day to Remember",
  name: "Miracle",
  album: "Big Ole album Vol. 1",
  link: "https://www.youtube.com/watch?v=9Cb872pCbMs",
},
{
  artist: "Bilmuri",
  name: "More Than Hate",
  album: "Single",
  link: "https://www.youtube.com/watch?v=BzONJQRHtj0",
},
{
  artist: "From Ashes To New",
  name: "New Disease",
  album: "Single",
  link: "hhttps://www.youtube.com/watch?v=0xMBbvvO5Uk",
},
{
  artist: "Bloodywood",
  name: "Nu Delhi",
  album: "Nu Delhi",
  link: "https://www.youtube.com/watch?v=A3C9NwGKgq4",
},
{
  artist: "Dayseeker",
  name: "Pale Moonlight",
  album: "Creature In The Black Night",
  link: "https://www.youtube.com/watch?v=k95oDnsCu_8",
},
{
  artist: "Mirar",
  name: "Présage",
  album: "Ascension",
  link: "https://www.youtube.com/watch?v=NG4RBZfsUzU",
},
{
  artist: "BABYMETAL",
  name: "RATATATA",
  album: "Metal Forth",
  link: "https://www.youtube.com/watch?v=EDnIEWyVIlE ",
},
{
  artist: "Parkway Drive",
  name: "Sacred",
  album: "Single",
  link: "https://www.youtube.com/watch?v=8v4oxxvs8iY ",
},
{
  artist: "Orthodox",
  name: "Sacred Place",
  album: "A Door Left Open",
  link: "https://www.youtube.com/watch?v=TAMISEC6FkQ",
},
{
  artist: "Vildhjarta",
  name: "Sargaso",
  album: "där skogen sjunger under evighetens granar",
  link: "https://www.youtube.com/watch?v=2mZPrXuGF7Q",
},
{
  artist: "Signs of the Swarm",
  name: "Scars Upon Scars",
  album: "To Rid Myself Of Truth",
  link: "https://www.youtube.com/watch?v=C7SJHYcUeLc",
},
{
  artist: "Testament",
  name: "Shadow People",
  album: "Para Bellum",
  link: "https://www.youtube.com/watch?v=CsWHa92QuIs",
},
{
  artist: "Magnolia Park",
  name: "SHALLOW",
  album: "VAMP",
  link: "https://www.youtube.com/watch?v=g9Oty97D6vA",
},
{
  artist: "Thornhill",
  name: "Silver Swarm",
  album: "BODIES",
  link: "https://www.youtube.com/watch?v=Kfj5YXnUXsI",
},
{
  artist: "Unprocessed",
  name: "Snowlover",
  album: "Angel",
  link: "https://www.youtube.com/watch?v=1xOVSQXerQo",
},
{
  artist: "Spiritbox",
  name: "Soft Spine",
  album: "Tsunami Sea",
  link: "https://www.youtube.com/watch?v=80VTmBAnTSE",
},
{
  artist: "Deftones",
  name: "Souvenir",
  album: "Private Music",
  link: "https://www.youtube.com/watch?v=EujSHehKyfo",
},
{
  artist: "Sleep Theory",
  name: "Static",
  album: "Afterglow",
  link: "https://www.youtube.com/watch?v=JXukrO-yF7g",
},
{
  artist: "Trivium",
  name: "Struck Dead",
  album: "Struck Dead",
  link: "https://www.youtube.com/watch?v=IIgswpHNZik",
},
{
  artist: "Orbit Culture",
  name: "The Tales Of War",
  album: "Death Above Life",
  link: "https://www.youtube.com/watch?v=Y5SpGQMoaUU",
},
{
  artist: "Between The Buried And Me",
  name: "Things We Tell Ourselves in the Dark",
  album: "The Blue Nowhere",
  link: "https://www.youtube.com/watch?v=6FdXmAPM8u4",
},
{
  artist: "BOLTCUTTER",
  name: "Twenty One Cars",
  album: "Stille Broke",
  link: "https://www.youtube.com/watch?v=uDYzpTtjXEA",
},
{
  artist: "The Callous Daoboys",
  name: "Two-Headed Trout",
  album: "I Don't Want to See You in Heaven",
  link: "hhttps://www.youtube.com/watch?v=wL5UpOrHTBY",
},
{
  artist: "Cryptopsy",
  name: "Until There's Nothing Left",
  album: "An Insatiable Violence",
  link: "https://www.youtube.com/watch?v=MYjdfXLFHqA",
},
{
  artist: "Linkin Park",
  name: "Up From The Bottom",
  album: "From Zero (Deluxe)",
  link: "https://www.youtube.com/watch?v=97Mj6pXYMd8",
},
{
  artist: "Blessthefall",
  name: "Wake The Dead",
  album: "GALLOWS",
  link: "https://www.youtube.com/watch?v=Un4dvVurndY",
},
{
  artist: "Tallah",
  name: "What we know",
  album: "Primeval: Obsession // Detachment",
  link: "https://www.youtube.com/watch?v=2yuTlgjbtV4",
},
{
  artist: "Vianova",
  name: "Whatever Alright",
  album: "Hit It!",
  link: "https://www.youtube.com/watch?v=o-SURLJL-Tg",
},
]

songs.forEach((c) => {
  c.kukiScore = kukiScore[c.name];
  c.avgScore = c.kukiScore
  c.bestScore = Math.min(c.kukiScore);
});

songs.sort((a, b) => {
  if (a.avgScore !== b.avgScore) {
    return b.avgScore - a.avgScore;
  } else {
    if (a.bestScore !== b.bestScore) {
      return b.bestScore - a.bestScore;
    }
  }
  return a.artist.localeCompare(b.artist);
});

export default songs;
