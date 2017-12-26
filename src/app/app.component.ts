import {Component} from '@angular/core';
import * as postActions from './actions/post.actions';
import {Post} from './models/post.model';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post$: Observable<Post>;

  constructor(private store: Store<AppState>) {
  }


  getPost() {
    this.store.dispatch(new postActions.GetPost('/posts/testPost'));
  }

  vote(post: Post, val: number) {
    this.store.dispatch(new postActions.VoteUpdate({post, val}));
  }
}
