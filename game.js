// The game will be here

/* REGRAS

1 - Tabuleiro com 9 espaços em uma grelha 3X3

2 - 2 jogadores um X e outro O

3 - o primeiro a completar 3 em linha ganha */

// test
let grelha = [
  [, ,],
  [, ,],
  [, ,],
];

let turno = 1;

// REGRA 1 //
/* Será criado um array multidimensional composto por 3 arrays. 
   Cada array equivalerá a uma linha da grelha
*/
function start() {
  // reset the grid
  grelha = [
    [, ,],
    [, ,],
    [, ,],
  ];
}

function playTurn(coordX, coordY) {
  if (turno % 2 == 0) {
    grelha[coordX][coordY] = "O";
  } else {
    grelha[coordX][coordY] = "X";
  }
  turno++;
}

playTurn(2, 2);

function checkGrid() {
  for (let i = 0; i < 3; i++) {
    // Validate horizontal lines
    if (grelha[i][0] == grelha[i][1] && grelha[i][1] == grelha[i][2]) {
      return true;
    }

    // Validate vertical lines
    if (grelha[0][i] == grelha[1][i] && grelha[1][i] == grelha[2][i]) {
      return true;
    }
  }
  // Validate diagonal lines
  if (grelha[0][0] == grelha[1][1] && grelha[1][1] == grelha[2][2]) {
    return true;
  }
  if (grelha[0][2] == grelha[1][1] && grelha[1][1] == grelha[2][0]) {
    return true;
  }
}

// REGRA 2 //

/* Cada jogada é intercalada (começa o jogador 1 e de seguida joga o jogador 2).
   Sempre que um jogador clicar sobre um quadrado em branco, esse quadrado deverá ficar marcado com 
   um símbolo (X ou O). Se esse espaço já estiver preenchido, o programa não deverá fazer nada.
   O primeiro click é o jogador 1 (impar) e o segundo click é o jogador 2 (par). */

//  REGRA 3 //

/* O jogo termina nas seguintes condições:
   1 - Quando qualquer um dos jogadores preenche os 3 quadrados (com X ou O) em qualquer uma das direcções;
   2 - Quando todos os quadrados são preenchidos sem os 3 símbolos (X ou O) em simultâneo;
   3 - Quando é accionado o botão "reset"; */
