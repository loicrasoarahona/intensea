import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {HomePage} from "./home/home.page";
import {MenuMemoireComponent} from "./menu-components/menu-memoire.component";
import {MenuAttentionComponent} from "./menu-components/menu-attention.component";
import {MenuSensorielComponent} from "./menu-components/menu-sensoriel.component";
import { DiapoExempleComponent } from './diapo-exemple/diapo-exemple.component';
import { PracticeComponent } from './practice/practice.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SousMenuComponent } from './sous-menu/sous-menu.component';
import { EcranChargementComponent } from './ecran-chargement/ecran-chargement.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AttentionComponent } from './attention/attention.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: 'memoire',
    component: MenuMemoireComponent
  },
  {
    path: 'attention-menu',
    component: MenuAttentionComponent
  },
  {
    path: 'sensoriel',
    component: MenuSensorielComponent
  },
  {
    path: 'questionnaire',
    component: MenuComponent
  },
  {
    path: 'diapo-exemple',
    component: DiapoExempleComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: 'redirect',
    component: RedirectionComponent
  },
  {
    path: 'main-menu',
    component: MainMenuComponent
  },
  {
    path: 'sous-menu',
    component: SousMenuComponent
  },
  {
    path: 'ecran-chargement',
    component: EcranChargementComponent
  },
  {
    path: 'formulaire-utilisateur',
    component: FormulaireUtilisateurComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'attention',
    component: AttentionComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
