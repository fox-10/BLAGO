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
            alert('Ошибка! ' + response.errors.join('. '))
        } else {
            alert('Заявка успешно отправлена')
        }
    });
});
