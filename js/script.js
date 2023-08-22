var isInEditMode = true;
var showSourceCode = true;
(function() {
    textEditorDocument.document.designMode = 'on';
})()

function execCmd(cmd) {
    textEditorDocument.document.execCommand(cmd, true, null)
}

function execCmdWithArg(cmd, arg) {
    textEditorDocument.document.execCommand(cmd, true, arg)
}

function toggleEdit() {
    if(isInEditMode) {
        textEditorDocument.document.designMode = 'off';
        isInEditMode = false;
    } else {
        textEditorDocument.document.designMode = "on";
        isInEditMode = true;
    }
}

function toggleSourceCode() {
    if(showSourceCode) {
        textEditorDocument.document.getElementsByTagName("body")[0].textContent = textEditorDocument.document.getElementsByTagName("body")[0].innerHTML;
        showSourceCode = true;
    } else {
        textEditorDocument.document.getElementsByTagName("body")[0].innerHTML = textEditorDocument.document.getElementsByTagName("body")[0].textContent;
        showSourceCode = false;
    }
}

function copyToClipboard() {
    textEditorDocument.document.execCommand("copy");
    Swal.fire({
        title:'کپی در کلیپ بورد',
        icon: 'success',
        button: 'تایید',
        text: 'متن دلخواه شما داخل کلیپ بورد کپی شد'
    });
}
