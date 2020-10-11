import "./styles.css";

document.getElementById("board").innerHTML = ``;

var count = 0;

var board = document.getElementById("board");

function createTable() {
  var table = document.createElement("table");

  for (var r = 0; r < 5; r++) {
    var table_row = table.insertRow();
    for (var c = 0; c < 5; c++) {
      var table_cell = table_row.insertCell();
      var cell_text = document.createTextNode("");
      table_cell.appendChild(cell_text);
    }
  }
  board.appendChild(table);
  onClick(table);
}

function onClick(table) {
  for (var tab = 0; tab < table.rows.length; tab++) {
    for (var i = 0; i < table.rows[tab].cells.length; i++) {
      table.rows[tab].cells[i].onclick = function () {
        fillCell(table, this);
      };
    }
  }
}

function fillCell(table, table_cell) {
  count++;
  if (count % 2 === 0) {
    if (table_cell.innerHTML === "") {
      table_cell.innerHTML = "o";
    } else {
      alert("This cell is already taken");
      count--;
    }
  } else {
    if (table_cell.innerHTML === "") {
      table_cell.innerHTML = "x";
    } else {
      alert("This cell is already taken");
      count--;
    }
  }
  checkWin(table);
  checkDraw(table);
}

function checkWin(table) {
  var mark = ["x", "o"];

  for (var i = 0; i < 2; i++) {
    var lin1 = 0;
    var lin2 = 0;
    var lin3 = 0;
    var lin4 = 0;
    var lin5 = 0;
    var hor1 = 0;
    var hor2 = 0;
    var hor3 = 0;
    var hor4 = 0;
    var hor5 = 0;
    var dia1 = 0;
    var dia2 = 0;

    for (var tab = 0; tab < 5; tab++) {
      if (table.rows[tab].cells[0].innerHTML === mark[i]) {
        lin1++;
      }
      if (table.rows[tab].cells[1].innerHTML === mark[i]) {
        lin2++;
      }
      if (table.rows[tab].cells[2].innerHTML === mark[i]) {
        lin3++;
      }
      if (table.rows[tab].cells[3].innerHTML === mark[i]) {
        lin4++;
      }
      if (table.rows[tab].cells[4].innerHTML === mark[i]) {
        lin5++;
      }
      if (table.rows[0].cells[tab].innerHTML === mark[i]) {
        hor1++;
      }
      if (table.rows[1].cells[tab].innerHTML === mark[i]) {
        hor2++;
      }
      if (table.rows[2].cells[tab].innerHTML === mark[i]) {
        hor3++;
      }
      if (table.rows[3].cells[tab].innerHTML === mark[i]) {
        hor4++;
      }
      if (table.rows[4].cells[tab].innerHTML === mark[i]) {
        hor5++;
      }
      if (table.rows[tab].cells[tab].innerHTML === mark[i]) {
        dia1++;
      }
      var reverse = 4 - tab;
      if (table.rows[tab].cells[reverse].innerHTML === mark[i]) {
        dia2++;
      }
      if (
        lin1 === 5 ||
        lin2 === 5 ||
        lin3 === 5 ||
        lin4 === 5 ||
        lin5 === 5 ||
        hor1 === 5 ||
        hor2 === 5 ||
        hor3 === 5 ||
        hor4 === 5 ||
        hor5 === 5 ||
        dia1 === 5 ||
        dia2 === 5
      ) {
        if (mark[i] === "x") {
          alert("Player 1 won!");
        }
        if (mark[i] === "o") {
          alert("Player 2 won!");
        }
        clearTable(table);
      }
    }
  }
}

function checkDraw(table) {
  var draw_count = 0;

  for (var tab = 0; tab < table.rows.length; tab++) {
    for (var i = 0; i < table.rows[tab].cells.length; i++) {
      if (
        table.rows[tab].cells[i].innerHTML === "x" ||
        table.rows[tab].cells[i].innerHTML === "o"
      ) {
        draw_count++;
      }
    }
  }
  if (draw_count === 25) {
    alert("It's a draw!");
    clearTable(table);
  }
}

function clearTable(table) {
  for (var tab = 0; tab < table.rows.length; tab++) {
    for (var i = 0; i < table.rows[tab].cells.length; i++) {
      table.rows[tab].cells[i].innerHTML = "";
    }
  }
}

createTable();
