const nums = document.querySelectorAll('.nums');
const nav = document.querySelector('.nav');
const inp = document.querySelector('#inp');
const txt = document.querySelector('#txt');
const err = document.querySelector('.err');

function enterPass() {
    for(let i = 0; i < nums.length; i++) {
    nums[i].onclick = () => {
        inp.value += nums[i].innerHTML;
        if(inp.value.length === 4) {
            localStorage.setItem('pass', inp.value)
            nav.classList.add('nav-hide');
        }
    }
}
}

let a = 0;

function checkPass() {
        for(let i = 0; i < nums.length; i++) {
    nums[i].onclick = () => {
        inp.value += nums[i].innerHTML;
        if(inp.value.length === 4) {
            nav.classList.add('nav-hide');
            if(inp.value === localStorage.getItem('pass')) {
                localStorage.removeItem('forgot');
            } else {
                a++
                localStorage.setItem('forgot', a);
                txt.classList.add('txt-err')
                inp.classList.add('inp-err');
                err.classList.add('err-show');

                setTimeout(() => {
                    location.reload();
                }, 5000);
            }
        }
    }
}
}

window.onload = () => {
    a = localStorage.getItem('forgot')
    if(localStorage.getItem('pass')) {
        txt.innerHTML = 'Введите пароль';
            checkPass();
    } else {
        enterPass()
    }

    if(a === '3') {
        let tf = confirm('Вы забыли пароль?');

        if (tf) {
            localStorage.clear();
            txt.innerHTML = 'Придумайте новый пароль';
            enterPass();
        } else {
            localStorage.clear()
            console.log('window.close()');
        }
    }
}