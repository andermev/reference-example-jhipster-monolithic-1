import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    ReferenceExampleJHipsterMonolithic1SharedLibsModule,
    ReferenceExampleJHipsterMonolithic1SharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [ReferenceExampleJHipsterMonolithic1SharedLibsModule, ReferenceExampleJHipsterMonolithic1SharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [ReferenceExampleJHipsterMonolithic1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReferenceExampleJHipsterMonolithic1SharedModule {
    static forRoot() {
        return {
            ngModule: ReferenceExampleJHipsterMonolithic1SharedModule
        };
    }
}
