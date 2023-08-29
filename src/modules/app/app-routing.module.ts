import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssetViewerComponent} from '../edc-demo/components/asset-viewer/asset-viewer.component';
import {CatalogBrowserComponent} from '../edc-demo/components/catalog-browser/catalog-browser.component';
import {IntroductionComponent} from '../edc-demo/components/introduction/introduction.component';
import {
  ContractDefinitionViewerComponent
} from '../edc-demo/components/contract-definition-viewer/contract-definition-viewer.component';
import {
  TransferHistoryViewerComponent
} from '../edc-demo/components/transfer-history/transfer-history-viewer.component';
import {PolicyViewComponent} from "../edc-demo/components/policy-view/policy-view.component";
import {ContractViewerComponent} from "../edc-demo/components/contract-viewer/contract-viewer.component";
import {CatalogBrowserConfirmation} from '../edc-demo/components/catalog-browser-confirmation/catalog-browser-confirmation.component';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: {title: 'Getting Started', icon: ''}
  },
  {
    path: 'catalog-browser',
    component: CatalogBrowserComponent,
    data: {title: 'Catalog Browser', icon: ''}
  },
  {
    path: 'catalog-browser-confirmation',
    component: CatalogBrowserConfirmation,
    data: {title: 'Assets', icon: ''}
  },
  {
    path: 'contracts',
    component: ContractViewerComponent,
    data: {title: 'Contracts', icon: ''}
  },
  {
    path: 'transfer-history',
    component: TransferHistoryViewerComponent,
    data: {title: 'Transfer History', icon: ''}
  },
  {
    path: 'contract-definitions',
    component: ContractDefinitionViewerComponent,
    data: {title: 'Contract Definitions', icon: ''}
  },
  {
    path: 'policies',
    component: PolicyViewComponent,
    data: {title: 'Policies', icon: ''}
  },
  {
    path: '', redirectTo: 'introduction', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
