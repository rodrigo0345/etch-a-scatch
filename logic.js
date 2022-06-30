let cubes;

function changeCubeState(e)
{
    cubes = document.querySelectorAll(".cube");

    if(e == undefined) return;

    if( this.classList.contains("clicked") )
    {
        this.style.backgroundColor = "red";
        this.classList.remove("clicked");
        return;
    }
    
    this.style.backgroundColor = "blue";
    this.classList.add("clicked");
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
    cubes = document.querySelectorAll(".cube");

    cubes.forEach( (cube) => {
        cube.addEventListener("mouseenter", changeCubeState);
    });
}

const table = document.querySelector(".table");
const userOption = document.querySelector(".config > .gridSize");

main();

userOption.addEventListener("change", () => {
    main();
});



