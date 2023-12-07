export default function getBuild(pokename) {
    return new Promise((resolve) => {
        const apiUrl = `https://mejemlm0y4.execute-api.us-west-2.amazonaws.com/default/PokemonFetcher?pokemon=${pokename}`;
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    // Resolve with an empty string in case of an error
                    resolve('');
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                try {
                    var strat = data['strategies'][0]['movesets']['0'];
                    var name = strat['pokemon'];
                    var item = strat['items'][0];
                    var ability = strat['abilities'][0];
                    var tera = strat['teratypes'][0];
                    var nature = strat['natures'];
                    var move1 = strat['moveslots'][0][0]['move'];
                    var move2 = strat['moveslots'][1][0]['move'];
                    var move3 = strat['moveslots'][2][0]['move'];
                    var move4 = strat['moveslots'][3][0]['move'];
                    var evs = strat['evconfigs'][0];
                    var evsstr = '';
                    // Format EVs for paste
                    for (let i = 0; i < Object.keys(evs).length; i++) {
                        var key = Object.keys(evs)[i];
                        if (evs[key] != 0) {
                            evsstr += ' / ' + evs[key] + ' ' + key;
                        }
                    }
                    evsstr = evsstr.slice(3,);
                    var paste = name + ' @ ' + item + '\n' + 'Ability: ' + ability + '\n' + 'EVs: ' + evsstr + '\n' + 'Tera Type: ' + tera + '\n' + nature + ' Nature\n- ' + move1 + '\n- ' + move2 + '\n- ' + move3 + '\n- ' + move4 + '\n';
                    resolve(paste);
                } catch (error) {
                    // Resolve with an empty string if a build is not found
                    resolve('');
                }
            })
            .catch((error) => {
                // Handle errors during the fetch
                console.error('Error during fetch:', error);
                // Resolve with an empty string in case of an error
                resolve('');
            });
    });
}
window.getBuild = getBuild;
