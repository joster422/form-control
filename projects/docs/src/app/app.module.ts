import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { FormControlModule } from '@joster-dev/form-control';
import { FormControlModule } from 'dist/form-control';
import { IconModule } from '@joster-dev/icon';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { ButtonComponent } from './button/button.component';
import { ColorComponent } from './color/color.component';
import { TextComponent } from './text/text.component';
import { ChoiceComponent } from './choice/choice.component';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';
import { FormSettingsComponent } from './form-settings/form-settings.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { ActionViewerComponent } from './action-viewer/action-viewer.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    ButtonComponent,
    ColorComponent,
    TextComponent,
    ChoiceComponent,
    MultiChoiceComponent,
    FormSettingsComponent,
    ModelViewerComponent,
    ActionViewerComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
