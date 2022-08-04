/*
Matriz: A matriz é uma representação de dados, geralmente numéricos, divididos por linhas e colunas. 
Uma matriz é representada da forma Amxn. Assim, temos a matriz A, que possui m linhas e n colunas. 
A matriz M3x3, por exemplo, possui três linhas e três colunas.
*/

const matriz = (number) => {
    for (let i = 1; i <= number; i++) {
        let linha = '';

        for (let j = 1; j <= number; j++) {
            linha = linha + ' ' + number
        }                                   

        console.log(`${linha}`);
    }
}

matriz(3)