import { NgModule } from '@angular/core';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'; 

@NgModule({
    imports: [
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule
    ],
    exports: [
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule
    ]
})

export class MaterialModule {}