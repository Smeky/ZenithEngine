import { QuadtreeNode } from './quadtree-node.js'

export class Quadtree {
    constructor() {
        this.root = new QuadtreeNode(this, 0, 0, 0, 0)
    }
}
