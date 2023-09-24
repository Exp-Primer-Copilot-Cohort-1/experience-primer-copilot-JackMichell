function skillsMember() {
    var member = document.getElementById("member");
    var memberText = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = memberText.split(" ");
    var memberText = memberText[0];
    var memberText = memberText.concat(" ");
}