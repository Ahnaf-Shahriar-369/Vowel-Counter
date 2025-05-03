document.getElementById('btn').addEventListener('click', function() {
    const text = document.getElementById('textarea').value;
    const vowels = text.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;
    
    const output = document.querySelector('.output');
    output.innerHTML = `Your text contains <span>${count}</span> vowels`;
    
    output.classList.add('show');
    this.classList.add('processing');
    
    setTimeout(() => {
        output.classList.remove('show');
    }, 3000);
});


































const textarea = document.getElementById('textarea');
const btn = document.getElementById('btn');
const output = document.querySelector('.output');



btn.addEventListener('click', function() {


    if(textarea.value === '') {
        output.innerHTML = 'Please enter some text';
    } else {

        const value = textarea.value;
        let count = 0;

        for(let i = 0; i < value.length; i++) {
            if(value[i].match(/['a','e','i','o','u']/gi)) {
                count++;
            }
        }

        output.innerHTML = `Your text contains <span>${count}</span> vowels`;

    };

});