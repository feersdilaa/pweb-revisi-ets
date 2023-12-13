function loadData() {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) =>response.json())
        .then((data) => {
            if (data.hasOwnProperty('results')) {
                var pokemon = data.results;
            }
                let output = "";
                pokemon.forEach(value => {
                const firstNamePokemonHurufBesar = value.name.charAt(0).toUpperCase() + value.name.slice(1);
                output += `
                <div class="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <div class="card border-primary shadow py-2">
                      <div class="card-body">
                        <div class="row no-gutters">
                          <div class="col mr-0">
                            <div class="h5 mb-2 mr-0 font-weight-bold text-gray-800">${firstNamePokemonHurufBesar}</div>
                            <a href="${value.url}" class="btn btn-primary btn-user">
                                Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
                });
                document.querySelector('.row').innerHTML = output;
        });
    }
loadData();