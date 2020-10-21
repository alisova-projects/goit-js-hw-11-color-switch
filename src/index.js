import '../src/css/common.css';

// массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// ссылки на узлы DOM-а - кнопки
const refs = {
    startBtnEl: document.querySelector('button[data-action="start"]'),
    stopBtnEl: document.querySelector('button[data-action="stop"]'),
}

// добавляем стили
refs.startBtnEl.classList.add('btn', 'is-active');
refs.stopBtnEl.classList.add('btn');

// пишем класс
class ColorSwitcher{
    constructor({ startBtn }) {
        this.intervalId = null;
        this.isActive = false;
        this.startBtn = startBtn;
    }

    start() {
        if (this.isActive) {
            return;            
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000);
        
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
}
// для генерации случайного числа:
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// создаём экземпляр класса
const myColorSwitcher = new ColorSwitcher({
    startBtn: refs.startBtnEl,
});

// вешаем слушателей
refs.startBtnEl.addEventListener('click', myColorSwitcher.start.bind(myColorSwitcher));
refs.stopBtnEl.addEventListener('click', myColorSwitcher.stop.bind(myColorSwitcher))