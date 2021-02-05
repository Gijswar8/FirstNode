const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function indelen()
{
    readline.question('Geef je geboortedatum in: ', datum => 
    {
        console.log('Je ingegeven geboortedatum: ' + datum)
        let groep = datum % 7;
        groep++;
        console.log('Je bent toegewezen aan groep ' + groep)
        readline.close();
    })
}

indelen();