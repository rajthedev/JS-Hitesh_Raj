// const names = ["Youtube","facebook","amazon","netflix","instagram"];

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    if: "Instagram",
    fb: "facebook",
    lco:"Learncodeonline",
};

for (const n in symbols){

    console.log(`key is: ${n} and value is: ${symbols[n]}`);
}