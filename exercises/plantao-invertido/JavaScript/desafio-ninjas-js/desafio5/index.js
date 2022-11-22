const names = `Abelhinha	Babalu	Bebeca	Bidu	Boneca	Buzzi
Aguia	Babi	Bebel	Big	Bonny	Cacá
Alf	Bacon	Becki	Bimbo	Boomer	Cacau
Alfa	Baixinha	Bela	Bingo	Brisa	Caco
Algodão	Baleia	Belle	Biruta	Bruxinha	Café
Almofadinhas	Balu	Belo	Biscuí	Bubaloo	Calvin
Amor	Bambi	Berry	Bito	Buda	Candy
Amora	Bandit	Bessie	Biula	Buffy	Capitu
Amy	Banny	Best	Blitz	Buggy	Capucho
Andy	Banzé	Betsy	Bola	Bummer	Cebolinha
Angel	Batata	Bibbo	Bolota	Bunny	Ceci
Charge	Chokito	Colosso	Digo	Duda	Estufa
Charlie	Chuca	Cometa	Dinamite	Dudu	Fada
Cherry	Chumbinho	Cookie	Dingo	Dufy	Fafá
Chewie	Chuvisco	Cósmico	Dino	Duke	Faísca
Chiclete	Clara	Costelinha	Diva	Dundum	Fanta
Chico	Cloe	Cowboy	Dog	Duquesa	Feijão
Chila	Cobbie	Cuca	Dolly	Elfy	Felix
Chipie	Cobby	Dama	Dora	Emma	Feliz
Chiquinha	Coca	Dandy	Dori	Esperança	Fidji
Chiquita	Cocada	Dengosa	Drica	Espoleta	Fifi
Chocotone	Coldie	Dengoso	Duck	Estrela	Filó
Finho	Fly	Gordo	Jade	Julie	Kitty
Fininha	Fofa	Gorky	Jango	Juquinha	Lala
Fink	Fofão	Halley	Jenny	Kadu	Lali
Fiona	Fofo	Hannah	Jerry	Kaila	Leka
Flappy	Fofucha	Happy	Jessie	Kia	Lessy
Flock	Fubá	Harry	Jimmy	Kiara	Levy
Flofy	Fumaça	Haven	Joaninha	Kika	Lia
Floquinho	Gigi	High	Joca	Kiko	Lidy
Floribella	Ginger	Hinna	Juju	Kim	Lila
Florinda	Godiva	Honey	Jujuba	Kinder	Lili
Flufi	Gorda	Ikki	Juli	Kininha	Lilica
Lully	Melado	Mind	Nanny	Ollie	Pimpão
Lulu	Melany	Mini	Nego	Oscar	Pinduca
Luz	Melody	Mink	Nescau	Otto	Pingo
Mabel	Mia	Minuxa	Nice	Oz	Pink
Maggie	Mick	Molli	Nick	Paçoca	Pipoca
Maia	Mila	Moranguinho	Nico	Panda	Pirata
Malu	Milady	Mucho	Nina	Pandora	Piruca
Manu	Mille	Muffie	Ninja	Panqueca	Pirueta
Mara	Milu	Mulli	Nino	Peteca	Pit
Meg	Mimi	Nanda	Noel	Peteleco	Pita
Mel	Mina	Nanico	Nully	Petit	Pitoco
Puff	Sniff	Tessy	Totó	Zazu	Lilo
Puppy	Snow	Teteu	Tufo	Zeca	Lily
Rabito	Snuffles	Tico	Tullipa	Zezinho	Linda
Radar	Soneca	Timmy	Tutti	Zilu	Little
Ralph	Sushi	Tina	Ulli	Zuca	Lizzie
Rick	Suzi	Tobby	Ursinho	Pituca	Lua
Ringo	Tambor	Toddy	Vicky	Pitucha	Luana
Ritchie	Tato	Tom	Vida	Pituquinho	Luar
Sally	Tatty	Tommy	Will	Pity	Luck
Samy	Teddy	Toquinho	Willie	Polly	Lucy
Sandy	Teka	Toro	Zazá	Pompom	Luli
Pongo	Poof	Popó	Princesa	Pudim	Pippo`


// Solução 1
console.log(names.split('\t').join('\n').split('\n'))

// Solução 2
console.log(names.split(/\s+/))


// names.split('\n').forEach((string) => console.log(string))
// console.log(names.split('\n').forEach((string) => console.log(string.split('\t'))))
