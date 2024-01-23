#goit-react-hw-02

Домашнє завдання

Створений репозиторій goit-react-hw-02 При здачі домашньої роботи є два
посилання: на вихідні файли та робочу сторінку завдання на Vercel. Проект
створено за допомогою Vite. Під час запуску коду завдання в консолі відсутні
помилки та попередження. Для кожного компонента є окремий файл у папці
src/components. JS-код чистий і зрозумілий, використовується Prettier.
Стилізація виконана CSS-модулями

Віджет відгуків

Напиши застосунок для збору відгуків про кав'ярню Sip Happens Café. Подивись
демо-відео роботи застосунку.

Застосунок повинен відображати кількість зібраних відгуків для кожної категорії:
good, neutral, bad. Застосунок повинен зберігати статистику відгуків між
оновленням сторінки.

Компоненти

В цьому завданні інтерфейс вже розділений на компоненти, твоя задача перенести
це в код. Частини інтерфейсу, що входять в компонент, обведені рамкою
відповідного кольору.

Як бачиш, всі компоненти рендеряться всередині компонента App.

Назва кав'ярні

Sip Happens Café

Текст опису

Please leave your feedback about our service by selecting one of the options
below.

Крок 1

У компоненті App створи стан для зберігання типів відгуків. Нехай це буде об'єкт
з одноіменними властивостями:

{ good: 0, neutral: 0, bad: 0 }

Оголоси компоненти Feedback та Options і використовуй їх в App для відображення
опцій та фідбека. Для цього передай необхідні значення їм через пропси.

Після цього кроку інтерфейс застосунку буде виглядати наступним чином. Зверни
увагу, що в компонентів не вистачає деяких елементів, ти додаси їх наступних
кроках.

Крок 2

Додай обробники стану, щоб при кліках по кнопках в компоненті Options
змінювалося стан компонента App. Для цього передай методи зміни стану через
пропси в компонент Options.

Після цього кроку при кліках по кнопках в компоненті Options буде оновлюватися
інтерфейс.

Крок 3

Зроби так, щоб компонент Feedback рендерився тільки після того, як було зібрано
хоча б один відгук. Загальна кількість відгуків - це просто сума станів:

totalFeedback = good + neutral + bad

Повідомлення про відсутність статистики витягни в компонент Notification. Для
цього використовуй умовний рендеринг в JSX.

Крок 4

Додай кнопку Reset для скидання зібраних відгуків у компонент Options. При кліку
на неї стан, що відповідає за відгуки, повинен обнулитися. Кнопка Reset видима
тільки в разі наявності хоча б одного відгуку, так само, як і компонент
Feedback.

Крок 5

Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше
статистики про зібрані відгуки. Додай відображення загальної кількості зібраних
відгуків з усіх категорій та відсоток позитивних відгуків. Це всі обчислювані
значення, які не потрібно зберігати в стані. Передай ці значення через пропси в
відповідні компоненти.

Загальна кількість відгуків - це просто сума станів:

totalFeedback = good + neutral + bad

Для підрахунку відсотка позитивних відгуків можна використовувати наступну
формулу:

Math.round(((good + neutral) / totalFeedback) \* 100)

Після цього кроку інтерфейс застосунку буде завершений.

Крок 6

Зроби так, щоб статистика відгуків зберігалася між перезавантаженнями сторінки.
Використовуй ефекти та локальне сховище для збереження стану при його зміні, а
при завантаженні сторінки ініціалізуй стан і локальне сховище для зчитування
збережених даних та запису їх у стан. Якщо на момент завантаження додатка в
локальному сховищі нічого не збережено, стан повинен ініціалізуватися нулями.
