/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/node-smtp-client@0.2.4/lib/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/* eslint-disable no-unused-expressions */

var OS=require("os"),U=require("./util"),Address=require("./address"),Message=require("./message"),SMTP=require("./smtp");function Mail(e){if(!(this instanceof Mail))return new Mail(e);this.options=e=e||{},e.domainName=e.domainName||OS.hostname()}function MailTransaction(e,n){this.options=e.options,this.headers=n}exports.Mail=Mail,exports.Message=Message.Message,U.extend(exports,Address),U.extend(exports,SMTP),Mail.prototype.message=function(e){return new MailTransaction(this,e)},MailTransaction.prototype.body=function(e){return this._body=e,this},MailTransaction.prototype.send=function(e){var n,i,s,r=this.options,t=new Message.Message(this.headers).body(this._body);t.headers;e=e||function(e){throw e};try{if(void 0===r.host)e(s=new Error("send: host is required."));else if(n=t.sender()){if(0!=(i=t.recipients()).length)return this.transmit(n,i,t,(function(n){void 0===s&&e(s=n,t)}));e(s=new Error("send: missing recipients (add To, Cc, or Bcc headers)."))}else e(s=new Error("send: missing sender (add From or Sender headers)."))}catch(n){void 0===s&&e(s=n)}return null},MailTransaction.prototype.transmit=function(e,n,i,s){var r,t=SMTP.createClient(this.options);return t.on("error",(function(e){t.end(),void 0===r&&s(r=e)})),t.mail(e,n).on("ready",(function(){this.on("end",(function(){t.quit(),void 0===r&&s(r=null,i)})).end(i.toString())}))};
//# sourceMappingURL=/sm/52efc5d629787785d213372bd34f1575b445741f776e711678042ed78048c01a.map