import requests
import json

def fetch_pokemon_data(limit=2000):
    # Fetch data from the PokeAPI
    api_url = f'https://pokeapi.co/api/v2/pokemon?limit={limit}'
    response = requests.get(api_url)

    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Extract relevant information
        pokemon_data = []
        for i, pokemon in enumerate(data['results']):
            pokemon_id = i + 1
            pokemon_name = pokemon['name']
            pokemon_image_url = f'images/pokemon/{pokemon_id}.png'

            # Append data to the list
            pokemon_data.append({
                'id': pokemon_id,
                'name': pokemon_name,
                'image': pokemon_image_url
            })

        return pokemon_data
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        return []

def save_to_json(data, filename='pokedata.json'):
    # Save the data to a JSON file
    with open(filename, 'w') as file:
        json.dump(data, file, indent=2)

def main():
    # Fetch Pokemon data
    pokemon_data = fetch_pokemon_data()

    if pokemon_data:
        # Save data to a JSON file
        save_to_json(pokemon_data, 'pokedata.json')
        print(f"Pokemon data saved to pokedata.json")
    else:
        print("No Pokemon data fetched.")

if __name__ == "__main__":
    main()
