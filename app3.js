


let name=prompt('Write your name');
let className=prompt('Write your class');
let roll=prompt('Write your Roll');
let bn=prompt('Write your Bangla number');
let en=prompt('Write your English number');
let ma=prompt('Write your Math number');
let sc=prompt('Write your Science number');

console.log(`

    Name: ${name}
    Name: ${className}
    Name: ${roll}
    =============================================================
    Subject        Marks            GPA              GRAD
    Bangla         ${bn}          ${getGpa(bn)}            ${getGrad(bn)}
    English         ${en}          ${getGpa(en)}            ${getGrad(en)}
    Math        ${ma}           ${getGpa(ma)}            ${getGrad(ma)}
    Science        ${sc}           ${getGpa(sc)}            ${getGrad(sc)}

`);