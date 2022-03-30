import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorComponent } from './shared/components/author/author.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { FormComponent } from './shared/components/form/form.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TableComponent } from './shared/components/table/table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'author/:name', component: AuthorComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
