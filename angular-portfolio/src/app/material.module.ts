import { NgModule } from '@angular/core';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule {}