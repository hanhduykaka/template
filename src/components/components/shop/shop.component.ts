import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements OnInit {
  hero = {
    name: "tai",
  };

  heroes = [
    {
      id: 1,
      name: "tai",
    },
    {
      id: 2,
      name: "tung",
    },
  ];
  isDisplay = false;
  constructor() {
  }

  ngOnInit() {
  }

  trackById(index, item: any) {
    return item.id;
  }
}
