
let images = [
    'https://www.perfectstock.ru/files/preview/1280x854/00bec94041bd5f2bf88553ed70bbc511-l-21580312445josppuey4k3c0yuzynit231mxhykkntrcqhfbdxtzz4fdoluafxufwxkc6meh0ypvmg5ynvoca5wpkw7whjrqhpj2k6raovgnkzu.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x854/00a28475652cad537bc656762f367966-l-215803114618lx2yxpqkjok5oml6wgkrspwydwunig0xm7bc5e8zx1b2mik5o29o85oi1easfalg1xbmtaboh0vippde61wktszy7qhdohkwrbo.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x960/00a3f642c50b1532cd9c0c9f94c01bc7-l-21580311255kmununtwn1kw9csvaehlfjbfsyomzb0z0corlxsffmcfcsmmnsujicpmcxhxm92zjo0cr3mkkb0v7hcwmxb1tgym4xj21giimpgi.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x854/00a25da6f50142f7d0e11653a255165c-l-21580311294w3oyi9xssfpfbnypeapgcepfiwlnx7glbqbf0wdw8afxoctdmyal80rhixlkfcwvb7nr4xfdpjcgi94ukcysheozgbi38sviuetb.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x854/00a7f4f256fc33978b9c8bd878d7763f-l-21580311273uzruhdv7wxyuyshwmqlgw7cjefxq3vbguafkx9rswnfuq1tvofbw9gpnbwubgujstb6crrbhps7ppjsc4ueifaatvlutxfgvsvb6.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x867/00a8c7250cdb9b1442a6e865573ac62a-l-21580311278bwf089jgzpqwjuz9kebnxx54ucj2tydn5foajc3c5c0o2xpkynqlvi5jkahtvfrjsgyqf9n1fa2w6s0pmsr98hdks6ijrlxvkx6w.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x872/21597048852scbtbwuccpwyt4cxrvfsxqhfs6d93q6rlic1q2qihhpokbqqdumi1pfk2ap9lwbh3y9tkylvyptrowronw90t7ftdsgdlmvwl1kc.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x825/1b9c0d8ef979ad57c6ef5a55244a3ed7-l-21583940613myiba3yamrorn5mm5mkcvbzfke61ubepjxhnbga3snivymgjuhdqujmt4tl9r2fszlevt88asri73zgxg0g8hz0pvevs0jol72o8.jpg?size=medium',
    'https://www.perfectstock.ru/files/preview/1280x854/1b27f89b3e34897b48bda4c7beabc027-l-21583940955bpzeyjoenqfrehp8y6jev2abqucvxls9an3kv1dtzoqxc1xqugynmcem6jr7h26fj84qedgg8gnbg9dxdbzvliulnlry8qfnehu6.jpg?size=medium'

];

let strings = [
    'Пусть сегодня тебе будет спокойно — даже если вокруг шумно',
    'Ты можешь выдохнуть. Мир не требует от тебя больше, чем ты можешь',
    'Сегодня можно не торопиться и идти в своём темпе',
    'С тобой всё в порядке, даже если сейчас непросто',
    'Ты важна уже потому, что ты есть',
    'Не обязательно видеть всю дорогу, достаточно следующего шага',
    'Иногда медленно — значит верно',
    'Разреши себе маленькую радость без повода',
    'Сегодня можно быть живой, а не идеальной'
];






let background_img = document.querySelector('.body');
background_img.style.backgroundImage = 'url(https://www.perfectstock.ru/files/preview/1280x720/1b38c43bf4f9d5fac1aa2173dd7cb24e-l-21583941007zclrtkkqwr2clilvzzhbvcehxzib1nuezj2rikum2j4xftt5exbqhnqiapj9pi3jgjfqkk1ykzfxhv6ojwmd5na7m2dipuyzamwk.jpg?size=medium)';

let button = document.querySelector(".button");
button.addEventListener('click', function(){
    let randomIndex1 = Math.floor(Math.random() * 9);
    let randomIndex2 = Math.floor(Math.random() * 9);

    background_img.style.backgroundImage = 'url('+images[randomIndex2]+')';

    let advice = document.querySelector('.advice');

    button.style.display = 'none';

    setTimeout(() => {
        advice.style.display = 'flex';
        let phrase = document.querySelector('.phrase');
        phrase.textContent = strings[randomIndex1];
    }, 400);


    
    

})




