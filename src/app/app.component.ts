import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-dream-app';
  url = 'http://localhost:3000/pictures';  //put url rest url here
  data; // this variable is public can be use in html as well.. it has scope in his own htlm
  constructor(private http: HttpClient){
   
  }

  ngOnInit(){
   this.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
   });
  }

  getData() {
   return this.http.get(this.url);
  }
}
