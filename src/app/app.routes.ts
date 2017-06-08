import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {PostsComponent} from "./components/posts.component";
import {HomeComponent} from "./components/footer.componet";

export const allAppComponents = [HomeComponent, AboutComponent];

export const routes: Routes = [

	{path: "footer", component: PostsComponent},
	{path: "posts", component: PostsComponent},
	{path: "about", component: AboutComponent},
	{path: "home", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);