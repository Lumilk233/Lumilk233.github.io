const mengd={wrap(e,t,n="",r=""){t=document.createElement(t);n&&(t.id=n),r&&(t.className=r),e.parentNode.insertBefore(t,e),t.appendChild(e)},$id(e){return document.getElementById(e)},$query(e){return document.querySelector(e)},$queryAll(e){return document.querySelectorAll(e)},getScript(e,t){var n=document.createElement("script");n.src=e,void 0!==t&&(n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){n.onload=null,t()}),document.body.appendChild(n)},throttle(t,n){var r=0;return function(){var e=new Date;n<e-r&&(t.apply(this,arguments),r=e)}},getDaysDiffBetweenDates(e){return parseInt((new Date-new Date(e))/864e5)}};