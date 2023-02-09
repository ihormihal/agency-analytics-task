export const bytesToMegaBytes = (bytes: number, precision: number = 2): string => {
    return (bytes/(1024*1024)).toFixed(precision) + ' MB';
}
