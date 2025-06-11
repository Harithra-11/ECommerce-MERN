const paypal=require('paypal-rest-sdk')

paypal.configure({
    mode:'sandbox',
    client_id:'ARYsp5Cn_hEguQB-PQXWkgwJWKNPwCYqSIMxGGf_qNoTFU9mJv-24AcFkkbALWdK7oW45beoujxO6hCF',
    client_secret:'EC-2g5sZI3DrXqAYL8YJRrpfCNpS2tMIFBW6X0OM-HJ5xVQxgcUifK7WzXvC2lLSZpze_UD2EvFel76W'
});
module.exports=paypal;