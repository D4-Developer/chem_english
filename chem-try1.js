console.log("runninggggggggggggggggggggggg");

const greenOutline = (t) => {
	t.style.outline = "3px dashed green"; setTimeout(() => t.style.outline = "none", 500)
};
const redOutline = (t) => t.style.outline = "3px dashed deeppink";
const getMath = () => $(".ansed_root").css("border", "1px dashed red");
  
  const tableIssues = () => {
	Array.prototype.slice.call(document.getElementsByTagName("table")).forEach(function (t) {
		t.hasAttribute("aria-hidden") ? "true" == t.getAttribute("aria-hidden") && (greenOutline(t), t.setAttribute("title", "Table Silent")) : t.hasAttribute("role") ? (console.log(t), temp = t.getAttribute("role"), "presentation" != temp && (redOutline(t), t.setAttribute("title", "Speling mistake in Role Presentation"))) : t.hasAttribute("aria-describedby") ? (console.log(t), caption_id = t.getAttribute("aria-describedby"), caption_text = "Caption: " + document.getElementById(caption_id).innerHTML, t.setAttribute("title", caption_text), greenOutline(t), checkThScope(t), checkBlackTd(t)) : (console.log(t.parentElement), parentDiv = t.parentElement, parentDiv.hasAttribute("aria-hidden") ? "true" == parentDiv.getAttribute("aria-hidden") ? (console.log("aria-hidden"), greenOutline(t), t.setAttribute("title", "Table Silent")) : (redOutline(t), t.setAttribute("title", "Something not right")) : (console.log(t), console.log("Does not"), redOutline(t), t.setAttribute("title", "Either no role presentation or no caption")))
	})
}
function lineBreak() {
	Array.prototype.slice.call(document.getElementsByTagName("span")).forEach(function (t) {
		"Line break" == t.innerHTML && (t.style.outline = "0.19rem solid deeppink")
	})
}
const viewTA = () => { $(".feedback_block").css("display", ""); $(".feedback_block").children().css("display", "") }
function checkBlackTd(t) {
	t.setAttribute("id", "tempID1"), arrtd = $("#tempID1 td"), arrtd = arrtd.toArray(), arrtd.forEach(function (t) {
		"" == t.innerHTML && ($("#tempID1").attr("title", $("#tempID1").attr("title") + "\nIssue: Some TD does not have ADA Alternate of blank"), redOutline(t))
	}), t.removeAttribute("id")
}
function checkThScope(t) {
	t.setAttribute("id", "tempID2");arrth = $("#tempID2 th"), arrth = arrth.toArray(), arrth.forEach(function (t) {
		t.hasAttribute("scope") ? (scope = t.getAttribute("scope"), "" == scope && ($("#tempID2").attr("title", $("#tempID2").attr("title") + "\nIssue: Improper Scope"), redOutline(t))) : ($("#tempID2").attr("title", $("#tempID2").attr("title") + "\nIssue: Scope for TH missing"), redOutline(t))
	}), t.removeAttribute("id")
}
$(document).ready(function () {
	document.onkeydown = (e) => {
		if (e.which == 82) {
			e.preventDefault();
			$(".tooltiptarget_banner > div:nth-child(4) > div:nth-child(1) > table > tbody > tr > td:nth-child(3) > span > input[type=text]").focus();
		}
	}
	setTimeout(()=>{
		$(".tooltiptarget_bottomNavbar > div:nth-child(1)").prepend('<button type="button" id="smt_bottomnav_button_input_cg" style="cursor: pointer; outline: black none medium; outline-offset: 0px; margin: 0px 16px 0px 0px; display: inline-block;"><div><div class="textContent">CG</div></div></button>');
		$("#smt_bottomnav_button_input_cg").addClass($('#smt_bottomnav_button_input_checkAnswer').attr('class'));
		$("#smt_bottomnav_button_input_cg").click(()=>{ graphADA() });
		$(".tooltiptarget_bottomNavbar > div:nth-child(1)").prepend('<button type="button" id="smt_bottomnav_button_input_ta" style="cursor: pointer; outline: black none medium; outline-offset: 0px; margin: 0px 16px 0px 0px; display: inline-block;"><div><div class="textContent">TA</div></div></button>');
		$("#smt_bottomnav_button_input_ta").addClass($('#smt_bottomnav_button_input_checkAnswer').attr('class'));
		$("#smt_bottomnav_button_input_ta").click(()=>{ viewTA() });
		$(".tooltiptarget_bottomNavbar > div:nth-child(1)").prepend('<button type="button" id="smt_bottomnav_button_input_lb" style="cursor: pointer; outline: black none medium; outline-offset: 0px; margin: 0px 16px 0px 0px; display: inline-block;"><div><div class="textContent">LB</div></div></button>');
		$("#smt_bottomnav_button_input_lb").addClass($('#smt_bottomnav_button_input_checkAnswer').attr('class'));
		$("#smt_bottomnav_button_input_lb").click(()=>{ lineBreak(); getMath(); });
		$(".tooltiptarget_bottomNavbar > div:nth-child(1)").prepend('<button type="button" id="smt_bottomnav_button_input_rt" style="cursor: pointer; outline: black none medium; outline-offset: 0px; margin: 0px 16px 0px 0px; display: inline-block;"><div><div class="textContent">RT</div></div></button>');
		$("#smt_bottomnav_button_input_rt").addClass($('#smt_bottomnav_button_input_checkAnswer').attr('class'));
		$("#smt_bottomnav_button_input_rt").click(function () { tableIssues() });
		setTimeout(function(){buttonRemove();let e=$('*:contains("getExistingTool error "):last');0!=e.length&&$("body").prepend('<h2 class="err_ExistingTool" style="color: red;">getExistingTool error is there!</h2>')},3e3);
		$(".tooltiptarget_banner > div:nth-child(4) > div:nth-child(1) > table > tbody > tr > td:nth-child(3) > span > input[type=text]").keydown((event) => { if (event.which == 13) debugTimeout(); });
		const seedEle = $(".tooltiptarget_mainview > div.tooltiptarget_banner > div:nth-child(4) > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > div > span > input[type=text]").keydown((event) => { if (event.which == 13) debugTimeout(); });
		$(".tooltiptarget_banner > div:nth-child(4) > div:nth-child(1) > table > tbody > tr > td:nth-child(3) > span > button").click(() => debugTimeout(3500));
		$("#lesson_question > div.section_header > strong").dblclick( (e) => {seedEle.trigger(jQuery.Event('keypress', { keycode: 13 }));} )
	}, 1500);
});
const buttonRemove=()=>{let t=$('*:contains("DebugText"):last');if(0!=t.length){$(t).css({color:"red","font-weight":"bold"});let n=$('*:contains("Done"):last');0!=n.length&&$(n).parent().css("display","none");let e=$('*:contains("Fixed"):last');0!=e.length&&$(e).parent().css("display","none")}};
const debugTimeout = (delayed = 3000) => setTimeout(() => buttonRemove(), delayed);
