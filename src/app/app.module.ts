import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app-routing/app.routing";
import { HomeComponent } from "./baseComponent/home/home.component";
import { AboutComponent } from "./baseComponent/about/about.component";
import { TestComponent } from './baseComponent/test/test.component';
import { CustomerComponent } from './baseComponent/customer/customer.component';
import { ProductComponent } from './baseComponent/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        TestComponent,
        CustomerComponent,
        ProductComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
