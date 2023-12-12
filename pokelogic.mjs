import getBuild from './getbuild.mjs';
async function pokeLogic(selectedPokemon) {
    if (selectedPokemon) {
        var mons = selectedPokemon
    } else {
        var mons = ["Snorlax", "KangasKhan", "Maushold", "Arcanine", "Charizard", "Ceruledge", "Hitmontop", "Annihilape", "Lucario", "Blastoise", "Feraligatr", "Politoed", "Gyarados",
        "Dragonite", "Corviknight", "Breloom", "Ludicolo", "Torterra", "Venusaur", "Drapion", "Clodsire", "Raichu", "Jolteon", "Ampharos", "Swampert", "Garchomp", "Gardevoir", "Espeon", "Metagross", "Golem", "Tyranitar",
        "Shuckle", "Lapras", "Cetitan", "ninetales-alola", "Scizor", "Heracross", "Shedinja", "Goodra", "Druddigon",
        "Dracovish", "Gengar", "Gholdengo", "Dusknoir", "Umbreon", "Obstagoon", "KingGambit",
        "Empoleon", "Aggron", "sandslash-alola", "Azumarill", "Sylveon", "Dachsbun"]
    }

    var types = {
        "Snorlax": ["Normal"], 
        "KangasKhan": ["Normal"], 
        "Maushold": ["Normal"], 
        "Arcanine": ["Fire"], 
        "Charizard": ["Fire", "Flying"], 
        "Ceruledge": ["Fire", "Ghost"], 
        "Hitmontop": ["Fighting"], 
        "Annihilape": ["Fighting", "Ghost"], 
        "Lucario": ["Fighting", "Steel"], 
        "Blastoise": ["Water"], 
        "Feraligatr": ["Water"], 
        "Politoed": ["Water"], 
        "Gyarados": ["Water", "Flying"], 
        "Dragonite": ["Dragon", "Flying"], 
        "Corviknight": ["Flying", "Steel"], 
        "Breloom": ["Grass", "Fighting"], 
        "Ludicolo": ["Grass", "Water"], 
        "Torterra": ["Grass", "Ground"], 
        "Venusaur": ["Grass", "Poison"], 
        "Drapion": ["Poison", "Dark"], 
        "Clodsire": ["Poison", "Ground"], 
        "Raichu": ["Electric"], 
        "Jolteon": ["Electric"], 
        "Ampharos": ["Electric"], 
        "Swampert": ["Ground", "Water"], 
        "Phanpy": ["Ground"], 
        "Garchomp": ["Ground", "Dragon"], 
        "Gardevoir": ["Psychic", "Fairy"], 
        "Espeon": ["Psychic"], 
        "Metagross": ["Psychic", "Steel"], 
        "Golem": ["Rock", "Ground"], 
        "Tyranitar": ["Rock", "Dark"], 
        "Shuckle": ["Rock", "Bug"], 
        "Lapras": ["Water", "Ice"], 
        "Cetitan": ["Ice"], 
        "ninetales-alola": ["Ice", "Fairy"], 
        "Scizor": ["Steel", "Bug"], 
        "Heracross": ["Bug", "Fighting"], 
        "Shedinja": ["Bug"], 
        "Goodra": ["Dragon"], 
        "Druddigon": ["Dragon", "Flying"], 
        "Dracovish": ["Dragon", "Water"], 
        "Gengar": ["Ghost", "Poison"], 
        "Gholdengo": ["Ghost", "Steel"], 
        "Dusknoir": ["Ghost"], 
        "Umbreon": ["Dark"], 
        "Obstagoon": ["Dark", "Normal"], 
        "KingGambit": ["Dark", "Steel"], 
        "Empoleon": ["Water", "Steel"], 
        "Aggron": ["Steel"], 
        "sandslash-alola": ["Steel", "Ice"], 
        "Azumarill": ["Water", "Fairy"], 
        "Sylveon": ["Fairy"], 
        "Dachsbun": ["Fairy"]
    }
    var randMons = mons.sort(() => Math.random() - 0.5)
    var i = 0
    var loadouts = ""
    return new Promise(async (resolve, reject) => {
        for (const curMon of randMons) {
            if (i >= 6){
                break;
            }
            try {
                var load = await getBuild(curMon['name']);
                if (load !== '') {
                    loadouts = loadouts.concat(load + '\n')
                    i++
                }
            } catch (error){
                console.log("Can't find build for", curMon['name']);
            }
                
        }
        resolve(loadouts)
    })
}
window.pokeLogic = pokeLogic;




//UNIQUE TYPING VARIANT
//     var newtypes = []
//     var randMons = mons.sort(() => Math.random() - 0.5)
//     var i = 0
//     var loadouts = ""
//     return new Promise(async (resolve, reject) => {
//         for (const curMon of randMons) {
//             if (i >= 6){
//                 break;
//             }
//             //make sure that the new pokemon's types are unique to the team
//             var type = types[curMon]
//             var addToTeam = true
//             var newtypesinterim = []
//             for (var k in type){
//                 if (newtypes.includes(type[k])){
//                     addToTeam = false
//                     break
//                 }
//                 else{
//                     newtypesinterim.push(type[k])
//                 }
//             }
//             if (addToTeam) {
//                 try {
//                     var load = await getBuild(curMon);
//                     if (load !== '') {
//                         loadouts = loadouts.concat(load + '\n')
//                         newtypes.push(newtypesinterim)
//                         i++
//                     }
//                 } catch (error){
//                     //console.log("Can't find build for", curMon);
//                 }
                
//             }
        
//         }
//         resolve(loadouts)
//     })
// }
// window.pokeLogic = pokeLogic;
