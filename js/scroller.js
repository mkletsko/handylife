$(function () {
    $('#demo5').scrollbox({
        direction: 'h',
        distance: 134
    });
    $('#demo5-backward').click(function () {
        $('#demo5').trigger('backward');
    });
    $('#demo5-forward').click(function () {
        $('#demo5').trigger('forward');
    });
});