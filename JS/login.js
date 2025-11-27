// sections
const criar = document.getElementById("criar");
const logar = document.getElementById("logar");

criar.style.display = 'none';

function aparecer(any) {

    switch (any) {
        case 'criar':
            logar.style.display = 'none';
            criar.style.display = 'inline-flex';
            break
        case 'logar':
            logar.style.display = 'inline-flex';
            criar.style.display = 'none';
            break
    }

}