/* variables */
let cubes;
let table;
let userGridSize;
let userDrawMode;
let userColor;

/* functions */
function updateGridSize()
{
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

            table.append(newDiv);
        }
    }

    generateGrid(table, userGridSize.value);

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

function updateColor()
{

}

(() => {
    table = document.querySelector(".table");
    userGridSize = document.querySelector(".config .gridSize");
    userColor = document.querySelector(".config .colorSelected");
    userDrawMode = document.querySelector(".config .drawMode");

    console.log(userColor.value + ": " + userDrawMode.value);

    /* tabela inicial */
    updateGridSize();
    userGridSize.addEventListener("change", () => {
        updateGridSize();
    });
    
})();



function createBlock(e, cube)
{
    cubes = document.querySelectorAll(".cube");
    console.log(e);
    if(e == undefined) return;

    console.log(e.button);
    
    if(e.altKey == true)
    {
        cube.style.backgroundColor = userColor.value;
    }
    else if(e.ctrlKey == true)
    {
        cube.style.backgroundColor = "white";
        return;
    }  
}






