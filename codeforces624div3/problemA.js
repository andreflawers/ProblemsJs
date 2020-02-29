let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const { EOL } = require('os')
    const lines = i.split(EOL) /*your input text, split by lines*/
    //console.log(lines);
    main(lines);
})

function main(lines) {
    let t, a;
    t = parseInt(lines[0]);
    for (let i = 1; i < t + 1; i++) {
        a = lines[i].split(' ');
        if (a[0] - a[1] == 0) {
            console.log(0)
        } else if ((a[0] - a[1] < 0 && (a[0] - a[1]) % 2 != 0) || (a[0] - a[1] > 0 && (a[0] - a[1]) % 2 == 0)) {
            console.log(1)
        } else {
            console.log(2)
        }
    }

}