/* inicio */
let cubes;
const table = document.querySelector(".table");
const userOption = document.querySelector(".config > .gridSize");
main();

function createBlock(e, cube)
{
    cubes = document.querySelectorAll(".cube");
    console.log(e);
    if(e == undefined) return;

    console.log(e.button);
    
    if(e.altKey == true)
    {
        cube.style.backgroundColor = "black";
        cube.classList.add("clicked");
    }
    else if(e.ctrlKey == true)
    {
        cube.style.backgroundColor = "white";
        cube.classList.remove("clicked");
        return;
    }  
}

function generateGrid(table, userOption)
{
    table.innerHTML = '';

    table.style.gridTemplateColumns = `repeat(${userOption}, 1fr)`;

    for(let i = 0; i < userOption**2; i++)
    {
        const newDiv = document.createElement('div');
        newDiv.classList.add("cube");

        //newDiv.style.width = 100 / userOption;
        //newDiv.style.height = 100 / userOption;
        newDiv.style.rowGap = 1;
        //newDiv.style.backgroundColor = "blue";

        table.append(newDiv);
    }
}


function main()
{
    /* tabela inicial */
    generateGrid(table, userOption.value);

    /* selecionar cubos */
    cubes = document.querySelectorAll(".cube");
    cubes.forEach( (cube) => {
        cube.addEventListener("pointermove", e => 
            {
                createBlock(e, cube);
            }
        )
    });
}

userOption.addEventListener("change", () => {
    main();
});