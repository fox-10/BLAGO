function getFormData($form) {
    var ret = {};
    $.map($form.serializeArray(), function (n) {
        ret[n['name']] = n['value'];
    });
    return ret;
}

$(".user-form").submit(function (event) {
    event.preventDefault(); //prevent default action 
    $.post({
        url: $(this).attr("action"),
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(getFormData($(this)))
    }).done(function (response) {
        console.log(response)
        if (!response || !response.success) {
            alert('РћС€РёР±РєР°! ' + response.errors.join('. '))
        } else {
            alert('Р—Р°СЏРІРєР° СѓСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅР°')
        }
    });
});