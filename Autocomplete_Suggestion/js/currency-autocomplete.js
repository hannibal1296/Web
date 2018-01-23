$(function () {
    var portals = [
        {value: 'Naver', data: 'https://www.naver.com'},
        {value: 'Google', data: 'https://google.co.kr'},
        {value: 'Daum', data: 'https://www.daum.net'},
    ];

    $('#portal_autocomplete').autocomplete({
        lookup: portals,
        onSelect: function (suggestion) {
            window.location.href = suggestion.data;
        }
    });

});