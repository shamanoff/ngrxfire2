import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {PostEffects} from './effects/post.effects';
import {postReducer} from './reducers/post.reducer';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';



export const firebaseConfig = {
  apiKey: 'AIzaSyBqiJKbUvB_JqGZyGQwlMVyVazcxpuZU4E',
  authDomain: 'american-exam-service.firebaseapp.com',
  databaseURL: 'https://american-exam-service.firebaseio.com',
  projectId: 'american-exam-service',
  storageBucket: 'american-exam-service.appspot.com',
  messagingSenderId: '1043492275980'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    FormsModule,
    BrowserModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    EffectsModule.forRoot([PostEffects]),
    StoreModule.forRoot({
      post: postReducer,

    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
