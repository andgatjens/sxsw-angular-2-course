import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from  './search/search.component';
// import { ShowComponent } from './show/show.component';
// import { EditComponent } from './edit/edit.component';

const routes: Routes = [
// {path: 'show/:id', component: ShowComponent},
{path: '', redirectTo: 'search', pathMatch: 'full'},
{path: 'search', component: SearchComponent},
];

export const PeopleProjectRoutingModule = RouterModule.forRoot(routes);
