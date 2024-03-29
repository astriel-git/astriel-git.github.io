'use strict';

// Get a reference to the button element by its id
const runButton = document.getElementById('runButton');

// Define a function to run your script
function runScript() {
  // Define a map for Pokémon names to codes
  const pokemonMap = {
    // GENERATION 1
    Bulbasaur: '0001',
    Ivysaur: '0002',
    Venusaur: '0003',
    Charmander: '0004',
    Charmeleon: '0005',
    Charizard: '0006',
    Squirtle: '0007',
    Wartortle: '0008',
    Blastoise: '0009',
    Caterpie: '000A',
    Metapod: '000B',
    Butterfree: '000C',
    Weedle: '000D',
    Kakuna: '000E',
    Beedrill: '000F',
    Pidgey: '0010',
    Pidgeotto: '0011',
    Pidgeot: '0012',
    Rattata: '0013',
    Raticate: '0014',
    Spearow: '0015',
    Fearow: '0016',
    Ekans: '0017',
    Arbok: '0018',
    Pikachu: '0019',
    Raichu: '001A',
    Sandshrew: '001B',
    Sandslash: '001C',
    Nidoranf: '001D',
    Nidorina: '001E',
    Nidoqueen: '001F',
    Nidoranm: '0020',
    Nidorino: '0021',
    Nidoking: '0022',
    Clefairy: '0023',
    Clefable: '0024',
    Vulpix: '0025',
    Ninetales: '0026',
    Jigglypuff: '0027',
    Wigglytuff: '0028',
    Zubat: '0029',
    Golbat: '002A',
    Oddish: '002B',
    Gloom: '002C',
    Vileplume: '002D',
    Paras: '002E',
    Parasect: '0030',
    Venomoth: '0031',
    Diglett: '0032',
    Dugtrio: '0033',
    Meowth: '0034',
    Persian: '0035',
    Psyduck: '0036',
    Golduck: '0037',
    Mankey: '0038',
    Primeape: '0039',
    Growlithe: '003A',
    Arcanine: '003B',
    Poliwag: '003C',
    Poliwhirl: '003D',
    Poliwrath: '003E',
    Abra: '003F',
    Kadabra: '0040',
    Alakazam: '0041',
    Machop: '0042',
    Machoke: '0043',
    Machamp: '0044',
    Bellsprout: '0045',
    Weepinbell: '0046',
    Victreebel: '0047',
    Tentacool: '0048',
    Tentacruel: '0049',
    Geodude: '004A',
    Graveler: '004B',
    Golem: '004C',
    Ponyta: '004D',
    Rapidash: '004E',
    Slowpoke: '004F',
    Slowbro: '0050',
    Magnemite: '0051',
    Magneton: '0052',
    Farfetchd: '0053',
    Doduo: '0054',
    Dodrio: '0055',
    Seel: '0056',
    Dewgong: '0057',
    Grimer: '0058',
    Muk: '0059',
    Shellder: '005A',
    Cloyster: '005B',
    Gastly: '005C',
    Haunter: '005D',
    Gengar: '005E',
    Onix: '005F',
    Drowzee: '0060',
    Hypno: '0061',
    Krabby: '0062',
    Kingler: '0063',
    Voltorb: '0064',
    Electrode: '0065',
    Exeggcute: '0066',
    Exeggutor: '0067',
    Cubone: '0068',
    Marowak: '0069',
    Hitmonlee: '006A',
    Hitmonchan: '006B',
    Lickitung: '006C',
    Koffing: '006D',
    Weezing: '006E',
    Rhyhorn: '006F',
    Rhydon: '0070',
    Chansey: '0071',
    Tangela: '0072',
    Kangaskhan: '0073',
    Horsea: '0074',
    Seadra: '0075',
    Goldeen: '0076',
    Seaking: '0077',
    MrMime: '007A',
    Scyther: '007B',
    Jynx: '007C',
    Electabuzz: '007D',
    Magmar: '007E',
    Pinsir: '007F',
    Tauros: '0080',
    Magikarp: '0081',
    Gyarados: '0082',
    Lapras: '0083',
    Ditto: '0084',
    Eevee: '0085',
    Vaporeon: '0086',
    Jolteon: '0087',
    Flareon: '0088',
    Porygon: '0089',
    Omanyte: '008A',
    Omastar: '008B',
    Kabuto: '008C',
    Kabutops: '008D',
    Aerodactyl: '008E',
    Snorlax: '008F',
    Articuno: '0090',
    Zapdos: '0091',
    Moltres: '0092',
    Dratini: '0093',
    Dragonair: '0094',
    Dragonite: '0095',
    Mewtwo: '0096',
    Mew: '0097',
    // GENERATION 2
    Chikorita: '0098',
    Bayleef: '0099',
    Meganium: '009A',
    Cyndaquil: '009B',
    Quilava: '009C',
    Typhlosion: '009D',
    Totodile: '009E',
    Croconaw: '009F',
    Feraligator: '00A0',
    Sentret: '00A1',
    Furret: '00A2',
    Hoothoot: '00A3',
    Noctowl: '00A4',
    Ledyba: '00A5',
    Ledian: '00A6',
    Spinarak: '00A7',
    Ariados: '00A8',
    Crobat: '00A9',
    Togetic: '00B0',
    Natu: '00B1',
    Xatu: '00B2',
    Mareep: '00B3',
    Flaaffy: '00B4',
    Ampharos: '00B5',
    Bellossom: '00B6',
    Marill: '00B7',
    Azumarill: '00B8',
    Sudowoodo: '00B9',
    Sunflora: '00C0',
    Yanma: '00C1',
    Wooper: '00C2',
    Quagsire: '00C3',
    Espeon: '00C4',
    Umbreon: '00C5',
    Murkrow: '00C6',
    Slowking: '00C7',
    Misdreavus: '00C8',
    Unknown: '00C9',
    Steelix: '00D0',
    Snubbull: '00D1',
    Granbull: '00D2',
    Qwilfish: '00D3',
    Scizor: '00D4',
    Shuckle: '00D5',
    Heracross: '00D6',
    Sneasel: '00D7',
    Teddiursa: '00D8',
    Ursaring: '00D9',
    Octillery: '00E0',
    Delibird: '00E1',
    Mantine: '00E2',
    Skarmory: '00E3',
    Houndour: '00E4',
    Houndoom: '00E5',
    Seadra: '00E6',
    Phanpy: '00E7',
    Donphan: '00E8',
    Porygon2: '00E9',
    Magby: '00F0',
    Miltank: '00F1',
    Blissey: '00F2',
    Raikou: '00F3',
    Entei: '00F4',
    Suicune: '00F5',
    Larvitar: '00F6',
    Pupitar: '00F7',
    Tyranitar: '00F8',
    Lugia: '00F9',
    Hooh: '00FA',
    Celebi: '00FB',
    // GENERATION 3
    Treecko: '0115',
    Grovyle: '0116',
    Sceptile: '0117',
    Torchic: '0118',
    Combusken: '0119',
    Blaziken: '011A',
    Mudkip: '011B',
    Marshtomp: '011C',
    Swampert: '011D',
    Poochyena: '011E',
    Mightyena: '011F',
    Zigzagoon: '0120',
    Linoone: '0121',
    Wurmple: '0122',
    Silcoon: '0132',
    Beautifly: '0124',
    Cascoon: '0125',
    Dustox: '0126',
    Lotad: '0127',
    Lombre: '0128',
    Ludicolo: '0129',
    Seedot: '012A',
    Nuzleaf: '012B',
    Shiftry: '012C',
    Nincada: '012D',
    Ninjask: '012E',
    Shedinja: '012F',
    Taillow: '0130',
    Swellow: '0131',
    Shroomish: '0132',
    Breloom: '0133',
    Spinda: '0134',
    Wingull: '0135',
    Pelipper: '0136',
    Surskit: '0137',
    Masquerain: '0138',
    Wailmer: '0139',
    Wailord: '013A',
    Skitty: '013B',
    Delcatty: '013C',
    Kecleon: '013D',
    Baltoy: '013E',
    Claydol: '013F',
    Nosepass: '0140',
    Torkoal: '0141',
    Sableye: '0142',
    Barboach: '0143',
    Whiscash: '0144',
    Luvdisc: '0145',
    Corphish: '0146',
    Crawdaunt: '0147',
    Feebas: '0148',
    Milotic: '0149',
    Carvanha: '014A',
    Sharpedo: '014B',
    Trapinch: '014C',
    Vibrava: '014D',
    Flygon: '014E',
    Makuhita: '014F',
    Hariyama: '0150',
    Electrike: '0151',
    Manectric: '0152',
    Numel: '0153',
    Camerupt: '0154',
    Spheal: '0155',
    Sealeo: '0156',
    Walrein: '0157',
    Cacnea: '0158',
    Cacturne: '0159',
    Snorunt: '015A',
    Glalie: '015B',
    Lunatone: '015C',
    Solrock: '015D',
    Azurill: '015E',
    Spoink: '015F',
    Grumpig: '0160',
    Plusle: '0161',
    Minun: '0162',
    Mawile: '0163',
    Meditite: '0164',
    Medicham: '0165',
    Swablu: '0166',
    Altaria: '0167',
    Wynaut: '0168',
    Duskull: '0169',
    Dusclops: '016A',
    Roselia: '016B',
    Slakoth: '016C',
    Vigoroth: '016D',
    Slaking: '016E',
    Gulpin: '016F',
    Swalot: '0170',
    Tropius: '0171',
    Whismur: '0172',
    Loudred: '0173',
    Exploud: '0174',
    Clamperl: '0175',
    Huntail: '0176',
    Gorebyss: '0177',
    Absol: '0178',
    Shuppet: '0179',
    Banette: '017A',
    Seviper: '017B',
    Zangoose: '017C',
    Relicanth: '017D',
    Aron: '017E',
    Lairon: '017F',
    Aggron: '0180',
    Castform: '0181',
    Volbeat: '0182',
    Illumise: '0183',
    Lileep: '0184',
    Cradily: '0185',
    Anorith: '0186',
    Armaldo: '0187',
    Ralts: '0188',
    Kirlia: '0189',
    Gardevoir: '018A',
    Bagon: '018B',
    Shelgon: '018C',
    Salamence: '018D',
    Beldum: '018E',
    Metang: '018F',
    Metagross: '0190',
    Regirock: '0191',
    Regice: '0192',
    Registeel: '0193',
    Kyogre: '0194',
    Groudon: '0195',
    Rayquaza: '0196',
    Latias: '0197',
    Latios: '0198',
    Jirachi: '0199',
    Deoxys: '019A',
    Chimecho: '019B',
    // GENERATION 4
    Turtwig: '01B8',
    Grotle: '01B9',
    Torterra: '01BA',
    Chimchar: '01BB',
    Monferno: '01BC',
    Infernape: '01BD',
    Piplup: '01BE',
    Prinplup: '01BF',
    Empoleon: '01C0',
    Starly: '01C1',
    Staravia: '01C2',
    Staraptor: '01C3',
    Bidoof: '01C4',
    Bibarel: '01C5',
    Kricketot: '01C6',
    Kricketune: '01C7',
    Shinx: '01C8',
    Luxio: '01C9',
    Luxray: '01CA',
    Budew: '01CB',
    Roserade: '01CC',
    Cranidos: '01CD',
    Rampardos: '01CE',
    Shieldon: '01CF',
    Bastiodon: '01D0',
    Burmy: '01D1',
    Wormadam: '01D2',
    Mothim: '01D3',
    Combee: '01D4',
    Vespiquen: '01D5',
    Pachirisu: '01D6',
    Buizel: '01D7',
    Floatzel: '01D8',
    Cherubi: '01D9',
    Cherrim: '01DA',
    Shellos: '01DB',
    Gastrodon: '01DC',
    Ambipom: '01DD',
    Drifloon: '01DE',
    Drifblim: '01DF',
    Buneary: '01E0',
    Lopunny: '01E1',
    Mismagius: '01E2',
    Honchkrow: '01E3',
    Glameow: '01E4',
    Purugly: '01E5',
    Chingling: '01E6',
    Stunky: '01E7',
    Skuntank: '01E8',
    Bronzor: '01E9',
    Bronzong: '01EA',
    Bronzor: '01EB',
    MimeJr: '01EC',
    Happiny: '01ED',
    Chatot: '01EE',
    Spiritomb: '01EF',
    Gible: '01F0',
    Gabite: '01F1',
    Garchomp: '01F2',
    Munchlax: '01F3',
    Riolu: '01F4',
    Lucario: '01F5',
    Hippopotas: '01F6',
    Hippowdon: '01F7',
    Skorupi: '01F8',
    Drapion: '01F9',
    Croagunk: '01FA',
    Toxicroak: '01FB',
    Carnivine: '01FC',
    Finneon: '01FD',
    Lumineon: '01FE',
    Mantyke: '01FF',
    Snover: '0200',
    Abomasnow: '0201',
    Weavile: '0202',
    Magnezone: '0203',
    Lickilicky: '0204',
    Rhyperior: '0205',
    Tangrowth: '0206',
    Electivire: '0207',
    Magmortar: '0208',
    Togekiss: '0209',
    Yanmega: '020A',
    Leafeon: '020B',
    Glaceon: '020C',
    Gliscor: '020D',
    Mamoswine: '020E',
    PorygonZ: '020F',
    Gallade: '0210',
    Probopass: '0211',
    Dusknoir: '0212',
    Froslass: '0213',
    Rotom: '0214',
    Uxie: '0215',
    Mesprit: '0216',
    Azelf: '0217',
    Dialga: '0218',
    Palkia: '0219',
    Heatran: '021A',
    Regigigas: '021B',
    Giratina: '021C',
    Cresselia: '021D',
    Phione: '021E',
    Manaphy: '021F',
    Darkrai: '0220',
    Shaymin: '0221',
    Arceus: '0222',
    // GENERATION 5
    Victini: '0223',
    Snivy: '0224',
    Servine: '0225',
    Serperior: '0226',
    Tepig: '0227',
    Pignite: '0228',
    Emboar: '0229',
    Oshawott: '022A',
    Dewott: '022B',
    Samurott: '022C',
    Patrat: '022D',
    Watchog: '022E',
    Lillipup: '022F',
    Herdier: '0230',
    Stoutland: '0231',
    Purrloin: '0232',
    Liepard: '0233',
    Pansage: '0234',
    Simisage: '0235',
    Pansear: '0236',
    Simisear: '0237',
    Panpour: '0238',
    Simipour: '0239',
    Munna: '023A',
    Musharna: '023B',
    Pidove: '023C',
    Tranquill: '023D',
    Unfezant: '023E',
    Blitzle: '023F',
    Zebstrika: '0240',
    Roggenrola: '0241',
    Boldore: '0242',
    Gigalith: '0243',
    Woobat: '0244',
    Swoobat: '0245',
    Drilbur: '0246',
    Excadrill: '0247',
    Audino: '0248',
    Timburr: '0249',
    Gurdurr: '024A',
    Conkeldurr: '024B',
    Tympole: '024C',
    Palpitoad: '024D',
    Seismitoad: '024E',
    Throh: '024F',
    Sawk: '0250',
    Swadloon: '0251',
    Leavanny: '0252',
    Venipede: '0253',
    Whirlipede: '0254',
    Scolipede: '0255',
    Cottonee: '0256',
    Whimsicott: '0257',
    Petilil: '0258',
    Lilligant: '0259',
    Basculin: '025A',
    Sandile: '025B',
    Krokorok: '025C',
    Krookodile: '025D',
    Darumaka: '025E',
    Darmanitan: '025F',
    Maractus: '0260',
    Dwebble: '0261',
    Crustle: '0262',
    Scraggy: '0263',
    Scrafty: '0264',
    Sigilyph: '0265',
    Yamask: '0266',
    Cofagrigus: '0267',
    Tirtouga: '0268',
    Carracosta: '0269',
    Archen: '026A',
    Archeops: '026B',
    Trubbish: '026C',
    Garbodor: '026D',
    Zorua: '026E',
    Zoroark: '026F',
    Minccino: '0270',
    Cinccino: '0271',
    Gothita: '0272',
    Gothorita: '0273',
    Gothitelle: '0274',
    Solosis: '0275',
    Duosion: '0276',
    Reuniclus: '0277',
    Ducklett: '0278',
    Swanna: '0279',
    Vanillite: '027A',
    Vanillish: '027B',
    Vanilluxe: '027C',
    Deerling: '027D',
    Sawsbuck: '027E',
    Emolga: '027F',
    Karrablast: '0280',
    Escavalier: '0281',
    Foongus: '0282',
    Amoonguss: '0283',
    Frillish: '0284',
    Jellicent: '0285',
    Alomomola: '0286',
    Joltik: '0287',
    Galvantula: '0288',
    Ferroseed: '0289',
    Ferrothorn: '028A',
    Klink: '028B',
    Klang: '028C',
    Klingklang: '028D',
    Tynamo: '028E',
    Eelektrik: '028F',
    Eelektross: '0290',
    Elgyem: '0291',
    Beheeyem: '0292',
    Litwick: '0293',
    Lampent: '0294',
    Chandelure: '0295',
    Axew: '0296',
    Fraxure: '0297',
    Haxorus: '0298',
    Cubchoo: '0299',
    Beartic: '029A',
    Cryogonal: '029B',
    Shelmet: '029C',
    Accelgor: '029D',
    Stunfisk: '029F',
    Mienfoo: '02A1',
    Mienshao: '02A2',
    Druddigon: '02A3',
    Golett: '02A4',
    Golurk: '02A5',
    Pawniard: '02A6',
    Bisharp: '02A7',
    Bouffalant: '02A8',
    Rufflet: '02A9',
    Braviary: '02AA',
    Vullaby: '02AB',
    Mandibuzz: '02AC',
    Heatmor: '02AD',
    Durant: '02AE',
    Deino: '02AF',
    Zweilous: '02B0',
    Hydreigon: '02B1',
    Larvesta: '02B2',
    Volcarona: '02B3',
    Cobalion: '02B4',
    Terrakion: '02B5',
    Virizion: '02B6',
    Tornadus: '02B7',
    Thundurus: '02B8',
    Reshiram: '02B9',
    Zekrom: '02BA',
    Landorus: '02BB',
    Kyurem: '02BC',
    Keldeo: '02BD',
    Meloetta: '02BE',
    Genesect: '02BF',
    // GENERATION 6
    Chespin: '02F6',
    Quilladin: '02F7',
    Chesnaught: '02F8',
    Fennekin: '02F9',
    Braixen: '02FA',
    Delphox: '02FB',
    Froakie: '02FC',
    Frogadier: '02FD',
    Greninja: '02FE',
    Bunnelby: '02FF',
    Diggersby: '0300',
    Fletchling: '0301',
    Fletchinder: '0302',
    Talonflame: '0303',
    Scatterbug: '0304',
    Spewpa: '0305',
    Vivillion: '0306',
    Litleo: '0307',
    Pyroar: '0308',
    Flabebe: '0309',
    Floette: '030A',
    Florges: '030B',
    Skiddo: '030C',
    Gogoat: '030D',
    Pancham: '030E',
    Pangoro: '030F',
    Furfrou: '0310',
    Espurr: '0311',
    Meowstic: '0312',
    Honedge: '0313',
    Doublade: '0314',
    Aegislash: '0315',
    Spritzee: '0316',
    Aromatisse: '0317',
    Swirlix: '0318',
    Slurpuff: '0319',
    Inkay: '031A',
    Malamar: '031B',
    Binacle: '031C',
    Barbaracle: '031D',
    Skrelp: '031E',
    Dragalge: '031F',
    Clauncher: '0320',
    Clawitzer: '0321',
    Helioptile: '0322',
    Heliolisk: '0323',
    Tyrunt: '0324',
    Tyrantrum: '0325',
    Amaura: '0326',
    Aurorus: '0327',
    Sylveon: '0328',
    Hawlucha: '0329',
    Dedenne: '032A',
    Carbink: '032B',
    Goomy: '032C',
    Sliggoo: '032D',
    Goodra: '032E',
    Klefki: '032F',
    Phantump: '0330',
    Trevenant: '0331',
    Pumpkaboo: '0332',
    Gourgeist: '0333',
    Bergmite: '0334',
    Avalugg: '0335',
    Noibat: '0336',
    Noivern: '0337',
    Xerneas: '0338',
    Yveltal: '0339',
    Zygarde: '033A',
    Diancie: '033B',
    Hoopa: '033C',
    Volcanion: '033D',
    // GENERATION 7
    Rowlet: '03AB',
    Dartrix: '03AC',
    Decidueye: '03AD',
    Litten: '03AE',
    Torracat: '03AF',
    Incineroar: '03B0',
    Popplio: '03B1',
    Brionne: '03B2',
    Primarina: '03B3',
    Pikipek: '03B4',
    Trumbeak: '03B5',
    Toucannon: '03B6',
    Yungoos: '03B7',
    Gumshoos: '03B8',
    Grubbin: '03B9',
    Charjabug: '03BA',
    Vikavolt: '03BB',
    Crabrawler: '03BC',
    Crabominable: '03BD',
    Oricorio: '03BE',
    Cutiefly: '03BF',
    Ribombee: '03C0',
    Rockruff: '03C1',
    Lycanroc: '03C2',
    Wishiwashi: '03C3',
    Mareanie: '03C4',
    Toxapex: '03C5',
    Mudbray: '03C6',
    Mudsdale: '03C7',
    Dewpider: '03C8',
    Araquanid: '03C9',
    Fomantis: '03CA',
    Lurantis: '03CB',
    Morelull: '03CC',
    Shiinotic: '03CD',
    Salandit: '03CE',
    Salazzle: '03CF',
    Stufful: '03D0',
    Bewear: '03D1',
    Bounsweet: '03D2',
    Steenee: '03D3',
    Tsareena: '03D4',
    Comfey: '03D5',
    Oranguru: '03D6',
    Passimian: '03D7',
    Wimpod: '03D8',
    Golisopod: '03D9',
    Sandygast: '03DA',
    Palossand: '03DB',
    Pyukumuku: '03DC',
    Typenull: '03DD',
    Silvally: '03DE',
    Minior: '03DF',
    Komala: '03E0',
    Turtonator: '03E1',
    Togedemaru: '03E2',
    Mimikyu: '03E3',
    Bruxish: '03E4',
    Drampa: '03E5',
    Dhelmise: '03E6',
    Jangmoo: '03E7',
    Hakamoo: '03E8',
    Kommoo: '03E9',
    TapuKoko: '03EA',
    TapuLele: '03EB',
    TapuBulu: '03EC',
    TapuFini: '03ED',
    Cosmog: '03EE',
    Cosmoem: '03EF',
    Solgaleo: '03F0',
    Lunala: '03F1',
    Nihilego: '03F2',
    Buzzwole: '03F3',
    Pheromosa: '03F4',
    Xurkitree: '03F5',
    Celesteela: '03F6',
    Kartana: '03F7',
    Guzzlord: '03F8',
    Necrozma: '03F9',
    Magearna: '03FA',
    Marshadow: '03FB',
  };

  // Prompt the user for a Pokémon name
  const inputName = prompt('Enter a Pokémon name:');

  // Convert the input name to have the first letter in uppercase and the rest in lowercase
  const formattedName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

  // Look up the code for the entered name
  const code = pokemonMap[formattedName];

  if (code) {
    alert(
      `The code for ${formattedName} is:\n\n000014D1 000A\n8202404C ${code}`
    );
  } else {
    alert(`Pokemon not found.`);
  }
}

// Add a click event listener to the button element
runButton.addEventListener('click', runScript);
