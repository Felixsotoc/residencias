import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';



const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
     /* {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },*/
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
 
      {
        path: 'polizas',
        children: [
          {
           path: '',
           loadChildren: () => import('../polizas/polizas.module').then(m => m.PolizaModule)
          }
        ]
      },
      {
        path: 'agenda',
        children: [
          {
           path: '',
           loadChildren: () => import('../agenda/agenda.module').then(m => m.AgendaPageModule)
          }
        ]
      },
      {
        path: 'notas',
        children: [
          {
           path: '',
           loadChildren: () => import('../notas/notas.module').then(m => m.NotasPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/agenda',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

