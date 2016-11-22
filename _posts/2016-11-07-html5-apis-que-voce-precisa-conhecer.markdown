---
layout: post
title:  "HTML5 - APIs que você precisa conhecer"
date:   2016-11-06 20:35:45 -0300
categories: html5 tecnology API javascript
---

O [HTML5](https://www.w3.org/TR/html5/) é um projeto que começou a ser pensado em 2004. No entanto só ganhou força após o anúncio da Apple em remover todo o suporte ao Flash.

Muitos não acreditavam que o HTML5 pudesse ser lançado e suportado completamente antes de 2020. Mas assim como o projeto mantido pela [W3C](http://www.w3c.br), os navegadores também estavam evoluindo de uma forma bem interessante.

Em 2011 alguns navegadores já interpretavam HTML5, era óbvio que seu suporte na época era bem escasso. Isso fez com que a comunidade olhasse para o HTML5 com uma certa dúvida: _"Usar ou não nos projetos?"_.

O tempo passou e apenas em 2014 a W3C passou o projeto do HTML5 para recomendado. Praticamente todos os navegadores já tinham suporte e hoje em 2016 é uma realidade muito nítida em qualquer projeto.

Caindo no esquecimento de muitos, inclusive o meu, o HTML5 me parecia algo _"velho"_ e não mais muito preocupante para se pensar. Até que indo em um evento de Front-End, tive o prazer de receber um _"tapa na cara"_ em uma das palestras.

Sim, [Zeno Rocha](http://www.zenorocha.com) veio da Califórnia para abrir os olhos dos desligados como eu, que o HTML5 de fato não morreu.

Fazia tempo que uma palestra não me deixava com sede de aprender, e buscar testar coisas novas. E sim, existe muita coisa nova em APIs do HTML5 que vocês precisam conhecer.

Então vamos a elas:

## Page Visibility

O _Page Visibility API_ consegue te informar quando uma página está visível ou em foco no navegador. Por conta das abas é possível que sua aplicação trabalhe em segundo plano, ou até mesmo, pare de rodar determinada funcionalidade caso o usuário não esteja mais navegando.

Quando a página é minimizada ou aba é alterada, o evento _visibilitychange_ informa o status de visibilidade.

Exemplo
{% highlight javascript %}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    console.log('inativo');
    document.getElementsByTagName('title')[0].innerHTML = 'Saiu da página';
  } else {
    console.log('ativo');
    document.getElementsByTagName('title')[0].innerHTML = 'Olhando da página';
  }
});

{% endhighlight %}

Suporte: [Page Visibility](http://caniuse.com/#search=page%20visibility)

## Device Orientation

O _Device Orientation_ retorna as coordenadas do dispositivo. Coordenadas alpha, beta e gamma, são expostas, dependendo do posicionamento do dispositivo. Isso é bem importante para as aplicações pois os usuários estão cada vez mais acessando as aplicações de dispositivos móveis.

Exemplo
{% highlight javascript %}
  window.addEventListener('deviceorientation', function(event) {
    console.log ='beta: '+ event.beta +' gamma: '+ event.gamma + 'alpha: ' + event.alpha;
  });
{% endhighlight %}

Suporte: [Device Orientation](http://caniuse.com/#search=deviceOrientation)

## Network Information

Essa é uma das APIs que quase não se tem suporte. Apesar de vir para substituir uma forma já existente de se ter acesso a informação de _online_ ou _offline_ da internet do usuário.

A nova API vem para trazer ainda mais informação, além do status da conexão, retornará o tipo de conexão e a velocidade dela.

Exemplo
{% highlight javascript %}
  connection.addEventListener('change', function (event) {
    console.log('A velocidade de conexão é: '+connection.downlinkMax);
    console.log('O tipo de conexão é: '+connection.type);
  });
{% endhighlight %}

Suporte: [Network Information](http://caniuse.com/#search=Network%20Information)

## Battery Status

Battery Status é a API que retorna a informação sobre o status da bateria, se está sendo carregada, o level da bateria e o tempo de carregamento e descarregamento. Ainda não está 100% lançada, mas já é possível testar o level.

Mais uma boa interação com o usuário para avisá-lo que muito provavelmente a aplicação pode ser prejudicada por conta do desligamento do dispositivo.

Exemplo
{% highlight javascript %}
  navigator.getBattery().then(function(battery){
    console.log('A porcentagem da bateria é '+battery.level*100+'%');
  });
{% endhighlight %}

Suporte: [Battery Status](http://caniuse.com/#search=Battery%20Status)

## Vibration API

API que tem acesso ao hardware de vibração do dispositivo. É bem simples de implementar, pois espara-se um valor inteiro ou array de valores inteiros, onde é intercalado em tempo de vibração e tempo de pausa de vibração.

Existe um projeto da [Nasc](https://github.com/NascHQ/) que é possível testar sem ser em dispositivos que tenham hardware de vibração, chama-se [Vibe](https://naschq.github.io/vibe.js/).

Exemplo
{% highlight javascript %}
  navigator.vibrate([400, 500, 400, 500, 5000]);
{% endhighlight %}

Suporte: [Vibration API](http://caniuse.com/#search=Vibration%20API)

## Web Notifications

Cada vez mais as pessoas na internet são Multi-tasks e estão fazendo inúmeras coisas. O Web Notification API veio para ir além do navegador. Uma mensagem na lateral é aberta fora da página/navegador. É possível passar os parâmetros de title, body, icon, tag e dir.

Exemplo
{% highlight javascript %}
  var title = 'Email recebido'
  ,   options = {
      body: 'Você recebeu um email.',
      tag: 'email',
      icon: 'http://danielgalvao.github.io/assets/images/favicon.png'
  };
  Notification.requestPermission(function() {
    new Notification(title, options);
  });
{% endhighlight %}

Suporte: [Web Notifications](http://caniuse.com/#search=Web%20Notifications)

## Ambient Light

API que expôe o valor da luminosidade do ambiente. O valor retornado é em lux, que é a unidade mundial de iluminamento. Com isso é possível trabalhar sua aplicação para diferentes ambientes, dando uma sensação melhor para o usuário. O valor vai de 0 a +10000, onde zero é totalmente escuro ou sem iluminação.

Exemplo
{% highlight javascript %}

  function updateLightLevel(lightLevel) {
     document.getElementById('lux').innerHTML = Math.round(lightLevel);

     if (lightLevel < 50) {
        document.body.className = 'dark';
     } else if (lightLevel < 10000) {
        document.body.className = 'classic';
     } else {
        document.body.className = 'light';
     }
  }
  var isOldApiSupported = 'ondevicelight' in window;

  if (isOldApiSupported) {
   window.addEventListener('devicelight', function(event) {
      updateLightLevel(event.value);
   });
  }

{% endhighlight %}

Suporte: [Ambient Light](http://caniuse.com/#search=Ambient%20Light)

## GitHub

Criei um [repositório](https://github.com/danielGalvao/html5-examples) no github para colocar alguns exemplos para quem tiver interesse em brincar. Fique a vontade para contribuir com melhorias e novos exemplos.

## Conclusão

É claro que não apresentei aqui nesse post todas as APIs do HTML5, coloquei apenas algumas para uma demonstração do quão enorme está, e em constante evolucão.

Agora é refletir se continua apenas olhando ou vai entrar na onda e curtir o que ela tem para lhe oferecer.

“A mudança é a lei da vida. E aqueles que apenas olham para o passado ou para o presente irão com certeza perder o futuro.” Kennedy, John
