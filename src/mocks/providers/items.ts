import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Viswa Nath",
    "profilePic": "assets/img/speakers/7.jpg",
    "about": "Application Developer"
  };


  constructor() {
    let items = [
      {
        "name": "Mark Zuckerberg",
        "profilePic": "assets/img/speakers/1.jpg",
        "about": "Chief Executive Officer of Facebook." 
      },
      {
        "name": "Bill Gates",
        "profilePic": "assets/img/speakers/2.jpg",
        "about": "American business magnate.",
        "Desc": "bill gates is also co founder of bill and millinda gates foundation."
      },
      {
        "name": "Sergey Brin",
        "profilePic": "assets/img/speakers/3.jpg",
        "about": "President of Alphabet"
      },
      {
        "name": "Jeff Bezos",
        "profilePic": "assets/img/speakers/4.jpg",
        "about": "Chief Executive Officer of Amazon."
      },
      {
        "name": "Sundar Pichai",
        "profilePic": "assets/img/speakers/5.jpg",
        "about": "Chief Executive Officer of Google."
      },
      {
        "name": "Satya Nadella",
        "profilePic": "assets/img/speakers/6.jpg",
        "about": "Chief Executive Officer of Microsoft."
      },
      {
        "name": "Viswa Nath",
        "profilePic": "assets/img/speakers/7.jpg",
        "about": "Application Developer"
      }
      
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
