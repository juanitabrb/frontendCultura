import { Component } from "@angular/core";

import { MENU_ITEMS } from "./pages-menu";
import { SeguridadService } from "../services/seguridad.service";
import { Subject, Subscription } from "rxjs";
import { environment } from '../../environments/environment';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu :NbMenuItem[]=new Array();
  subscription: Subscription;
  isLogged:boolean=false;
  constructor(private miServicioSeguridad: SeguridadService) {}
  ngOnInit() {
    this.subscription = this.miServicioSeguridad
      .getUsuario()
      .subscribe((data) => {
        this.isLogged=true;
        this.updateMenuRole(data.id_rol);
      });
  }
  updateMenuRole(id): void {
    let nameMenuItems: String[];
    if (this.isLogged) {
      if (id == environment.ID_ROL_ADMIN) {
        nameMenuItems = [
          "Usuarios",
          "E-commerce"

        ];
      } else {
        nameMenuItems = ["E-commerce"];
      }
    } else {
      nameMenuItems = ["E-commerce"];
    }

    //console.log("nameMenuItems->"+JSON.stringify(nameMenuItems))

    //let nameMenuItems:String[]=items;
    MENU_ITEMS.forEach((actualNameMenuItem) => {
      ////console.log(actualNameMenuItem.idName);

      //################ URGENTE  DESCOMENTAR ESTO ###################
      if (nameMenuItems.indexOf(actualNameMenuItem.title) != -1) {
        this.menu.push(actualNameMenuItem);
      }

      //this.menu.push(actualNameMenuItem);
    });
  }
  getItemsMenuRole(menuItems): String[] {
    let items: String[] = [];
    if (this.isLogged) {
      menuItems.forEach((itemActual) => {
        items.push(itemActual.url);
      });
    }

    return items;
  }
}
