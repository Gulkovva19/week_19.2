
const showCat = document.querySelector('#btn');
showCat.addEventListener("click", (e) => {
    e.preventDefault();
    const nickname = document.getElementById("nickname").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const radioSex = document.querySelectorAll('input[name="gridRadios"]');
    const selectBreed = document.querySelector("select[name='breed']");
    const breed = selectBreed.value;

    const water = document.querySelector('input[name="water"]');
    const dry = document.querySelector('input[name="dry"]');
    const home = document.querySelector('input[name="home"]');

    let sex = '';
    let food = '';

    if (water.checked) {
        food = "Влажный корм";
    }

    else if (dry.checked) {
        food = "Сухой корм";
    }

    else if (home.checked) {
        food = "Домашняя еда";
    }


    for (let radio of radioSex) {
        if (radio.checked) {
            sex = radio.value;
        }
    }


    class Cat {
        constructor(nickname, name, email, breed, sex, food) {
            this.nickname = nickname;
            this.name = name;
            this.email = email;
            this.breed = breed;
            this.sex = sex;
            this.food = food;
        }
    }

    const myCat = new Cat(nickname, name, email, breed, sex, food);

    console.log(myCat);
})


