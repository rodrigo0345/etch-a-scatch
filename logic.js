function changeCubeState(e)
{
    console.log(e)

    if( this.classList.contains("clicked") )
    {
        this.classList.remove("clicked");
        return;
    }
    
    this.classList.add("clicked");
}

function generateGrid(table, userOption)
{
    for(let i = 0; i < userOption ** 2; i++)
    {
        const newDiv = document.createElement('div');
        newDiv.classList.add("cube");
        const style = newDiv.getAttribute("style");
        console.log(style);
        style.add(`height: ${1000 / userOption}; width: ${1000 / userOption};`);
        table.append(newDiv);
    }
}

const table = document.querySelector(".table");
const cubes = document.querySelectorAll(".cube");
const userOption = document.getElementById("gridSize").value;

generateGrid(table, userOption);

if(cubes != undefined)
{
    cubes.forEach(cube => {
        cube.addEventListener("mouseover", changeCubeState)
    });
}
