import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Tab } from './tab.component';
// import { CompFactory} from './compFactory.component';
import { FormPanelComponent } from './comopnent/form-panel/form-panel.component';
import { BaseComponent } from './comopnent/base/base.component';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon'
import { ImageComponent } from './comopnent/image/image.component';
import { PasswordComponent } from './comopnent/password/password.component';
import { TextFieldComponent } from './comopnent/text-field/text-field.component';
import { TitleComponent } from './comopnent/title/title.component';
import { ButtonComponent } from './comopnent/button/button.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // Tab,
    // CompFactory,
    FormPanelComponent,
    BaseComponent,
    ImageComponent,
    PasswordComponent,
    TextFieldComponent,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  // entryComponents:[LoginComponent]
})
export class AppModule { }
