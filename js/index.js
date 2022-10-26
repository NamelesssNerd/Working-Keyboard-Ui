const KeyBoardData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '.', '', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', 'X', '123?', '<', '>', 'space', '-', '_', '->'];

const ButtonArea = document.getElementById('ButtonArea');
const DisplayArea = document.getElementById('DisplayArea');
let TotalString = '';
for (var i = 0; i <= 46; i++) {
    const OurButton = `<div class="Letter" onclick="CallMePlease(${i})"></div>`;
    ButtonArea.insertAdjacentHTML('beforeend', OurButton);
}
const Letter = document.querySelectorAll('.Letter');
Array.from(Letter).forEach((currenElem, Index) => {
    Letter[Index].textContent = KeyBoardData[Index];
})
DisplayArea.textContent = TotalString;
function CallMePlease(ButtonNumber) {
    if (ButtonNumber == 43) {
        TotalString += ' ';
        DisplayArea.textContent = TotalString;
    } else {
        if (TotalString.length > 225) {
            CallSmaller(TotalString.length);
            TotalString += KeyBoardData[ButtonNumber];
            DisplayArea.textContent = TotalString;
        } else {
            TotalString += KeyBoardData[ButtonNumber];
            DisplayArea.textContent = TotalString;
        }
    }
}
function CallSmaller(fontSize) {
    if ((fontSize > 225) && (fontSize < 280)) {
        DisplayArea.style.fontSize = 1 + 'rem';
    } else if ((fontSize > 280) && (fontSize < 310)) {
        DisplayArea.style.fontSize = .5 + 'rem';
    }
}