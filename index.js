let a = +prompt("Yoshingizni kiriting")

if(a < 18 && a > 0){
    console.log("Siz Hali Juda Xam Yoshsiz");
}

else if(a >= 18 && a <= 28){
    console.log("Mana Povestka Armiyaga Tayorsiz")
}

else if(a > 28 && a < 58){
    console.log("Armiyaga Borib Keldingiz Xizmat Uchun Raxmat")
}
else if(a >= 58 && a <= 90){
    console.log("Siz Armiyaga Borib Kelgansiz")
}
else if(a > 90){
    console.log("Bobo Siz Armiyaga Borib Kelgansiz Uyda O'tiring")
}