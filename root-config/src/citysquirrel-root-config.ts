import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
const routes = constructRoutes(microfrontendLayout);

const applications = constructApplications({
	routes,
	loadApp: (app) => {
		return System.import(app.name);
	},
});
const layoutEngine = constructLayoutEngine({ routes, applications });

console.log(applications);
applications.forEach(registerApplication);
layoutEngine.activate();
start();

