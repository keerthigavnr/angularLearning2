import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";
import { PipesComponent } from "./pipes/pipes.component";
@NgModule(
    {
        declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, ChildComponent, ParentComponent, PipesComponent],
        imports: [BrowserModule, AppRoutingModule, FormsModule],
        bootstrap: [AppComponent]
    }
)

export class AppModule { }