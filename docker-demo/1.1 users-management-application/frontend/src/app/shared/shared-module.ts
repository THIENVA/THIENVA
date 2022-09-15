import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
    ]
})
export class SharedModule {
}
