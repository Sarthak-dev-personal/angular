import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({
      /**
       * In the other course we created the ActionReducerMap inside the reducers file itself.
       * Hence, just imported the reducers object and used in the forRoot method.
       * Here we create inside the forRoot method itself.
       */
      counter: counterReducer,
    }, {
      /**
       * The meta reducers and the runtime checks go here.
       */
    }), 
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
