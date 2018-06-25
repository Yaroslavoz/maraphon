    var div = document.getElementById('wrapper-tool');
var a = document.getElementById("a");
var fadeSpeed = 25; // a value between 1 and 1000 where 1000 will take 10
                    // seconds to fade in and out and 1 will take 0.01 sec.
var tipMessage = "На данный момент проект «Марафон» действует в <b>полу-текстовом формате</b>. Что это значит?! Только то, что я попрошу Вас создать на рабочем столе Вашего компьютера <b>папку под названием Марафон</b> и в ней текстовый файл с названием <b>«Дневник Марафона»</b> и записывать туда  <b><i>номера выбранных карт</i></b>, ответы на все задания, с которыми вы встретитесь на протяжении проекта. В середине пройденного пути, после 7-го дня я попрошу Вас прислать этот файл мне на почту или в вайбере. Для Вашего удобства на страницах проекта будут размещены текстовые поля, в которых Вы, не теряя нити занятия, сможете записывать свои мысли и ответы. Затем можно выделить весь набранный текст <i>(с помощью клавиш Ctrl+A)</i>, скопировать его <i>(клавишами Ctrl+C)</i>, и затем вставить в ваш файл <i>(Ctrl+V)</i>, подписав День Х(х). Где «Х» номер дня, а «х» - страница задания этого дня. Благодарю за понимание :)";

var showTip = function(){    
    var tip = document.createElement("span");
    tip.className = "tooltip";
    tip.id = "tip";
    tip.innerHTML = tipMessage;
    div.appendChild(tip);
    tip.style.opacity="0"; // to start with...
    var intId = setInterval(function(){
        newOpacity = parseFloat(tip.style.opacity)+0.1;
        tip.style.opacity = newOpacity.toString();
        if(tip.style.opacity == "1"){
            clearInterval(intId);
        }
    }, fadeSpeed);
};
var hideTip = function(){
    var tip = document.getElementById("tip");
    var intId = setInterval(function(){
        newOpacity = parseFloat(tip.style.opacity)-0.1;
        tip.style.opacity = newOpacity.toString();
        if(tip.style.opacity == "0"){
            clearInterval(intId);
            tip.remove();
        }
    }, fadeSpeed);
    tip.remove();
};

a.addEventListener("mouseover", showTip, false);
a.addEventListener("mouseout", hideTip, false);
