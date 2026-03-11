import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ImageService } from '../image.service';
import { Product, TreeNode } from '../models/product.types';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { catchError, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-expensive-component',
  imports: [CommonModule, GalleriaModule, TreeTableModule, TableModule, TreeModule, ButtonModule, CardModule, AvatarModule],
  templateUrl: './expensive-component.html',
  styleUrl: './expensive-component.css',
})
export class ExpensiveComponent implements OnInit, OnDestroy {
  private photoService = inject(ImageService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  // images: any = signal([]);
  files!: TreeNode[];
  responsiveOptions: any[] = [];
  products!: Product[];
  private componentDestroyed$: Subject<boolean> = new Subject();

  expandedNodes = new Set<TreeNode>();

  async ngOnInit() {
    // this.photoService.getImages().then((images: any) => this.images.set(images));
    // this.files = await this.photoService.getFilesystem();
    // this.files = this.toPrimeTree(await this.photoService.getFilesystem(), '0');
    this.photoService.getTreeData(2)
      .pipe(takeUntil(this.componentDestroyed$),  // Subscribe to getData(), but automatically unsubscribe when componentDestroyed$ emits.
        catchError((error: Error) => {
        console.log("error in admin register", error.message);
        throw error;
      }))
      .subscribe((response: any) => {
        console.log("tree response", response?.primeData);
        this.files = response?.primeData;
        // this.toPrimeTree(response?.data, '0');
        this.cdr.detectChanges();
      });


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

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/img/fallback.png'; // add fallback to assets or use a data URI
  }

  viewDetails(nodeData: any) {
    console.log("router", nodeData);
    this.router.navigate(['/auditor-details', nodeData.empId]);
  }

  pt = {
    nodeLabel: {
      class: "ml-[-23px]"
    }
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);  //when Subject.next() is called this subscription which used will be stopped 
    // : Many developers use a pattern like .pipe(takeUntil(this.destroy$)). If subject.next(true) is called on that destroy$ subject, it immediately unsubscribes the component from the stream to prevent memory leaks.
    this.componentDestroyed$.complete(); // “This Subject is finished. It will not send any more values.” after subject.complete we cannot send values using next()
  }

}
