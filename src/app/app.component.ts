import { Component, OnInit   } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'BookStoreClient';
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.downloadBooks();
  }
  downloadBooks(){

    this.http.get("http://localhost:8080/books")
    .subscribe((result) => {
      console.log(result);
    })
    
  }
}
