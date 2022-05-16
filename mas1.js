let Massiv = [1, 2, 3, 4, 5, 6];

function massum(Massiv)
{
    let sum = 0;
    Massiv.forEach(item => 
        {
            sum = sum + item;
        });
        return sum;
}

console.log(massum(Massiv))
