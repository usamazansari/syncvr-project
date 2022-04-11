import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatExpansionModule, MatTableModule],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatTableModule]
})
export class MaterialModule {}
