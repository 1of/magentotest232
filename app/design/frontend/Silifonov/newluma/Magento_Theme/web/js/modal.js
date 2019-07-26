require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function(
        $,
        modal
    ) {
        var options = {
            type: 'popup',
            autoOpen: true,
        };

        var popup = modal(options, $('#popup-modal'));
    }
);
