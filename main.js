const request = require('request');

const asalk = "MAElpSz56NccNf11_wSM_RrXwa7n8_CaoWRrjYYWouA1r8IoJjuaGYg";
const opt_url =`https://otp-stage.uidai.gov.in/uidotpserver/2.5/public/0/0/${asalk}`;

var options = {
    'method': 'POST',
    'url': opt_url,
    'headers': {
      'Content-Type': 'text/xml'
    },
    body: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Otp uid="927659984482" ac="public" sa="public" ver="2.5" txn="test" ts="2021-10-24T19:50:03" lk="MAElpSz56NccNf11_wSM_RrXwa7n8_CaoWRrjYYWouA1r8IoJjuaGYg" type="A">\r\n <Opts ch="01"/>\r\n <Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><CanonicalizationMethod \r\n\r\nAlgorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><Reference \r\n\r\nURI=""><Transforms><Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/></Transforms><DigestMethod \r\n\r\nAlgorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><DigestValue>/BW8qlNQwImL/C\r\n\r\n+rzzUP7D9kE6E=</DigestValue></Reference></SignedInfo><SignatureValue>WonaS0Xag17YBPwXt/FYG/+VB+GXUK7NTBEzc1weGl38E7NRkEwTXfOs1JhR5c562e57/z4lm2aN\r\n+DAez5XrE+V1MigWtzuW5yPEOVPWZMW5DtocCz8JXkFqmsDz9wEGW6E8knGA/BzAEa9ipfHunYnG\r\n78YvTze/ffO/EVAOfS8HXhSY1s6V4HrsZuLrI/3HtMsjjurynnkFOpBcERfSpshuiU3WLsUasDi2\r\nL4UDE3oyaoUxlcO89Oih59cmRoC0xa/7NDOGnaRNcZhkeBpmOiEBW6vKUrhNMnp8gahetv7mqZ93\r\n3Mf4Dza2kkMke2k5124DiR5SkGlGfKrQjc5K8Q==</SignatureValue><KeyInfo><X509Data><X509SubjectName>CN=Public AUA for Staging Services,OU=Staging \r\n\r\nServices,O=Public \r\n\r\nAUA,L=Bangalore,ST=KA,C=IN</X509SubjectName><X509Certificate>MIIDuTCCAqGgAwIBAgIHBbjQqpe5NjANBgkqhkiG9w0BAQUFADCBjTELMAkGA1UEBhMCSU4xCzAJ\r\nBgNVBAgTAktBMRIwEAYDVQQHEwlCYW5nYWxvcmUxEzARBgNVBAoTClB1YmxpYyBBVUExGTAXBgNV\r\nBAsTEFN0YWdpbmcgU2VydmljZXMxLTArBgNVBAMTJFJvb3QgUHVibGljIEFVQSBmb3IgU3RhZ2lu\r\nZyBTZXJ2aWNlczAeFw0yMDA1MjUwOTMyMjRaFw0yNDA1MjUwOTMyMjRaMIGIMQswCQYDVQQGEwJJ\r\nTjELMAkGA1UECBMCS0ExEjAQBgNVBAcTCUJhbmdhbG9yZTETMBEGA1UEChMKUHVibGljIEFVQTEZ\r\nMBcGA1UECxMQU3RhZ2luZyBTZXJ2aWNlczEoMCYGA1UEAxMfUHVibGljIEFVQSBmb3IgU3RhZ2lu\r\nZyBTZXJ2aWNlczCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAI+b6Gcwg0+MJP+YUePf\r\nlCCEBWj3PdICPenFMqETxTACphlhPKjO2XAnWU3frp+a76NBqEbZ5ZOrUeE70Dj9BHZo7gFm72BN\r\nuU5AFYwvCGzCVButExgVAe9bWO07bG1TKwdPEPUzO2O8QV7YaaHFU+SfZTPRam3ycn6nfIceue9n\r\n1IH6sAdCgcfiKpgBYbenrG+u9bNVrvasYCXPUBqS1CzsVGv75ekdCu7vxbr3w941KO31kdCQpVVa\r\ns+khAC3vMKWkhR77PHoGQvx5yvsGW9QPVw+JLHabGlRNe3C4xMZ1rdCUslQ7VshQlkDQIxiu9jOk\r\n+B1wexT78wtVGvunolkCAwEAAaMhMB8wHQYDVR0OBBYEFB6nQeWTHs78YZvfDfnSWIuXuU2cMA0G\r\nCSqGSIb3DQEBBQUAA4IBAQAp+MnpqVO1SJ+ilCS++L7WV4AQlVTwCzHW4QyIV+6Mb50PIYhmoFXj\r\nKF7t71jvQ3WP2jocp7Ouy07+sT7Knuhy4/RpCwCSyZpKCQjfRqKPEW8CYc17TEYUxufvwBfzzOGZ\r\nCTIwtgGrOC23XoVXNd+bwn1Lbsrb0dd98Rp3AGccwcVPp8TgwzNY2oH78HRF/ScUONebyCT+eOIC\r\nVxjc73qnYvGe5t25bl/kgm6NsAYimr/at7suqiMZQWp5SEfbRYCZ9wvQsJgX01g92zk3ELV9g5fb\r\nO9VrKr9vN0QA7VjkrfzuCtR/MGIsYBpZzcX1vDlUscXO1u4fVROETTOSS3jc</X509Certificate></X509Data></KeyInfo></Signature>\r\n</Otp>\r\n'
}

request(options, (err, res)=> {
    if (err) throw new Error(err);
    console.log(res.body);
    //var body = res.body;
  });