/* variables */
let cubes;
let table;
let userGridSize;
let userDrawMode;
let userColor;
let userTouch = false;

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
    function paintBlock(e, cube)
    {
        cubes = document.querySelectorAll(".cube");
        
        if(e == undefined) return;
        e.preventDefault();

        console.log(userDrawMode.value);
        if(userTouch == true && userDrawMode.value == 'pencil')
        {
            cube.style.backgroundColor = userColor.value;
        }
        else if(userTouch == true && userDrawMode.value == 'rubber')
        {
            cube.style.backgroundColor = "white";
            return;
        }  
    }

    generateGrid(table, userGridSize.value);

    /* selecionar cubos */
    cubes = document.querySelectorAll(".cube");
    cubes.forEach( (cube) => {
        cube.addEventListener("pointermove", e => 
            {
                paintBlock(e, cube);
            }
        )
    });
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
    window.addEventListener("pointerdown", () =>{
        userTouch = true;
    });
    window.addEventListener("pointerup", () =>{
        userTouch = false;
    });
})();










