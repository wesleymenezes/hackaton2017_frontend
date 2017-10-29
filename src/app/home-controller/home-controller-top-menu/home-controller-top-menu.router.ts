import { Routes } from '@angular/router';

import { HomeControllerTopMenuComponent } from './index';
import { HomeInstanceControllerComponent } from '../home-instance-controller/index';
import { HomeInstanceControllerPanelComponent } from '../home-instance-controller/home-instance-controller-panel/index';

export const homeControllerTopMenuRouter: Routes = [
    { path: 'home-controller', component: HomeControllerTopMenuComponent
          , children: [
              //when there is no default, the outlet will not render anything (blank!)
              //{ path: '', redirectTo: 'instance-controller-menu', pathMatch: 'full' },
              { path: 'instance-controller-menu', component: HomeInstanceControllerComponent
                , children: [
                    //{ path: '', redirectTo: 'instance-controller-billing', pathMatch: 'full' },
                    { path: 'instance-controller-manage/:type', component: HomeInstanceControllerPanelComponent }
                ]
              }
          ]
    }
];
