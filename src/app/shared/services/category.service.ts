import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    //console.log(this.db.list('categories'));
    return this.db.list('categories', {
      query: {
        orderByChild: name
      }
    });
  }

}
