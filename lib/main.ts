import { Animations } from "./Animation/main";
import { World } from "./World/main";
import { Log } from "./Log/main";
import { AnimLib } from "./Animation/lib";
import { Entity } from "./Entity/main";
import { AnimationControllers } from "./AnimationController/main";
import { readJSON } from "./FS/main";

export const BPTest = {
    Animations,
    AnimationControllers,
    Entity,
    World,
    readJSON
}

export class ENV {
    public static LOG = new Log();

    static useLog(l: Log) {
        this.LOG = l;
    }

    static async setup(proj_path: string, then: (proj_path: string) => Promise<void>) {
        await AnimLib.loadAll(proj_path);
        then(proj_path);
    }
}