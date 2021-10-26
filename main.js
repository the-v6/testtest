const url ="https://otp-stage.uidai.gov.in/uidotpserver/2.5/public/0/0/MAElpSz56NccNf11_wSM_RrXwa7n8_CaoWRrjYYWouA1r8IoJjuaGYg";

const data = {}

let option = {
    method : 'POST',
    headers : {
        'Content-Type' :'application/xml',
    },
    body : JSON.stringify(data)
}

fetch(url,option).then(res => res.json()).then(d => console.log(d));