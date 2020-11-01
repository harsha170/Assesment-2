
let recipeUrl = "https://api.edamam.com/search?q=pasta&app_id=6b15cc92&app_key=e23e6f993213c48100b62b908d7b02d6";
const fetchlisting = (Url) => {
    fetch(Url)
        .then((result)=>{
            return result.json()
        })
        .then((res)=>{
            const oldresults = document.getElementById("listings");
            if (oldresults !== null) {
                oldresults.remove();
            }
            var content = document.createElement('div');
            var parent = document.getElementById('results');
            content.setAttribute("class", "row");
            content.setAttribute("id", "listings");
            parent.appendChild(content);
            res.hits.map((details, index)=>{  
                $(document).ready(function(){
                    $('[data-toggle="popover"]').popover(); 
                    });
                    
                content.innerHTML +=`
                <div class="card col-sm-3" style="width: 18rem;">
                    <div class="row">
                        <div class="col-sm">
                            <img src="${details.recipe.image}" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">${details.recipe.label}</h5>
                                <div id="popovers">
                                    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${details.recipe.healthLabels}">
                                        Health Labels
                                    </button>

                                    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${details.recipe.ingredientLines}">
                                        Ingridients List
                                    </button>
                                </div>
                                <div id="popovers">
                                    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${details.recipe.calories}" >
                                        Calories
                                </div>
                        </div>
                    </div>
                </div>`;
            })
        })
        .catch((err)=>{
            console.log(err)
        })
}


fetchlisting(recipeUrl);
var searchButton = document.getElementsByClassName('searchButton')[0];
var searchinput = document.getElementsByClassName('inputSearch')[0];

//$('[data-toggle="popover"]').popover();    

searchButton.onclick = () => {
    const inputSearch =  searchinput.value ;
    fetchlisting(`https://api.edamam.com/search?q=${inputSearch}&app_id=6b15cc92&app_key=e23e6f993213c48100b62b908d7b02d6`);
}



