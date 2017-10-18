import { CustomerComponent } from '../baseComponent/customer/customer.component';
import { TestComponent } from '../baseComponent/test/test.component';
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../baseComponent/about/about.component';
import { HomeComponent } from '../baseComponent/home/home.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'test', component: TestComponent},
    {path: 'customer', component: CustomerComponent}

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
