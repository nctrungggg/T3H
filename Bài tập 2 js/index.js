renderIP = () => {
    let numberIp = document.getElementById('input').value;
    // switch (numberIp) {
    //     case '1'
    //         console.log('1');
    //         window.open('https://quantrimang.com')
    //         break;
    //     case '2'
    //         console.log('2');
    //         window.open('https://download.cnet.com')
    //         break;
    //     case '3'
    //         console.log('3');
    //         window.open('https://vndoc.com')
    //         break;
    //     default:  
    //         console.log('4');
    //         window.open('https://meta.vn')

    // }
    if (numberIp == 1) {
        window.open('https://quantrimang.com')
    } else if (numberIp == 2) {
        window.open('https://download.cnet.com')
    } else if (numberIp == 3) {
        window.open('https://vndoc.com')
    } else {
        window.open('https://meta.vn')
    }
}
