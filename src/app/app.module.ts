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
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TableComponent } from "./table/table.component";
import { ViewModalComponent } from "./view-modal/view-modal.component";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
@NgModule(
    {
        declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, ChildComponent, ParentComponent, PipesComponent, ReactiveFormComponent, TableComponent, ViewModalComponent, EditModalComponent],
        imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
        bootstrap: [AppComponent]
    }
)

export class AppModule { }