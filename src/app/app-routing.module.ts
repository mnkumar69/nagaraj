import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ReportsComponent} from './reports/reports.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'list', component:ListComponent},
{path:'reports',component:ReportsComponent},
{path:'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
