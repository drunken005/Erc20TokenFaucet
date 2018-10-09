<html>
<head>
    <title>Erc20 Faucet</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="/public/css/main.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

</head>
<body>
<nav class="navbar navbar-default"><h1 class="container-fluid">TestNet Erc20 Tokens Faucet</h1></nav>
<section class="container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>faucet</h3>
        </div>
        <div class="panel-body">
            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-4">
                        <select name="token_select" id="token_select" class="form-control" placeholder="Select Token">
                            <option value="">Select Token</option>
                            {% for token in tokens %}
                            <option value={{ token.address }}>{{ token.name+" ("+ token.symbol+")" }}</option>
                            {% else %}
                            <option>none</option>
                            {% endfor %}
                        </select>
                    </div>
                    <div class="col-sm-3" id="token_address"><a id="address" class="control-label"></a></div>

                </div>
                <div class="form-group">
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="user_address" placeholder="input address">
                    </div>
                    <div class="col-sm-3" id="token_address">
                        <button id="request_token" name="request_token" key={{hostUrl}} class="btn btn-success" style="margin: 4px;">
                            request {{amount}} token from faucet
                        </button>
                    </div>
                </div>
                <div>You can request <a href="https://faucet.ropsten.be/" target="_blank">ETH</a></div>

            </div>

        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading"><h3>transactions</h3></div>
        <div id="transactions" name="transactions" class="panel-body" style="flex-direction: column; display: flex;">
        </div>
    </div>
</section>
</body>
<script src="/public/js/main.js"></script>
</html>