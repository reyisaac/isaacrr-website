var request = require("request");

var options = { method: 'POST',
  url: 'https://api.cloudflare.com/client/v4/zones/7cc16059faa717550d22b8a2707ad99d/purge_cache',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '25',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'api.cloudflare.com',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'X-Auth-Email': 'isaac.reynaldo.cs@gmail.com',
     'X-Auth-Key': '93740f3eeeb9e96ef929e4100851944110b07',
     'Content-Type': 'application/json' },
  body: { purge_everything: true },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log("Cache was purged");
});
