const table$$ = document.querySelector('[data-function="board"]');
const attempts$$ = document.querySelector('[data-function="attempts"]')
const imgXUrl = './assets/x.png';
const imgChestUrl = './assets/chest.png';
const imgSkullUrl = './assets/skull.png';

let gameOver;

const genTable = () => {
    gameOver = false;
    let rowsPrompt$$ = prompt('Introduce el número de filas.');
    let colPrompt$$ = prompt('Introduce el número de columnas.');
    
    // Genera posición aleatoria del tesoro
    let randomRow$$ = Math.floor(Math.random() * (rowsPrompt$$ - 1) + 1);
    let randomCol$$ = Math.floor(Math.random() * (colPrompt$$ - 1) + 1);

    for (let i = 0; i < rowsPrompt$$; i++) {
        let rows$$ = document.createElement('tr');
        rows$$.classList.add(`row${i+1}`);

        for (let j = 0; j < colPrompt$$; j++) {
            let col$$ = document.createElement('td'); 
            col$$.classList.add(`col${j+1}`);
            col$$.innerHTML = `<img src="${imgXUrl}">`;
            rows$$.appendChild(col$$); 

            col$$.addEventListener('click', () => {
                attempts$$.textContent = Number(attempts$$.textContent) + 1;
                if(col$$.classList == `col${randomCol$$}` && rows$$.classList == `row${randomRow$$}`) {
                    col$$.innerHTML = `<img src="${imgChestUrl}">`;
                    setTimeout(() => {
                        alert("¡Enhorabuena. Has ganado!");
                        }, 300);
                    gameOver = true;
                    // CÓMO HAGO PARA VOLVER AL TABLERO DE 0????
                    setTimeout(() => genTable(), 500)    
                } else {
                    col$$.innerHTML = `<img src="${imgSkullUrl}">`;
                }
            })  
        }
        table$$.appendChild(rows$$);  
    };
}
genTable();







