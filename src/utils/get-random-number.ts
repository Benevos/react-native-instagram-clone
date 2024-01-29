const getRandomNumber = (min: number, max: number) => {return parseInt((Math.random() * (max - min) + min).toFixed(0));}

export default getRandomNumber;