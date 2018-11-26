import { NgModule } from '@angular/core';

import {
    ReferenceExampleJHipsterMonolithic1SharedLibsModule,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [ReferenceExampleJHipsterMonolithic1SharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ReferenceExampleJHipsterMonolithic1SharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ReferenceExampleJHipsterMonolithic1SharedCommonModule {}
