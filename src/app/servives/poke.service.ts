import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class PokeService {
  constructor(private _db: AngularFireDatabase) { }
  
    getImages(group, endkey?) {
  
      const query = {
        orderByKey: true,
        limitToFirst: group
      }
      if(endkey) query['startAt'] = endkey;
  
      return this._db.list('/pokemon/', {
        query
      })
    }
}
