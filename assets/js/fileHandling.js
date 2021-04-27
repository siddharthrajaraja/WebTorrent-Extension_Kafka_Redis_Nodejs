
async function handleFilesUpload(event) {

const uploadFiles = event.target.files;

var files = document.querySelector('input[type=file]').files;

    for (var i = 0; i < event.target.files.length; i++) {
        console.log("abc",i,files[i].files);
    }
}