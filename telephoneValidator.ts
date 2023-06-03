/*
My method feels extremely clunky but I can't really think of anything better without rewriting the whole thing.
I haven't done any research into how to write a telephone number validator.
*/

function telephoneCheck(str) {
    const numberRegex = /[0-9]/g;
    const areaCodeRegex = /\(\d{3}\)/;
    const bracketRegex = /[\(\)]/g;
    const countryRegex = /^\d{2}\s/;

    const match = str.match(numberRegex);
    let bracketMatch = str.match(bracketRegex);
    const bracketTest = bracketRegex.test(str);
    const areaTest = areaCodeRegex.test(str);
    const countryTest = countryRegex.test(str);

    // console.log(countryTest);
    // console.log(str.match(countryRegex));

    /*
    I feel like this is a terrible way to catch a null value.
    There has to be some better option.
    */
    if ( bracketMatch == null ) {
        bracketMatch = 0;
    }
    
    //console.log(match);
    
    //console.log(str.match(bracketRegex));
    //console.log(bracketRegex.test(str));

    //console.log(str.match(areaCodeRegex));
    //console.log(areaCodeRegex.test(str));

    if ( match.length < 10 || match.length > 11 ) {
        console.log('test 1')
        return false;
    } 
    else if ( countryTest == true ) {
        console.log('test 2')
        return false;
    }
    else if ( match.length == 11 && ( match[0] !== '1' || str[0] !== '1' ) ) {
        console.log('test 3')
        return false;
    }
    else if ( bracketMatch.length != 2 && bracketTest == true ) { // bracketMatch cannot be null
        console.log('test 4')
        return false;
    } 
    else if ( bracketTest == true && areaTest == false) {
        console.log('test 5')
        return false;
    }
    return true;
}

console.log(telephoneCheck("-1 (757) 622-7382")); // This was the last test I struggled to pass
