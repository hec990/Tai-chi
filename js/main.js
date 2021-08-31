let code = document.querySelector(".code_box")
let page = document.querySelector(".page_box")
let style = document.querySelector("#style")




let string = `

`;
let string2 = "";
let n = 0;

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
	}, 50);
};

step(); // 1=>2
