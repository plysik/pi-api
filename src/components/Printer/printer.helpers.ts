import { colors } from "../../data/colors"


export const getLineStyle = (pi: string[][], [[ax, ay], [bx, by]]: number[][]) => {
    const GRID_BASE = 40;
    const BULLET_CENTER = 0.5 * GRID_BASE - 1;
    let length = Math.sqrt((ax - bx) * (ax - bx) + (by - ay) * (by - ay));
    let angleInRadian = Math.atan2(by - ay, bx - ax);
    let angleInDegrees = (angleInRadian * 180) / Math.PI;

    return {
        top: `${ay * GRID_BASE + BULLET_CENTER}px`,
        left: `${ax * GRID_BASE + BULLET_CENTER}px`,
        width: `${length * GRID_BASE}px`,
        transform: `rotate(${angleInDegrees}deg)`,
        backgroundColor: colors[pi[ay][ax]]
    }
}