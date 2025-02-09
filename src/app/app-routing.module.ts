import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from "./parent/parent.component";
const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' }, // Default route
    { path: 'app', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'parent', component: ParentComponent }

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { };
