import { Routes } from '@angular/router';

export const routes : Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", loadChildren: "./home/home.module#HomeModule"},
	{ path: "gamme", loadChildren: "./gamme/gamme.module#GammeModule" },
	{ path: "service", loadChildren: "./service/service.module#ServiceModule" },
	{ path: "contact", loadChildren: "./contact/contact.module#ContactModule" }
];