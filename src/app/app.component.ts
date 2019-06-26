import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Item } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "pwademo";
  items: Array<Item>;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchData()
    // this.postData(
    //   {
    //     userId:1,
    //     title:'randomtitle',
    //     completed:false}
    // )

    // this.editDatas({
    //   userId: 1,
    //    title: "random title",
    //    completed: false, id: 1
    //   })

    // this.editData({
    //    title: "funny title",
    //   })

    //this.deleteData();
  }

  fetchData() {
    try {
      this.apiService.fetch().subscribe((data: Array<Item>) => {
        this.items = data;
      });

      // this.apiService
      //   .get("https://jsonplaceholder.typicode.com/todos/4")
      //   .subscribe(todo => {
      //     console.log("from get");
      //     console.log(todo);
      //     console.log("================");
      //   });

      this.apiService
        .get("https://jsonplaceholder.typicode.com/todos", {
          userId: 1,
          title: "randomtitle",
          completed: false
        })
        .subscribe(todo => {
          console.log("from params");
          console.log(todo);
          console.log("================");
        });
    } catch (err) {
      console.log(err);
    }
  }

  postData(data: object | object[]) {
    try {
      this.apiService
        .post("https://jsonplaceholder.typicode.com/todos", data)
        .subscribe(todo => console.log(todo));
    } catch (err) {
      console.log(err);
    }
  }

  editDatas(data: object) {
    try {
      this.apiService
        .put("https://jsonplaceholder.typicode.com/todos/1", data)
        .subscribe(todo => console.log(todo));
    } catch (err) {
      console.log(err);
    }
  }

  editData(data: object) {
    try {
      this.apiService
        .patch("https://jsonplaceholder.typicode.com/todos/1", data)
        .subscribe(todo => console.log(todo));
    } catch (err) {
      console.log(err);
    }
  }

  deleteData() {
    try {
      this.apiService
        .delete("https://jsonplaceholder.typicode.com/todos/1")
        .subscribe(() => console.log("ok"));
    } catch (err) {
      console.log(err);
    }
  }
}
