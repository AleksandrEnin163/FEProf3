// Задача 1

const btn_hide = document.createElement('button');
const par_to_hide = document.createElement('p');
document.body.append(btn_hide, par_to_hide);

btn_hide.innerText = 'Скрыть параграф';
par_to_hide.innerText = 'При нажатии кнопки, этот текст исчезнет!';
btn_hide.style.cssText = 'width: 80px; height: 80px; border: 1px solid black; border-radius: 20%';
par_to_hide.style.cssText = 'font-size: 20px; font-weight: 900; text-decoration: underline';

btn_hide.addEventListener('click', () => {
    if(par_to_hide.classList.contains ('hide')) {
        par_to_hide.classList.remove('hide');
    } else {
        par_to_hide.classList.add('hide');
    }
});

// Задача 2

const colors = ['red', 'blue', 'grey', 'green'];

const colors_list = document.createElement('ul');
document.body.append(colors_list);

for (const iterator of colors) {
    const color = document.createElement('li');
    color.innerText = iterator;
    colors_list.append(color);
    color.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = iterator;
    });
    color.addEventListener('mouseout', () => document.body.style.backgroundColor = 'transparent');
}

// Задача 3

const films = [
    {
        name: 'Побег из Шоушенка', 
        description: 'американский художественный драматический фильм 1994 года, снятый режиссёром Фрэнком Дарабонтом по его же сценарию, и рассказывающий историю Энди Дюфрейна, незаслуженно приговорённого к пожизненному заключению и пробывшего в заключении почти 20 лет.'
    },
    {
        name: 'Карты, деньги, два ствола',
        description: 'британская чёрная комедия 1998 года.'
    },
    {
        name: 'SuperПерцы',
        description: 'комедийный фильм 2007 года режиссёра Грега Моттолы.'
    }
     ];


for (const iterator of films) {
    const film_card = document.createElement('div');
    const film_name = document.createElement('h3');
    film_name.innerText = iterator.name;
    const film_description = document.createElement('p');
    film_description.innerText = iterator.description;
    film_card.append(film_name);
    document.body.append(film_card);
    film_name.addEventListener('click', () => film_card.append(film_description));
}

// Задача 4-5

const q_m = 'qwertyuiopasdfghjklzxcvbnm';

const print_text = document.createElement('p');
const row_1 = document.createElement('div');
const row_2 = document.createElement('div');
const row_3 = document.createElement('div');
row_1.classList.add('row');
row_2.classList.add('row');
row_3.classList.add('row');
print_text.classList.add('print_text');
document.body.append(print_text, row_1, row_2, row_3);

for(let i = 0; i < 10; i++) {
    const btn_row_1 = document.createElement('button');
    btn_row_1.innerText = q_m[i];
    row_1.append(btn_row_1);
    btn_row_1.addEventListener('click', () => print_text.innerText += q_m[i]);
}

for(let i = 10; i < 19; i++) {
    const btn_row_2 = document.createElement('button');
    btn_row_2.innerText = q_m[i];
    row_2.append(btn_row_2);
    btn_row_2.addEventListener('click', () => print_text.innerText += q_m[i]);
}

for(let i = 19; i < q_m.length; i++) {
    const btn_row_3 = document.createElement('button');
    btn_row_3.innerText = q_m[i];
    row_3.append(btn_row_3);
    btn_row_3.addEventListener('click', () => print_text.innerText += q_m[i]);
}

