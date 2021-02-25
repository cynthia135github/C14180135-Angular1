import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  output: String[][];

  winner = 0;
  flagpemain = 1;
  baris = 0;
  kolom = 0;

  player1 = 0;
  player2 = 0;

  constructor() {
    this.output = [];

    for (var brs: number = 0; brs < 5; brs++) {
      this.output[brs] = [];
      for (var klm: number = 0; klm < 5; klm++) {
        this.output[brs][klm] = "*";
      }
    }
  }

  InputPlayer() {
    //alert(this.output[0][1]);
    if (this.baris > 0) {
      this.baris -= 1;
    }
    if (this.kolom > 0) {
      this.kolom -= 1;
    }

    if (this.flagpemain == 1) {
      if (this.output[this.baris][this.kolom] == "*") {
        this.output[this.baris][this.kolom] = "1";
        var hsl = this.cekMenang();
        this.flagpemain = 2;
        this.baris = 0;
        this.kolom = 0;
        if (hsl == 1) {
          this.winner = 1;
          //alert("Player 1 Menang !!!");
          //this.reset();
        }
      } else {
        alert("Silahkan Pilih Baris dan Kolom yg lain !");
        this.baris = 0;
        this.kolom = 0;
      }
    } else {
      if (this.output[this.baris][this.kolom] == "*") {
        this.output[this.baris][this.kolom] = "2";
        var hsl = this.cekMenang();
        this.flagpemain = 1;
        this.baris = 0;
        this.kolom = 0;
        if (hsl == 2) {
          this.winner = 2;
          //alert("Player 2 Menang !!!");
          //this.reset();
        }
      } else {
        alert("Silahkan Pilih Baris dan Kolom yg lain !");
        this.baris = 0;
        this.kolom = 0;
      }
    }
  }

  reset() {
    this.flagpemain = 1;
    this.winner = 0;
    this.baris = 0;
    this.kolom = 0;
    this.output = [];

    for (var brs: number = 0; brs < 5; brs++) {
      this.output[brs] = [];
      for (var klm: number = 0; klm < 5; klm++) {
        this.output[brs][klm] = "*";
      }
    }
  }

  cekMenang() {
    var charnow = this.flagpemain.toString();
    var jum = 0;

    // cek horizontal
    var k = 0;
    while (this.output[this.baris][k] != charnow) {
      k++;
    }
    while (k < 5 && this.output[this.baris][k] == charnow) {
      k++;
      jum++;
    }

    if (jum >= 4) {
      return this.flagpemain;
    }

    //cek vertical
    var jumVertical = 0;
    var i = 0;
    while (this.output[i][this.kolom] != charnow) {
      i++;
    }
    while (i < 5 && this.output[i][this.kolom] == charnow) {
      i++;
      jumVertical++;
    }

    if (jumVertical >= 4) {
      return this.flagpemain;
    }
  }
}
