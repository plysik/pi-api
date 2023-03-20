export const usePairFinder = (board: string[][], { x, y }: { x: number, y: number }) => {
    const neighbors = [
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
        [x, y + 1],
        [x - 1, y + 1],
        [x - 1, y],
        [x - 1, y - 1]
    ];
    // console.log(board, x, y);
    const current = board[y][x];
    const pairs = [];
    for (let index = 0; index < neighbors.length; index++) {
        const address = neighbors[index];
        const neighbor = board[address[1]] ? board[address[1]][address[0]] : undefined;
        if (neighbor) {
            if (current === neighbor) {
                pairs.push([[x, y], address]);
            }
        }
    }
    if (pairs.length) {
        // debugger;
        console.log(pairs);
    }
    return pairs;
}