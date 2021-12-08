import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './books/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH, Configuration } from './books/shared/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // OPTION A
    // ApiModule.forRoot(() => new Configuration({
    //   basePath: 'https://api.angular.schule'
    // }))
  ],
  providers: [
    // OPTION B
    { provide: BASE_PATH, useValue: 'https://api.angular.schule' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
