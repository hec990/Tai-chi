let code = document.querySelector(".code_box")
let page = document.querySelector(".page_box")
let style = document.querySelector("#style")
let slow = document.querySelector(".slow")
let middle = document.querySelector(".middle")
let fast = document.querySelector(".fast")


let string = `
/*
* 你好，我叫小何
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
* 然后将一个正方形盒子变成圆形
*/
.page {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%,
  rgba(255, 255, 255, 1) 50%, 
  rgba(0, 0, 0, 1) 50%, 
  rgba(0, 0, 0, 1) 100%);
  margin: 20px;
  position: relative;
  animation:haha 10s;
}

.top {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background: black;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%)
}
.top::before {
	display: inline-block;
	content: "";
	width: 50px;
	height: 50px;
	background: white;
	border-radius: 50%;
	position: absolute;
	top:35%;
	left: 50%;
	transform: translate(-50%)
}

.bottom::before {
	display: inline-block;
	content: "";
	width: 50px;
	height: 50px;
	background: black;
	border-radius: 50%;
	position: absolute;
	bottom: 35%;
	left: 50%;
	transform: translate(-50%)
}


.bottom {
	width: 150px;
	height: 150px;
	background: white;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%);
}
/*
* 好了，画完了
* 这个太极送给你！
*/
`;
let string2 = "";
let n = 0;
let times = 50;
let step = () => {
    setTimeout(() => {
        // 如果是回车，就不照搬
        // 如果不是回车就照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        code.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        code.scrollTo(0, 99999);
        if (n < string.length - 1) {
            // 如果 n 不是最后一个,就继续
            n += 1;
            step();
        }
    }, times);
};

step();

// button js

slow.onclick = function() {
    times = 100;
}
middle.onclick = function() {
    times = 50;
}

fast.onclick = function() {
    times = 10;
}