const heading = 'Meet The Team';
let i = 0;

const content = () => {
    if(i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(content, 150);
    }
}

content();


