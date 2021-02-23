import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  output : String[][];

  flagpemain = 1;
  baris = 0;
  kolom = 0;

  constructor(){
    this.output = [];

    for(var brs: number = 0; brs < 5; brs++) {
        this.output[brs] = [];
        for(var klm: number = 0; klm< 5; klm++) {
            this.output[brs][klm] = "*";
        }
    }
  }

  InputPlayer(){
    //alert(this.output[0][1]);
    if(this.baris > 0){
       this.baris -= 1;
    }
    if(this.kolom > 0){
       this.kolom -= 1;
    }
    
    if(this.flagpemain == 1){
      if(this.output[this.baris][this.kolom] == "*"){
          this.output[this.baris][this.kolom] = "1";
          var hsl = this.cekMenang()
          this.flagpemain = 2;
          this.baris = 0;
          this.kolom = 0;
          if(hsl == 1){
            alert("Player 1 Menang !!!")
            this.reset();
          }
      }
      else{
        alert("Silahkan Pilih Baris dan Kolom yg lain !")
      }
      
    }
    else{
       if(this.output[this.baris][this.kolom] == "*"){
          this.output[this.baris][this.kolom] = "2";
          var hsl = this.cekMenang()
          this.flagpemain = 1;
          this.baris = 0;
          this.kolom = 0;
          if(hsl == 2){
            alert("Player 2 Menang !!!")
            this.reset();
          }
      }
      else{
        alert("Silahkan Pilih Baris dan Kolom yg lain !")
      }
    }
  } 
  
  reset(){
    this.flagpemain = 1;
    this.baris = 0;
    this.kolom = 0;
    this.output = [];

    for(var brs: number = 0; brs < 5; brs++) {
        this.output[brs] = [];
        for(var klm: number = 0; klm< 5; klm++) {
            this.output[brs][klm] = "*";
        }
    }

   
  }

  cekMenang(){
    for(var b:number, b=0; b<5; b++){
      for(var k:number, k=0; k<5; k++){
        if(this.output[b][0] == "1" && this.output[b][1] == "1" && this.output[b][2] == "1" && this.output[b][3] == "1" &&this.output[b][4] == "1" ){
              return 1;
        }
        if(this.output[0][k] == "1" && this.output[1][k] == "1" && this.output[2][k] == "1" && this.output[3][k] == "1" &&this.output[4][k] == "1" ){
              return 1;
        }
        if(this.output[b][0] == "2" && this.output[b][1] == "2" && this.output[b][2] == "2" && this.output[b][3] == "2" &&this.output[b][4] == "2" ){
              return 2;
        }
        if(this.output[0][k] == "2" && this.output[1][k] == "2" && this.output[2][k] == "2" && this.output[3][k] == "2" &&this.output[4][k] == "2" ){
              return 2;
        }

      }
    }
  
  }
  
}
