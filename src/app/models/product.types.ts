export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

export interface TreeNode {
  data: {
    name: string;
    size: string;
    type: string;
    image?: string;
  };
  children?: TreeNode[];
  expanded?: boolean;
}