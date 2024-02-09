function main(linkA, linkB){
    // Most common way of faking an email or link is to use a cyrillic letter instead of a latin one.

    const cyrillicPattern = /^[\u0400-\u04FF]+$/;

    for(let i = 0; i < linkA.length; i++){
        if(cyrillicPattern.test(linkA[i])){
            console.log(linkA + " (link A) is a copycat!");
            console.log("Letter at index " + i + " (" + linkA[i] + ") is cyrillic");
        }
    }

    for(let i = 0; i < linkB.length; i++){
        if(cyrillicPattern.test(linkB[i])){
            console.log(linkB + " (link B) is a copycat!");
            console.log("Letter at index " + i + " (" + linkB[i] + ") is cyrillic");
        }
    }
}

main("https://facebook.com)", "https://facеbook.com");
