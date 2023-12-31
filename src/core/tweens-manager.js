import { Tween } from "./tween"
import { SystemModule } from "./system-module"

export class TweensManager extends SystemModule {
    static get Easing() {
        return {
            Linear: (t) => t,
            Quadratic: (t) => t * (2 - t),
            Quintic: (t) => t * t * t * (t * (t * 6 - 15) + 10),
            EaseIn: (t) => t * t,
            EaseOut: (t) => t * (2 - t),
            EaseInOut: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        }
    }

    init() {
        this.tweens = []
        this.Easing = TweensManager.Easing
    }

    dispose() {
        this.tweens.forEach(tween => tween.dispose())
        this.tweens = []
    }

    /**
     * 
     * @param {import("./tween").TweenOptions} options 
     * @returns {Tween}
     */
    create(options) {
        const tween = new Tween(options)
        this.tweens.push(tween)
        return tween
    }

    update(delta, time) {
        let needsUpdate = false

        this.tweens.forEach(tween => {
            if (tween.update(delta, time))
                needsUpdate = true
        })

        if (needsUpdate)
            this.tweens = this.tweens.filter(tween => !tween.done)
    }
}
