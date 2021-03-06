$(document).ready(function () {
    $("#txtDescription").summernote({
        height: 500,
        toolbar:
            [["style", ["style"]], ["font", ["bold", "italic", "underline", "clear"]], ["fontname", ["fontname"]], ["fontsize", ["fontsize"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["height", ["height"]], ["table", ["table"]], ["insert", ["link", "picture", "hr"]], ["view", ["fullscreen"]]]
    }),
    $(".start-date, .end-date").daterangepicker({ singleDatePicker: !0 })
});