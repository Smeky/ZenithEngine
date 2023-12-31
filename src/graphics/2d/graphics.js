import * as Pixi from 'pixi.js'

import { SystemModule } from '../../core/system-module'
import { Scene } from '../../core/scene'
// import { Camera } from './camera' // Adjust this for 2D as needed.

/**
 * Graphics class for rendering 2D graphics using Pixi.js library.
 */
export class Graphics2D extends SystemModule {
    init(engine) {
        // Canvas
        this.container = engine.options.container
        this.canvasWidth = this.container.offsetWidth
        this.canvasHeight = this.container.offsetHeight

        // Renderer
        this.renderer = Pixi.autoDetectRenderer({
            width: this.canvasWidth,
            height: this.canvasHeight,
            backgroundColor: 0x111111,
            resolution: window.devicePixelRatio,
            autoDensity: true
        })

        this.container.appendChild(this.renderer.view)

        // Scene
        this.scene = engine.scene
        
        // Todo: Camera setup for 2D

        window.addEventListener('resize', this.onResize)
    }

    dispose() {
        window.removeEventListener('resize', this.onResize)
        this.renderer.destroy(true)
    }

    update() {
        this.renderer.render(this.scene.container)
    }

    createScene() {
        return new Scene({ container: new Pixi.Container() })
    }

    onResize = () => {
        this.canvasWidth = this.container.offsetWidth
        this.canvasHeight = this.container.offsetHeight

        this.renderer.resize(this.canvasWidth, this.canvasHeight)
        // Adjust camera or view if necessary
    }

    // Implement 2D raycasting or hit testing if needed
}
