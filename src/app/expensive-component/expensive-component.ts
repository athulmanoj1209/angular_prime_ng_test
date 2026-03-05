import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ImageService } from '../image.service';
import { Product, TreeNode } from '../models/product.types';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expensive-component',
  imports: [CommonModule, GalleriaModule, TreeTableModule, TableModule, TreeModule,  ButtonModule, CardModule],
  templateUrl: './expensive-component.html',
  styleUrl: './expensive-component.css',
})
export class ExpensiveComponent {
  private photoService = inject(ImageService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  // images: any = signal([]);
  files!: TreeNode[];
  responsiveOptions: any[] = [];
  products!: Product[];

  expandedNodes = new Set<TreeNode>();

  async ngOnInit() {
    // this.photoService.getImages().then((images: any) => this.images.set(images));
    // this.files = await this.photoService.getFilesystem();
    this.files = this.toPrimeTree(await this.photoService.getFilesystem(), '0');
    this.cdr.detectChanges();

    this.products = await this.photoService.getProductsMini();
    this.cdr.detectChanges();
    // console.log(this.images());
  }

  toPrimeTree(nodes: any[], prefix = '0'): any[] {
  return nodes.map((n, i) => {
    const key = `${prefix}-${i}`;
    const label = n.data?.name ?? 'Node';
    return {
      key,
      label,
      data: n.data,
      icon: (n.children?.length ? 'pi pi-fw pi-folder' : 'pi pi-fw pi-file'),
      children: n.children ? this.toPrimeTree(n.children, key) : undefined
    };
  });
}

  toggleNode(node: any, event?: Event) {
    if (event) { event.stopPropagation(); }
    if (this.isExpanded(node)) {
      this.expandedNodes.delete(node);
      node.expanded = false;
    } else {
      this.expandedNodes.add(node);
      node.expanded = true;
    }
  }

  isExpanded(node: any) {
    // PrimeNG also uses node.expanded; support both
    return !!node.expanded || this.expandedNodes.has(node);
  }

  onExpand(event: any) {
    // event.node is expanded node
    this.expandedNodes.add(event.node);
  }

  // UI actions
  getImageDetails(imageUrl?: string) {
    if (!imageUrl) return;
    window.open(imageUrl, '_blank');
  }

  viewDetails(node: any) {
    console.log("router");
    this.router.navigate(['/under-develop']);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/img/fallback.png'; // add fallback to assets or use a data URI
  }

  pt = {
    nodeLabel: {
      class: "ml-[-23px]"
    } 
  }

}
