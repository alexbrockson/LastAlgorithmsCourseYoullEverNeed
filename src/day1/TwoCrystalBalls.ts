export default function two_crystal_balls(breaks: boolean[]): number {
    // attempt 1
    // let lo = 0;
    // let hi = breaks.length;

    // let broken = false;

    // do {
    //     let m = (lo + (hi - lo) / 2);
    //     broken = breaks[m];
    //     if (broken) {
    //         for (let i = lo; i < m; ++i) {
    //             if (breaks[i]) {
    //                 return i;
    //             }
    //         }
    //     }
    //     else {
    //         lo = m;
    //     }
    // } while (broken === false)
    // return -1;




    // attempt 2 - need to figure out why my code wasn't working
    // const jumpLength = Math.floor(Math.sqrt(breaks.length));
    // let i = jumpLength;
    // let lastKnownSafeIndex = 0;
    // let ballOneIntact = true;

    // do {
    //     if (!breaks[i]) {
    //         lastKnownSafeIndex = i;
    //         i += jumpLength;
    //         ballOneIntact = false;
    //     }
    // }
    // while (ballOneIntact);

    // for (lastKnownSafeIndex < i; ++lastKnownSafeIndex;) {
    //     if (breaks[lastKnownSafeIndex]) {
    //         return lastKnownSafeIndex;
    //     }
    // }
    // return -1;


    // primeagen suggested sqrt way
    const jumpLength = Math.floor(Math.sqrt(breaks.length));
    let i = jumpLength;
    for (; i < breaks.length; i += jumpLength){
        if (breaks[i]){
            break;   
        }
    }
    
    i -= jumpLength;
    for (let j = 0; j < jumpLength && i < breaks.length; ++j, ++i){
        if (breaks[i]){
            return i;
        }
    } 

    return -1;
}