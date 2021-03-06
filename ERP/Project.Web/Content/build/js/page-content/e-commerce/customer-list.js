$(document).ready(function () {
    $("#date-added").daterangepicker({ singleDatePicker: !0 });
    var e = $("#customer-list").DataTable({ pageLength: 10, colReorder: !0, buttons: ["copy", "excel", "pdf", "print"], searching: !1, aLengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]], order: [[5, "desc"]], columnDefs: [{ orderable: !1, targets: [0, 6] }] });
    $("#customer-list_wrapper .col-sm-6:eq(1)").addClass("text-right"), e.buttons().container().appendTo("#customer-list_wrapper .col-sm-6:eq(1)")
});