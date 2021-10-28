const request = require('request');
const signedxml = require('xml-crypto').SignedXml, FileKeyInfo = require('xml-crypto').FileKeyInfo;
const fs = require('fs');
const dom = require('@xmldom/xmldom').DOMParser;
const moment = require('moment');
const p12 = require('p12-pem');

//-----goabl variables --------
const asalk = "MEY2cG1nhC02dzj6hnqyKN2A1u6U0LcLAYaPBaLI-3qE-FtthtweGuk";
const opt_url =`https://otp-stage.uidai.gov.in/uidotpserver/2.5/public/0/0/${asalk}`;
const timestamp = moment().format();
const _uid = "999982103445";

//var xml = fs.readFileSync('config.xml').toString();
//var doc = new dom().parseFromString(xml);

var resxml = '';
var xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Otp uid="${_uid}" ac="public" sa="public" ver="2.5" txn="test" ts="${timestamp}" lk="${asalk}" type="T">
 <Opts ch="01"/>
</Otp>`;

//------ configs certs -------
var certPath = 'configs\\paua.p12';

const {pemKey, pemCertificate, commonName} = p12.getPemFromP12(certPath, 'public');

function MyKeyInfo(certPath) {
  this.getKeyInfo = function(key, prefix) {
      prefix = prefix || ''
      prefix = prefix ? prefix + ':' : prefix
    return "<" + prefix + "X509Data><X509SubjectName>CN=Public AUA for Staging Services,OU=Staging Services,O=Public AUA,L=Bangalore,ST=KA,C=IN</X509SubjectName><X509Certificate>"+this.getKey()+"</X509Certificate></" + prefix + "X509Data>"
  }
  this.getKey = function(keyInfo) {   
    return certPath.replace('-----BEGIN CERTIFICATE-----','').replace('-----END CERTIFICATE-----','');
  }
}

// ------ singing xml ---------
function signXml(xml){
  var sig = new signedxml();// .key file
  sig.keyInfoProvider = new MyKeyInfo(pemCertificate); // .pem file
  sig.signingKey = pemKey
  .replace("-----BEGIN RSA PRIVATE KEY-----", "-----BEGIN RSA PRIVATE KEY-----\n")
  .replace("-----END RSA PRIVATE KEY-----", "\n-----END RSA PRIVATE KEY-----");
  sig.addReference("");
  sig.computeSignature(xml);   
  fs.writeFileSync('signed.xml', sig.getSignedXml());
  resxml += sig.getSignedXml();
}

signXml(xml);
// console.log(resxml)

// -----post request--------
var options = {
    'method': 'POST',
    'url': opt_url,
    'headers': {
      'Content-Type': 'application/xml'
    },
    body: xml }

request(options, (err, res)=> {
    if (err) throw new Error(err);
    console.log(res.body);
    
    //var body = res.body;
  });