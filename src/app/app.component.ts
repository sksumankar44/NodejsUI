import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todoapp';
  public data: any;
  constructor(private http: HttpClient) {}

  public fetchDetails() {}
  ngOnInit(): void {
    this.fetchDetails();
    this.http
      .get('http://localhost:3000/api/todos/test')
      .subscribe((resp: any) => {
        this.data = resp;
        // console.log(resp);
      });
    // const header = new HttpHeaders({
    //   contentType: 'application/json',
    // });

    ///Post Method
    // let body = {
    //   todo: 'Buy Chicken2',
    //   isDone: 'true',
    //   isAttachment: false,
    // };
    // this.http
    //   .post('http://localhost:3000/api/todo', body)
    //   .subscribe((resp: any) => {
    //     console.log(resp);
    //     this.data = resp;
    //   });
    //==========================================================
    // let deleteTodoId = { id: '667bac79b15058f9bbe46c33' };
    // this.http
    //   .delete('http://localhost:3000/api/todo/', deleteTodoId)
    //   .subscribe((resp: any) => {
    //     this.data = resp;
    //     console.log(resp);
    //   });
  }
}

// import {
//   HttpClient,
//   HttpHeaderResponse,
//   HttpHeaders,
// } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HttpClientModule, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   title = 'todoapp';
//   public getJsonValue: any;
//   public postJsonValue: any;
//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getMethod();
//     this.postMethod();
//   }
//   public getMethod() {
//     this.http.get('http://localhost:3000/api/todos/test').subscribe((data) => {
//       console.log(data);
//       this.getJsonValue = data;
//     });
//   }

//   public postMethod() {
//     const header = new HttpHeaders({
//       contentType: 'application/json',
//     });
//     let body = {
//       todo: 'Buy Bread',
//       isDone: 'true',
//       isAttachment: false,
//     };
//     this.http
//       .post('http://localhost:3000/api/todo', body, { headers: header })
//       .subscribe((data) => {
//         console.log(data);
//         this.postJsonValue = data;
//       });
//   }
// }

// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HttpClientModule, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   title = 'todoapp';
//   public data: any;
//   constructor(private http: HttpClient) {}

//   public fetchDetails() {}
//   ngOnInit(): void {
//     this.fetchDetails();
//     this.http
//       .get('http://localhost:3000/api/todos/test')
//       .subscribe((resp: any) => {
//         this.data = resp;
//         console.log(resp);
//       });
//   }
// }
