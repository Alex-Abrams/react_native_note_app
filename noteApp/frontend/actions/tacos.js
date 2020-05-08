// tiger king is strange guy what the heckaroo
// jdwiadawl l oj kjljdlwlj warn
// jii ymkkk jkkjkhkkljnmn ojhkn
// njlmlmljkkhgg uhuijkkkjjjjkkkkjkjnnjjkjun
// km jhhoooiop nnkoo l adwwdwiau awhdiawd a dwado wodu
// dw aoujjdw ldo jiijn
// ohjkkadkwad nwd dwkkjwnwndkakdkk jjdlnddkkdn kkkdwa ij
// that is fat guy
// th jeff lowe shibuggkililkhhiiyt olhkjens
// adhaw daid ikdna[pdaw iii uoijlujo]
// uyt jjngg thre hhiuiijjiilkl;;kmmm
// czci kdfa d adleld lld ,,,,,,,,,,,,,,
// kwaa acabin in the woods
// mkkikda k hhwdodjoad waod ad awd jdied id hdk akkdjj ald
// idaod jad kkkwd ka kwd wkkw aow da
//  A DAWUDUHW DDWAD A THERE SHE GOES
// THERE SHE GOES AGAIN
// YIP THAT YAP PATTYWACKER ATTACK
//a dj aj dh kkdahwd jjow iwh w
// aiwd jjwooo jjwwoow wkkwd jjapwp pid pkwpull jda
// akdaw kwdk lwd wlwwllkl wllkkwdlk ll kkw llwk bkkkkk
// k kmdjd molsnjkkkkkkkkkk
// ok though for real tomorrow you need to figure out the action
// creators shit, redo the store maybe like how they have it? fuck where
// was that goddamn sight///////////////
/// awd a/wd/d///////////////////////////
// whle
// its cool i found it so it should be chill ayo
// gotta run around epl for plaguebloom/mtn silversage and blood of heroes
// zipsssfg gdtiv7ft

function narcissistic(value) {
  // Code me to return true or false
  let result = 0;
  let copyValue = value;
  const valueLength = String(copyValue).length;
  let reducer = Math.pow(10, valueLength - 1); // 100, 10, 1
  for(i = 0; i < valueLength - 1; i++) { // 0, 1, 2
    let xInt = Math.floor(copyValue / reducer); // 1, 53 / 10 = 5, 3 / 1 = 3
    result += Math.pow(xInt, valueLength); // 1, 5 ^ 3 = 125, 3 ^ 3 = 27
    copyValue = copyValue % reducer; // 153 % 100 = 53, 53 % 10 = 3
    reducer = reducer / 10; //10, 1
  }; // end for loop

  if (result === value ) {
    return true;
  } else {
    return false;
  };
}

console.log(narcissistic(153));


function getMiddle(s) { // test
  const length = s.length; // 4
  const oddsOrEvens = length % 2; // 0

  if ( oddsOrEvens === 0 ) { // true
    const middle = length / 2;
    return s[middle - 1] + s[middle]; // s[2 -1] + s[2]
  } else {
    const middle = Math.floor(length / 2); //
    return s[middle];
  };
}

// solution('abc') // should return ['ab', 'c_']
// akdlldjdllmkjdljd akjd lldj kjiijjijkkjid kjkjkjj kkjljjlj

// ray leoda 
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
   let result = [];
   // prolly slice(0,1)
   const length = str.length; //6
   for(let i = 0; i < length; i += 2) { // 0, 1, 2// i =0, 2, 4
     let segment = str.slice(i, i + 2);
     (segment.length === 2) ? result += segment : result += segment + '_';
   };
}


function descendingOrder(n){
  // so basically 12345 ==> 54321
  // parseInt()... toString()
  // .sort(), .reverse()
  const stringInt = toString(n);
  // "538" > "583"
  const strArray = stringInt.split("").reverse().join("");
  return strArray;
}
