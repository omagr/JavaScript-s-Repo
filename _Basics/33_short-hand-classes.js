let regx;

// ___________________________________ word hractrs ____________________

regx = /\war/; // word chracters -->  _ OR aplhabets OR numbers

regx = /\w+ar/; // MEANS ONE OR MORE WORD CHRACTERS

regx = /\War/; // no word chracters

// ___________________________________digit chracters ____________________

regx = /\d55/; // digit chracters only one

regx = /\d+55/; // digit chracters one more than

regx = /\D55/; // no digit chracters

regx = /\D+55/; // no digit chracters more than one

// ___________________________________white space____________________

regx = /\ska number/; // match white space OR \t

regx = /\s+ka number/; // match white space OR \t more then one space

regx = /\Ska number/; // match no white space OR \t

regx = /\S+ka number/; // match no white space OR \t more then one space

// _____________________________match word boundery_____________________________________________

regx = /ka\b/; // match word boundery

//______________________________asserstions_____________________________________________________

regx = /a(?=l)/i; // a ke badd l hona hi ha

regx = /a(?!l)/; // a ke badd l nhi hona hi ha

let str = ` Albert Einein1s2steinka number (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March55 1879 – 18 April 1955).      ka number`;

let result = str.match(regx);
console.log(result);
