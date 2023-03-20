export const use2DArray = (rowSize: number, index: number) => {
    const col = (index) % rowSize;
    const row = Math.floor(index / rowSize);
    return [row, col];
}