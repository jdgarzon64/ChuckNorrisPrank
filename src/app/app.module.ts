import { TextoComponent } from './taller/texto/texto.component';
import { MemeService } from './meme.service';
import { TallerModule } from './taller/taller.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{ path: 'chiste', component: TextoComponent }];
@NgModule({
  declarations: [
    AppComponent
  ],imports: [
    BrowserModule,
    TallerModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
