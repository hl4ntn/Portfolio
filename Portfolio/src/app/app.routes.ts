import { Routes } from '@angular/router';

import { MaincontentComponent } from './maincomponent/maincontent.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
   { path: '', component: MaincontentComponent},
   { path: 'imprint', component: LegalNoticeComponent},
   { path: 'privacypolicy', component: PrivacyPolicyComponent},
];