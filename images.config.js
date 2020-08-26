module.exports = {
    default: {
      webp: true, //will stay in types if not overwritten
      sizes: [200, 400, 700, 1000], //will get overitten as we can see below
      densities: [1, 2], //will stay in types if not overwritten
    },
    types: {
      //most common desktop screen resolutions (desc order, with breakpoint): 1366 (1370), 1920 (1930), 1536 (1540), 1440 (1540)
      desktopFull: {
        sizes: [4500, 4000, 3500, 3000, 2900, 2800, 2500, 2300, 2000, 1930, 1540, 1370, 1030, 900, 800, 500, 300, 200],
      },
      desktopHalf: {
        sizes: [970, 770, 520, 300, 200, 100],
      },
      desktopThird: {
        sizes: [800, 645, 515, 345, 200, 100, 50],
      },
    },
};