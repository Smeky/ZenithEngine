import { EntitySystem } from '../system'
import { Quadtree } from '../quadtree'

export default class ECSQuadtree extends EntitySystem {
    dependencies = ['transform']

    init() {
        this.quadtree = new Quadtree()
    }

    updateEntity(entity) {
        // quadtree.root.update(transform)
    }
}
