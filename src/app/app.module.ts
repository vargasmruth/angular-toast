import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToastWithServiceComponent } from './components/toast-with-service/toast-with-service.component';
import { ToastService } from './service/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    ToastWithServiceComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ToastModule.forRoot()
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
