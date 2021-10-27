const request = require('request');
const signedxml = require('xml-crypto').SignedXml, FileKeyInfo = require('xml-crypto').FileKeyInfo;
const fs = require('fs');
const dom = require('@xmldom/xmldom').DOMParser;
const moment = require('moment');

//-----goabl variables --------
const asalk = "MAElpSz56NccNf11_wSM_RrXwa7n8_CaoWRrjYYWouA1r8IoJjuaGYg";
const opt_url =`https://otp-stage.uidai.gov.in/uidotpserver/2.5/public/0/0/${asalk}`;
const timestamp = moment().format();
const _uid = "999982103445";

//var xml = fs.readFileSync('config.xml').toString();
//var doc = new dom().parseFromString(xml);
var resxml = '';
var xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Otp uid="${_uid}" ac="public" sa="public" ver="2.5" txn="test" ts="${timestamp}" lk="${asalk}" type="A">
 <Opts ch="01"/>
</Otp>`;

//------ configs certs -------
var certPath = 'configs\\cert.pem';
var keyPath = 'configs\\paua.key.pem';



// ------ singing xml ---------
function signXml(xml,certPath, keyPath){
  var sig = new signedxml();
  sig.keyInfoProvider = new FileKeyInfo(keyPath); // .key file
  sig.signingKey = fs.readFileSync(keyPath); // .pem file
  sig.computeSignature(xml);   
  fs.writeFileSync('signed.xml', sig.getSignedXml());
  resxml += sig.getSignedXml();
}

signXml(xml, certPath, keyPath);
console.log(resxml)

// -----post request--------
var options = {
    'method': 'POST',
    'url': opt_url,
    'headers': {
      'Content-Type': 'text/xml'
    },
    body: resxml }

request(options, (err, res)=> {
    if (err) throw new Error(err);
    console.log(res.body);
    
    //var body = res.body;
  });