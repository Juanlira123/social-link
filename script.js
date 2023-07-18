

function toggleMode() {
    //  html.classList.toggle('light') = serve da mesma maneira só que mais simplificada
    const html = document.documentElement

    if(html.classList.contains('light'))  {
        html.classList.remove('light')
    }else {
    html.classList.add('light')
    }
 } 



