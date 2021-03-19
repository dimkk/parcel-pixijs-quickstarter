import snakeImage from './images/snake.png';
import bomberFront from './images/Bomberman/Front/*.png';
import bomberBack from './images/Bomberman/Back/*.png';
import bomberRight from './images/Bomberman/Right/*.png';
import bomberLeft from './images/Bomberman/Left/*.png';

export const frames = {
    bomberMan:{
        front: Object.values(bomberFront),
        back: Object.values(bomberBack),
        right: Object.values(bomberRight),
        left: Object.values(bomberLeft),
    },
    snake:{
        image: snakeImage
    }
};