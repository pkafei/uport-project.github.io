## Classes

<dl>
<dt><a href="#Connect">Connect</a> ⇐ <a href="#ConnectCore">ConnectCore</a></dt>
<dd><p>Primary object for frontend interactions with uPort. Bundles all neccesary functionality.</p>
</dd>
<dt><a href="#ConnectCore">ConnectCore</a></dt>
<dd><p>Primary object for frontend interactions with uPort. ConnectCore excludes
 some functionality found in Connect for a more customizable and lightweight integration.
 It does not provide any web3 functionality althought you can still use getProvider
 to get a provider to use with web3 or other libraries. It removes all default
 QR injection functionality. Your can choose how you want to handle the UX and/or
 QR generation and use any QR library you choose. For example, if used in a
 mobile native app QR generation is not even necessary.</p>
</dd>
<dt><a href="#UportSubprovider">UportSubprovider</a></dt>
<dd><p>A web3 style provider which can easily be wrapped with uPort functionality.
 Builds on a base provider. Used in Connect to wrap a provider with uPort specific
 functionality.</p>
</dd>
</dl>

<a name="Connect"></a>

## Connect ⇐ [ConnectCore](#ConnectCore)
Primary object for frontend interactions with uPort. Bundles all neccesary functionality.

**Kind**: global class  
**Extends**: [ConnectCore](#ConnectCore)  

* [Connect](#Connect) ⇐ [ConnectCore](#ConnectCore)
    * [new Connect(appName, [opts])](#new_Connect_new)
    * [.getWeb3()](#Connect+getWeb3) ⇒ web3
    * [.getProvider()](#ConnectCore+getProvider) ⇒ [UportSubprovider](#UportSubprovider)
    * [.requestCredentials([request], [uriHandler])](#ConnectCore+requestCredentials) ⇒ Promise.&lt;Object, Error&gt;
    * [.requestAddress([uriHandler])](#ConnectCore+requestAddress) ⇒ Promise.&lt;String, Error&gt;
    * [.attestCredentials(credential, [uriHandler])](#ConnectCore+attestCredentials) ⇒ Promise.&lt;Object, Error&gt;
    * [.request(request)](#ConnectCore+request) ⇒ Promise.&lt;Object, Error&gt;
    * [.contract(abi)](#ConnectCore+contract) ⇒ Object
    * [.sendTransaction(txobj)](#ConnectCore+sendTransaction) ⇒ Promise.&lt;Object, Error&gt;
    * [.addAppParameters(txobj, callbackUrl)](#ConnectCore+addAppParameters) ⇒ Promise.&lt;Object, Error&gt;


* * *

<a name="new_Connect_new"></a>

### new Connect(appName, [opts])
Instantiates a new uPort connect object.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>appName</td><td>String</td><td></td><td><p>the name of your app</p>
</td>
    </tr><tr>
    <td>[opts]</td><td>Object</td><td></td><td><p>optional parameters</p>
</td>
    </tr><tr>
    <td>opts.credentials</td><td>Object</td><td></td><td><p>pre-configured Credentials object from <a href="http://github.com/uport-project/uport-js">http://github.com/uport-project/uport-js</a> object. Configure this if you need to create signed requests</p>
</td>
    </tr><tr>
    <td>opts.signer</td><td>function</td><td></td><td><p>signing function which will be used to sign JWT&#39;s in the credentials object</p>
</td>
    </tr><tr>
    <td>opts.clientId</td><td>String</td><td></td><td><p>uport identifier for your application this will be used in the default credentials object</p>
</td>
    </tr><tr>
    <td>[opts.network]</td><td>Object</td><td>&#x27;kovan&#x27;</td><td><p>network config object or string name, ie. { id: &#39;0x1&#39;, registry: &#39;0xab5c8051b9a1df1aab0149f8b0630848b7ecabf6&#39;, rpcUrl: &#39;<a href="https://mainnet.infura.io">https://mainnet.infura.io</a>&#39; } or &#39;kovan&#39;, &#39;mainnet&#39;, &#39;ropsten&#39;.</p>
</td>
    </tr><tr>
    <td>opts.rpcUrl</td><td>String</td><td></td><td><p>JSON rpc url (defaults to <a href="https://ropsten.infura.io">https://ropsten.infura.io</a>)</p>
</td>
    </tr><tr>
    <td>opts.infuraApiKey</td><td>String</td><td></td><td><p>Infura API Key (register here <a href="http://infura.io/register.html">http://infura.io/register.html</a>)</p>
</td>
    </tr><tr>
    <td>opts.topicFactory</td><td>function</td><td></td><td><p>function which generates topics and deals with requests and response</p>
</td>
    </tr><tr>
    <td>opts.uriHandler</td><td>function</td><td></td><td><p>default function to consume generated URIs for requests, can be used to display QR codes or other custom UX</p>
</td>
    </tr><tr>
    <td>opts.mobileUriHandler</td><td>function</td><td></td><td><p>default function to consume generated URIs for requests on mobile</p>
</td>
    </tr><tr>
    <td>opts.closeUriHandler</td><td>function</td><td></td><td><p>default function called after a request receives a response, can be to close QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
import { Connect } from 'uport-connect'
const uPort = new Connect('Mydapp')
```

* * *

<a name="Connect+getWeb3"></a>

### connect.getWeb3() ⇒ web3
Instantiates and returns a web3 object wrapped with uPort functionality. For
 more details see uportSubprovider and getProvider in connectCore.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: web3 - A uPort web3 object  

* * *

<a name="ConnectCore+getProvider"></a>

### connect.getProvider() ⇒ [UportSubprovider](#UportSubprovider)
Instantiates and returns a web3 styple provider wrapped with uPort functionality.
 For more details see uportSubprovider. uPort overrides eth_coinbase and eth_accounts
 to start a get address flow or to return an already received address. It also
 overrides eth_sendTransaction to start the send transaction flow to pass the
 transaction to the uPort app.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: [UportSubprovider](#UportSubprovider) - A web3 style provider wrapped with uPort functionality  

* * *

<a name="ConnectCore+requestCredentials"></a>

### connect.requestCredentials([request], [uriHandler]) ⇒ Promise.&lt;Object, Error&gt;
Creates a request given a request object, will also always return the user's
 uPort address. Calls given uriHandler with the uri. Returns a promise to
 wait for the response.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Promise.&lt;Object, Error&gt; - a promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[request]</td><td>Object</td><td>{}</td><td><p>request object</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const req = {requested: ['name', 'country']}
 connect.requestCredentials(req).then(credentials => {
     const address = credentials.address
     const name = credentials.name
     ...
 })

 
```

* * *

<a name="ConnectCore+requestAddress"></a>

### connect.requestAddress([uriHandler]) ⇒ Promise.&lt;String, Error&gt;
Creates a request for only the address of the uPort identity. Calls given
 uriHandler with the uri. Returns a promise to wait for the response.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Promise.&lt;String, Error&gt; - a promise which resolves with an address or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+attestCredentials"></a>

### connect.attestCredentials(credential, [uriHandler]) ⇒ Promise.&lt;Object, Error&gt;
Consumes a credential object and generates a signed JWT. Creates a request
 URI with the JWT. Calls given uriHandler with the URI. Returns a promise to wait
 for the response. Throws error if no signer and/or app identifier is set.
 Will not always receive a response, response is only a status.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Promise.&lt;Object, Error&gt; - a promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>credential</td><td>Object</td><td></td><td><p>credential object</p>
</td>
    </tr><tr>
    <td>credential.sub</td><td>String</td><td></td><td><p>subject of this credential</p>
</td>
    </tr><tr>
    <td>credential.claim</td><td>Object</td><td></td><td><p>statement(s) which this credential claims, contructed as {key: &#39;value&#39;, ...}</p>
</td>
    </tr><tr>
    <td>credential.exp</td><td>String</td><td></td><td><p>expiry time of this credential</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const cred = {
   sub: '0xc3245e75d3ecd1e81a9bfb6558b6dafe71e9f347'
   claim: {'email': 'hello@uport.me'}
   exp: '1300819380'
 }
 connect.attestCredentials(cred).then(res => {
   // response okay, received in uPort app
 })

 
```

* * *

<a name="ConnectCore+request"></a>

### connect.request(request) ⇒ Promise.&lt;Object, Error&gt;
Create a request and returns a promise which resolves the response. This
 function is primarly is used by more specified functions in this class, which
 allow you to easily create the URIs and messaging server topics you need here.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Promise.&lt;Object, Error&gt; - promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>request</td><td>Object</td><td></td><td><p>request object</p>
</td>
    </tr><tr>
    <td>request.uri</td><td>String</td><td></td><td><p>uPort URI</p>
</td>
    </tr><tr>
    <td>request.topic</td><td>String</td><td></td><td><p>messaging server topic object</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td>String</td><td>this.uriHandler</td><td><p>function to consume URI, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+contract"></a>

### connect.contract(abi) ⇒ Object
Builds and returns a contract object which can be used to interact with
 a given contract. Similar to web3.eth.contract but with promises. Once specifying .at(address)
 you can call the contract functions with this object. It will create a request,
 call the uirHandler with the URI, and return a promise which resolves with
 a transtaction ID.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Object - contract object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>abi</td><td>Object</td><td></td><td><p>contract ABI</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+sendTransaction"></a>

### connect.sendTransaction(txobj) ⇒ Promise.&lt;Object, Error&gt;
Given a transaction object, similarly defined as the web3 transaction object,
 it creates a URI which is passes to the uirHandler. It will create request
 and returns a promise which resolves with the transaction id.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Promise.&lt;Object, Error&gt; - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td>Object</td><td></td><td><p>transaction object, can also be wrapped using addAppParameters</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const txobject = {
   to: '0xc3245e75d3ecd1e81a9bfb6558b6dafe71e9f347',
   value: '0.1',
   function: setStatus(string 'hello', bytes32 '0xc3245e75d3ecd1e81a9bfb6558b6dafe71e9f347'),
   appName: 'MyDapp'
 }
 connect.sendTransaction(txobject).then(txID => {
   ...
 })

 
```

* * *

<a name="ConnectCore+addAppParameters"></a>

### connect.addAppParameters(txobj, callbackUrl) ⇒ Promise.&lt;Object, Error&gt;
Adds application specific data to a transaction object. Then uses this data
 when requests are created.

**Kind**: instance method of [Connect](#Connect)  
**Returns**: Promise.&lt;Object, Error&gt; - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td>Object</td><td><p>transaction object</p>
</td>
    </tr><tr>
    <td>callbackUrl</td><td>String</td><td><p>application callback url</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore"></a>

## ConnectCore
Primary object for frontend interactions with uPort. ConnectCore excludes
 some functionality found in Connect for a more customizable and lightweight integration.
 It does not provide any web3 functionality althought you can still use getProvider
 to get a provider to use with web3 or other libraries. It removes all default
 QR injection functionality. Your can choose how you want to handle the UX and/or
 QR generation and use any QR library you choose. For example, if used in a
 mobile native app QR generation is not even necessary.

**Kind**: global class  

* [ConnectCore](#ConnectCore)
    * [new ConnectCore(appName, [opts])](#new_ConnectCore_new)
    * [.getProvider()](#ConnectCore+getProvider) ⇒ [UportSubprovider](#UportSubprovider)
    * [.requestCredentials([request], [uriHandler])](#ConnectCore+requestCredentials) ⇒ Promise.&lt;Object, Error&gt;
    * [.requestAddress([uriHandler])](#ConnectCore+requestAddress) ⇒ Promise.&lt;String, Error&gt;
    * [.attestCredentials(credential, [uriHandler])](#ConnectCore+attestCredentials) ⇒ Promise.&lt;Object, Error&gt;
    * [.request(request)](#ConnectCore+request) ⇒ Promise.&lt;Object, Error&gt;
    * [.contract(abi)](#ConnectCore+contract) ⇒ Object
    * [.sendTransaction(txobj)](#ConnectCore+sendTransaction) ⇒ Promise.&lt;Object, Error&gt;
    * [.addAppParameters(txobj, callbackUrl)](#ConnectCore+addAppParameters) ⇒ Promise.&lt;Object, Error&gt;


* * *

<a name="new_ConnectCore_new"></a>

### new ConnectCore(appName, [opts])
Instantiates a new uPort connectCore object.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>appName</td><td>String</td><td></td><td><p>the name of your app</p>
</td>
    </tr><tr>
    <td>[opts]</td><td>Object</td><td></td><td><p>optional parameters</p>
</td>
    </tr><tr>
    <td>opts.credentials</td><td>Object</td><td></td><td><p>pre-configured Credentials object from <a href="http://github.com/uport-project/uport-js">http://github.com/uport-project/uport-js</a> object. Configure this if you need to create signed requests</p>
</td>
    </tr><tr>
    <td>opts.signer</td><td>function</td><td></td><td><p>signing function which will be used to sign JWT&#39;s in the credentials object</p>
</td>
    </tr><tr>
    <td>opts.clientId</td><td>String</td><td></td><td><p>uport identifier for your application this will be used in the default credentials object</p>
</td>
    </tr><tr>
    <td>[opts.network]</td><td>Object</td><td>&#x27;kovan&#x27;</td><td><p>network config object or string name, ie. { id: &#39;0x1&#39;, registry: &#39;0xab5c8051b9a1df1aab0149f8b0630848b7ecabf6&#39;, rpcUrl: &#39;<a href="https://mainnet.infura.io">https://mainnet.infura.io</a>&#39; } or &#39;kovan&#39;, &#39;mainnet&#39;, &#39;ropsten&#39;.</p>
</td>
    </tr><tr>
    <td>opts.infuraApiKey</td><td>String</td><td></td><td><p>Infura API Key (register here <a href="http://infura.io/register.html">http://infura.io/register.html</a>)</p>
</td>
    </tr><tr>
    <td>opts.topicFactory</td><td>function</td><td></td><td><p>function which generates topics and deals with requests and response</p>
</td>
    </tr><tr>
    <td>opts.uriHandler</td><td>function</td><td></td><td><p>default function to consume generated URIs for requests, can be used to display QR codes or other custom UX</p>
</td>
    </tr><tr>
    <td>opts.mobileUriHandler</td><td>function</td><td></td><td><p>default function to consume generated URIs for requests on mobile</p>
</td>
    </tr><tr>
    <td>opts.closeUriHandler</td><td>function</td><td></td><td><p>default function called after a request receives a response, can be to close QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
import { ConnectCore } from 'uport-connect'
const uPort = new ConnectCore('Mydapp')
```

* * *

<a name="ConnectCore+getProvider"></a>

### connectCore.getProvider() ⇒ [UportSubprovider](#UportSubprovider)
Instantiates and returns a web3 styple provider wrapped with uPort functionality.
 For more details see uportSubprovider. uPort overrides eth_coinbase and eth_accounts
 to start a get address flow or to return an already received address. It also
 overrides eth_sendTransaction to start the send transaction flow to pass the
 transaction to the uPort app.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: [UportSubprovider](#UportSubprovider) - A web3 style provider wrapped with uPort functionality  

* * *

<a name="ConnectCore+requestCredentials"></a>

### connectCore.requestCredentials([request], [uriHandler]) ⇒ Promise.&lt;Object, Error&gt;
Creates a request given a request object, will also always return the user's
 uPort address. Calls given uriHandler with the uri. Returns a promise to
 wait for the response.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Promise.&lt;Object, Error&gt; - a promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[request]</td><td>Object</td><td>{}</td><td><p>request object</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const req = {requested: ['name', 'country']}
 connect.requestCredentials(req).then(credentials => {
     const address = credentials.address
     const name = credentials.name
     ...
 })

 
```

* * *

<a name="ConnectCore+requestAddress"></a>

### connectCore.requestAddress([uriHandler]) ⇒ Promise.&lt;String, Error&gt;
Creates a request for only the address of the uPort identity. Calls given
 uriHandler with the uri. Returns a promise to wait for the response.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Promise.&lt;String, Error&gt; - a promise which resolves with an address or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+attestCredentials"></a>

### connectCore.attestCredentials(credential, [uriHandler]) ⇒ Promise.&lt;Object, Error&gt;
Consumes a credential object and generates a signed JWT. Creates a request
 URI with the JWT. Calls given uriHandler with the URI. Returns a promise to wait
 for the response. Throws error if no signer and/or app identifier is set.
 Will not always receive a response, response is only a status.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Promise.&lt;Object, Error&gt; - a promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>credential</td><td>Object</td><td></td><td><p>credential object</p>
</td>
    </tr><tr>
    <td>credential.sub</td><td>String</td><td></td><td><p>subject of this credential</p>
</td>
    </tr><tr>
    <td>credential.claim</td><td>Object</td><td></td><td><p>statement(s) which this credential claims, contructed as {key: &#39;value&#39;, ...}</p>
</td>
    </tr><tr>
    <td>credential.exp</td><td>String</td><td></td><td><p>expiry time of this credential</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const cred = {
   sub: '0xc3245e75d3ecd1e81a9bfb6558b6dafe71e9f347'
   claim: {'email': 'hello@uport.me'}
   exp: '1300819380'
 }
 connect.attestCredentials(cred).then(res => {
   // response okay, received in uPort app
 })

 
```

* * *

<a name="ConnectCore+request"></a>

### connectCore.request(request) ⇒ Promise.&lt;Object, Error&gt;
Create a request and returns a promise which resolves the response. This
 function is primarly is used by more specified functions in this class, which
 allow you to easily create the URIs and messaging server topics you need here.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Promise.&lt;Object, Error&gt; - promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>request</td><td>Object</td><td></td><td><p>request object</p>
</td>
    </tr><tr>
    <td>request.uri</td><td>String</td><td></td><td><p>uPort URI</p>
</td>
    </tr><tr>
    <td>request.topic</td><td>String</td><td></td><td><p>messaging server topic object</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td>String</td><td>this.uriHandler</td><td><p>function to consume URI, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+contract"></a>

### connectCore.contract(abi) ⇒ Object
Builds and returns a contract object which can be used to interact with
 a given contract. Similar to web3.eth.contract but with promises. Once specifying .at(address)
 you can call the contract functions with this object. It will create a request,
 call the uirHandler with the URI, and return a promise which resolves with
 a transtaction ID.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Object - contract object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>abi</td><td>Object</td><td></td><td><p>contract ABI</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+sendTransaction"></a>

### connectCore.sendTransaction(txobj) ⇒ Promise.&lt;Object, Error&gt;
Given a transaction object, similarly defined as the web3 transaction object,
 it creates a URI which is passes to the uirHandler. It will create request
 and returns a promise which resolves with the transaction id.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Promise.&lt;Object, Error&gt; - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td>Object</td><td></td><td><p>transaction object, can also be wrapped using addAppParameters</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td>function</td><td>this.uriHandler</td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
const txobject = {
   to: '0xc3245e75d3ecd1e81a9bfb6558b6dafe71e9f347',
   value: '0.1',
   function: setStatus(string 'hello', bytes32 '0xc3245e75d3ecd1e81a9bfb6558b6dafe71e9f347'),
   appName: 'MyDapp'
 }
 connect.sendTransaction(txobject).then(txID => {
   ...
 })

 
```

* * *

<a name="ConnectCore+addAppParameters"></a>

### connectCore.addAppParameters(txobj, callbackUrl) ⇒ Promise.&lt;Object, Error&gt;
Adds application specific data to a transaction object. Then uses this data
 when requests are created.

**Kind**: instance method of [ConnectCore](#ConnectCore)  
**Returns**: Promise.&lt;Object, Error&gt; - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td>Object</td><td><p>transaction object</p>
</td>
    </tr><tr>
    <td>callbackUrl</td><td>String</td><td><p>application callback url</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="UportSubprovider"></a>

## UportSubprovider
A web3 style provider which can easily be wrapped with uPort functionality.
 Builds on a base provider. Used in Connect to wrap a provider with uPort specific
 functionality.

**Kind**: global class  

* [UportSubprovider](#UportSubprovider)
    * [new UportSubprovider(args)](#new_UportSubprovider_new)
    * [.send()](#UportSubprovider+send)
    * [.sendAsync(payload, callback)](#UportSubprovider+sendAsync)


* * *

<a name="new_UportSubprovider_new"></a>

### new UportSubprovider(args)
Instantiates a new wrapped provider

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>args</td><td>Object</td><td><p>required arguments</p>
</td>
    </tr><tr>
    <td>args.requestAddress</td><td>function</td><td><p>function to get the address of a uPort identity.</p>
</td>
    </tr><tr>
    <td>args.sendTransaction</td><td>function</td><td><p>function to handle passing transaction information to a uPort application</p>
</td>
    </tr><tr>
    <td>args.provider</td><td>Object</td><td><p>a web3 sytle provider</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="UportSubprovider+send"></a>

### uportSubprovider.send()
Synchronous functionality not supported

**Kind**: instance method of [UportSubprovider](#UportSubprovider)  

* * *

<a name="UportSubprovider+sendAsync"></a>

### uportSubprovider.sendAsync(payload, callback)
Overrides sendAsync to caputure the following RPC calls eth_coinbase, eth_accounts,
 and eth_sendTransaction. All other calls are passed to the based provider.
 eth_coinbase, eth_accounts will get a uPort identity address with getAddress.
 While eth_sendTransaction with send transactions to a uPort app with sendTransaction

**Kind**: instance method of [UportSubprovider](#UportSubprovider)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>payload</td><td>Any</td><td><p>request payload</p>
</td>
    </tr><tr>
    <td>callback</td><td>function</td><td><p>called with response or error</p>
</td>
    </tr>  </tbody>
</table>


* * *

