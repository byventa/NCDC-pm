import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TableComponent } from './shared/components/table/table.component';
import { FormComponent } from './shared/components/form/form.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { AuthorComponent } from './shared/components/author/author.component';
import { GoBackButtonComponent } from './shared/features/go-back-button/go-back-button.component';

// FORMS
import { ReactiveFormsModule } from '@angular/forms';

// NG PRIME
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { TableRecordEffects } from './store/effects/table-record.effects';
import { HistoryComponent } from './shared/components/history/history.component';
import { HeaderComponent } from './shared/features/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    DetailsComponent,
    AuthorComponent,
    GoBackButtonComponent,
    HistoryComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TableRecordEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
