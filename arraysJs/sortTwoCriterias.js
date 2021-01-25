function sortByTwo(array) {
    //  Write a function that orders a given array of strings, by length in ascending order as primary criteria,
    // and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
    // The input comes as an array of strings.
    // The output is the elements of the ordered array of strings, printed each on a new line.


    const info = array.sort(function (a,  b)  {    
        let  nameA  =  a.toUpperCase();  // ignore upper and lowercase
            
        let  nameB  =  b.toUpperCase();  // ignore upper and lowercase
        if  (nameA.length < nameB.length)  {  return  -1; }    
        if  (nameA.length > nameB.length)  {  return  1; }  
        if  (nameA  <  nameB)  {  return  -1; }    
        if  (nameA  >  nameB)  {  return  1; }    
        return  0;

    });

    console.log(info.join('\n'))
}
sortByTwo(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George',
    'Peteteteteter'
])

sortByTwo(['test',
    'Deny',
    'omen',
    'Default'
])