import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { CoreModule } from './core/core.module';
import { CardModule } from './card/card.module';
import { RestClientService } from './core/services/rest-client.service';
import { FeedPostService } from './core/services/feedPost.service';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    CardModule
  ],
  providers: [RestClientService, FeedPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
