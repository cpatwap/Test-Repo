import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "../Components/app.component";
import { HeroListComponent } from '../Components/herolist.component';
import { HeroDetailComponent } from '../Components/herodetail.component';
import { AboutComponent } from '../Components/about.component';
import { routing } from '../Routing/app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent,HeroListComponent, HeroDetailComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }