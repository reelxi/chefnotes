import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./core/components/dashboard/dashboard.component").then(
        (m) => m.DashboardComponent,
      ),
  },
];
