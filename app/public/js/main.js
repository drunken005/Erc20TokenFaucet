$("#token_select").change(function () {
    var address = $("#token_select").val();
    $("#address").remove();
    var url = "https://ropsten.etherscan.io/address/" + address;
    $("#token_address").append('<a href=' + url + ' target="_blank" id="address" class="control-label">' + address + '</a>');
});


$("#request_token").click(function () {
    var token = $("#token_select").val();
    var address = $("#user_address").val();
    var url = $("#request_token").attr('key');
    if (!token) {
        return alert('Please select a token!')
    }
    if (!address) {
        return alert('Please enter your address!')
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({token: token, address: address}),
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json())
        .then(
            result => {
                console.log(result);
                if (result.success) {
                    var url = "https://ropsten.etherscan.io/tx/" + result.data;
                    $("#transactions").append('<a href=' + url + ' target="_blank" id="txHash" class="control-label">' + result.data + '</a>');
                } else {
                    alert('Request error: ' + result.error)
                }
            });

});

