## Classes

<dl>
<dt><a href="#Connect">Connect</a> ⇐ <code><a href="#ConnectCore">ConnectCore</a></code></dt>
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
</dl>

<a name="Connect"></a>

## Connect ⇐ [<code>ConnectCore</code>](#ConnectCore)
Primary object for frontend interactions with uPort. Bundles all neccesary functionality.

**Kind**: global class  
**Extends**: [<code>ConnectCore</code>](#ConnectCore)  

* [Connect](#Connect) ⇐ [<code>ConnectCore</code>](#ConnectCore)
    * [new Connect(appName, [opts])](#new_Connect_new)
    * [.getWeb3()](#Connect+getWeb3) ⇒ <code>web3</code>
    * [.getProvider()](#ConnectCore+getProvider) ⇒ <code>UportSubprovider</code>
    * [.requestCredentials([request], [uriHandler])](#ConnectCore+requestCredentials) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.requestAddress([uriHandler])](#ConnectCore+requestAddress) ⇒ <code>Promise.&lt;String, Error&gt;</code>
    * [.attestCredentials(credential, [uriHandler])](#ConnectCore+attestCredentials) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.request(request)](#ConnectCore+request) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.contract(abi)](#ConnectCore+contract) ⇒ <code>Object</code>
    * [.sendTransaction(txobj)](#ConnectCore+sendTransaction) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.addAppParameters(txobj, callbackUrl)](#ConnectCore+addAppParameters) ⇒ <code>Promise.&lt;Object, Error&gt;</code>


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
    <td>appName</td><td><code>String</code></td><td></td><td><p>the name of your app</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>optional parameters</p>
</td>
    </tr><tr>
    <td>opts.credentials</td><td><code>Object</code></td><td></td><td><p>pre-configured Credentials object from <a href="http://github.com/uport-project/uport-js">http://github.com/uport-project/uport-js</a> object. Configure this if you need to create signed requests</p>
</td>
    </tr><tr>
    <td>opts.signer</td><td><code>function</code></td><td></td><td><p>signing function which will be used to sign JWT&#39;s in the credentials object</p>
</td>
    </tr><tr>
    <td>opts.clientId</td><td><code>String</code></td><td></td><td><p>uport identifier for your application this will be used in the default credentials object</p>
</td>
    </tr><tr>
    <td>[opts.network]</td><td><code>Object</code></td><td><code>&#x27;kovan&#x27;</code></td><td><p>network config object or string name, ie. { id: &#39;0x1&#39;, registry: &#39;0xab5c8051b9a1df1aab0149f8b0630848b7ecabf6&#39;, rpcUrl: &#39;<a href="https://mainnet.infura.io">https://mainnet.infura.io</a>&#39; } or &#39;kovan&#39;, &#39;mainnet&#39;, &#39;ropsten&#39;.</p>
</td>
    </tr><tr>
    <td>opts.rpcUrl</td><td><code>String</code></td><td></td><td><p>JSON rpc url (defaults to <a href="https://ropsten.infura.io">https://ropsten.infura.io</a>)</p>
</td>
    </tr><tr>
    <td>opts.infuraApiKey</td><td><code>String</code></td><td></td><td><p>Infura API Key (register here <a href="http://infura.io/register.html">http://infura.io/register.html</a>)</p>
</td>
    </tr><tr>
    <td>opts.topicFactory</td><td><code>function</code></td><td></td><td><p>function which generates topics and deals with requests and response</p>
</td>
    </tr><tr>
    <td>opts.uriHandler</td><td><code>function</code></td><td></td><td><p>default function to consume generated URIs for requests, can be used to display QR codes or other custom UX</p>
</td>
    </tr><tr>
    <td>opts.mobileUriHandler</td><td><code>function</code></td><td></td><td><p>default function to consume generated URIs for requests on mobile</p>
</td>
    </tr><tr>
    <td>opts.closeUriHandler</td><td><code>function</code></td><td></td><td><p>default function called after a request receives a response, can be to close QR codes or other custom UX</p>
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

### connect.getWeb3() ⇒ <code>web3</code>
Instantiates and returns a web3 object wrapped with uPort functionality. For
 more details see uportSubprovider and getProvider in connectCore.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>web3</code> - A uPort web3 object  

* * *

<a name="ConnectCore+getProvider"></a>

### connect.getProvider() ⇒ <code>UportSubprovider</code>
Instantiates and returns a web3 styple provider wrapped with uPort functionality.
 For more details see uportSubprovider. uPort overrides eth_coinbase and eth_accounts
 to start a get address flow or to return an already received address. It also
 overrides eth_sendTransaction to start the send transaction flow to pass the
 transaction to the uPort app.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>UportSubprovider</code> - A web3 style provider wrapped with uPort functionality  

* * *

<a name="ConnectCore+requestCredentials"></a>

### connect.requestCredentials([request], [uriHandler]) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Creates a request given a request object, will also always return the user's
 uPort address. Calls given uriHandler with the uri. Returns a promise to
 wait for the response.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[request]</td><td><code>Object</code></td><td><code>{}</code></td><td><p>request object</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
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

### connect.requestAddress([uriHandler]) ⇒ <code>Promise.&lt;String, Error&gt;</code>
Creates a request for only the address of the uPort identity. Calls given
 uriHandler with the uri. Returns a promise to wait for the response.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Promise.&lt;String, Error&gt;</code> - a promise which resolves with an address or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+attestCredentials"></a>

### connect.attestCredentials(credential, [uriHandler]) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Consumes a credential object and generates a signed JWT. Creates a request
 URI with the JWT. Calls given uriHandler with the URI. Returns a promise to wait
 for the response. Throws error if no signer and/or app identifier is set.
 Will not always receive a response, response is only a status.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>credential</td><td><code>Object</code></td><td></td><td><p>credential object</p>
</td>
    </tr><tr>
    <td>credential.sub</td><td><code>String</code></td><td></td><td><p>subject of this credential</p>
</td>
    </tr><tr>
    <td>credential.claim</td><td><code>Object</code></td><td></td><td><p>statement(s) which this credential claims, contructed as {key: &#39;value&#39;, ...}</p>
</td>
    </tr><tr>
    <td>credential.exp</td><td><code>String</code></td><td></td><td><p>expiry time of this credential</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
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

### connect.request(request) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Create a request and returns a promise which resolves the response. This
 function is primarly is used by more specified functions in this class, which
 allow you to easily create the URIs and messaging server topics you need here.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>request</td><td><code>Object</code></td><td></td><td><p>request object</p>
</td>
    </tr><tr>
    <td>request.uri</td><td><code>String</code></td><td></td><td><p>uPort URI</p>
</td>
    </tr><tr>
    <td>request.topic</td><td><code>String</code></td><td></td><td><p>messaging server topic object</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td><code>String</code></td><td><code>this.uriHandler</code></td><td><p>function to consume URI, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+contract"></a>

### connect.contract(abi) ⇒ <code>Object</code>
Builds and returns a contract object which can be used to interact with
 a given contract. Similar to web3.eth.contract but with promises. Once specifying .at(address)
 you can call the contract functions with this object. It will create a request,
 call the uirHandler with the URI, and return a promise which resolves with
 a transtaction ID.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Object</code> - contract object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>abi</td><td><code>Object</code></td><td></td><td><p>contract ABI</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+sendTransaction"></a>

### connect.sendTransaction(txobj) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Given a transaction object, similarly defined as the web3 transaction object,
 it creates a URI which is passes to the uirHandler. It will create request
 and returns a promise which resolves with the transaction id.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td><code>Object</code></td><td></td><td><p>transaction object, can also be wrapped using addAppParameters</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
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

### connect.addAppParameters(txobj, callbackUrl) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Adds application specific data to a transaction object. Then uses this data
 when requests are created.

**Kind**: instance method of [<code>Connect</code>](#Connect)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td><code>Object</code></td><td><p>transaction object</p>
</td>
    </tr><tr>
    <td>callbackUrl</td><td><code>String</code></td><td><p>application callback url</p>
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
    * [.getProvider()](#ConnectCore+getProvider) ⇒ <code>UportSubprovider</code>
    * [.requestCredentials([request], [uriHandler])](#ConnectCore+requestCredentials) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.requestAddress([uriHandler])](#ConnectCore+requestAddress) ⇒ <code>Promise.&lt;String, Error&gt;</code>
    * [.attestCredentials(credential, [uriHandler])](#ConnectCore+attestCredentials) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.request(request)](#ConnectCore+request) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.contract(abi)](#ConnectCore+contract) ⇒ <code>Object</code>
    * [.sendTransaction(txobj)](#ConnectCore+sendTransaction) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
    * [.addAppParameters(txobj, callbackUrl)](#ConnectCore+addAppParameters) ⇒ <code>Promise.&lt;Object, Error&gt;</code>


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
    <td>appName</td><td><code>String</code></td><td></td><td><p>the name of your app</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>optional parameters</p>
</td>
    </tr><tr>
    <td>opts.credentials</td><td><code>Object</code></td><td></td><td><p>pre-configured Credentials object from <a href="http://github.com/uport-project/uport-js">http://github.com/uport-project/uport-js</a> object. Configure this if you need to create signed requests</p>
</td>
    </tr><tr>
    <td>opts.signer</td><td><code>function</code></td><td></td><td><p>signing function which will be used to sign JWT&#39;s in the credentials object</p>
</td>
    </tr><tr>
    <td>opts.clientId</td><td><code>String</code></td><td></td><td><p>uport identifier for your application this will be used in the default credentials object</p>
</td>
    </tr><tr>
    <td>[opts.network]</td><td><code>Object</code></td><td><code>&#x27;kovan&#x27;</code></td><td><p>network config object or string name, ie. { id: &#39;0x1&#39;, registry: &#39;0xab5c8051b9a1df1aab0149f8b0630848b7ecabf6&#39;, rpcUrl: &#39;<a href="https://mainnet.infura.io">https://mainnet.infura.io</a>&#39; } or &#39;kovan&#39;, &#39;mainnet&#39;, &#39;ropsten&#39;.</p>
</td>
    </tr><tr>
    <td>opts.infuraApiKey</td><td><code>String</code></td><td></td><td><p>Infura API Key (register here <a href="http://infura.io/register.html">http://infura.io/register.html</a>)</p>
</td>
    </tr><tr>
    <td>opts.topicFactory</td><td><code>function</code></td><td></td><td><p>function which generates topics and deals with requests and response</p>
</td>
    </tr><tr>
    <td>opts.uriHandler</td><td><code>function</code></td><td></td><td><p>default function to consume generated URIs for requests, can be used to display QR codes or other custom UX</p>
</td>
    </tr><tr>
    <td>opts.mobileUriHandler</td><td><code>function</code></td><td></td><td><p>default function to consume generated URIs for requests on mobile</p>
</td>
    </tr><tr>
    <td>opts.closeUriHandler</td><td><code>function</code></td><td></td><td><p>default function called after a request receives a response, can be to close QR codes or other custom UX</p>
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

### connectCore.getProvider() ⇒ <code>UportSubprovider</code>
Instantiates and returns a web3 styple provider wrapped with uPort functionality.
 For more details see uportSubprovider. uPort overrides eth_coinbase and eth_accounts
 to start a get address flow or to return an already received address. It also
 overrides eth_sendTransaction to start the send transaction flow to pass the
 transaction to the uPort app.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>UportSubprovider</code> - A web3 style provider wrapped with uPort functionality  

* * *

<a name="ConnectCore+requestCredentials"></a>

### connectCore.requestCredentials([request], [uriHandler]) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Creates a request given a request object, will also always return the user's
 uPort address. Calls given uriHandler with the uri. Returns a promise to
 wait for the response.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[request]</td><td><code>Object</code></td><td><code>{}</code></td><td><p>request object</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
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

### connectCore.requestAddress([uriHandler]) ⇒ <code>Promise.&lt;String, Error&gt;</code>
Creates a request for only the address of the uPort identity. Calls given
 uriHandler with the uri. Returns a promise to wait for the response.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Promise.&lt;String, Error&gt;</code> - a promise which resolves with an address or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+attestCredentials"></a>

### connectCore.attestCredentials(credential, [uriHandler]) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Consumes a credential object and generates a signed JWT. Creates a request
 URI with the JWT. Calls given uriHandler with the URI. Returns a promise to wait
 for the response. Throws error if no signer and/or app identifier is set.
 Will not always receive a response, response is only a status.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - a promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>credential</td><td><code>Object</code></td><td></td><td><p>credential object</p>
</td>
    </tr><tr>
    <td>credential.sub</td><td><code>String</code></td><td></td><td><p>subject of this credential</p>
</td>
    </tr><tr>
    <td>credential.claim</td><td><code>Object</code></td><td></td><td><p>statement(s) which this credential claims, contructed as {key: &#39;value&#39;, ...}</p>
</td>
    </tr><tr>
    <td>credential.exp</td><td><code>String</code></td><td></td><td><p>expiry time of this credential</p>
</td>
    </tr><tr>
    <td>[uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
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

### connectCore.request(request) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Create a request and returns a promise which resolves the response. This
 function is primarly is used by more specified functions in this class, which
 allow you to easily create the URIs and messaging server topics you need here.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - promise which resolves with a response object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>request</td><td><code>Object</code></td><td></td><td><p>request object</p>
</td>
    </tr><tr>
    <td>request.uri</td><td><code>String</code></td><td></td><td><p>uPort URI</p>
</td>
    </tr><tr>
    <td>request.topic</td><td><code>String</code></td><td></td><td><p>messaging server topic object</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td><code>String</code></td><td><code>this.uriHandler</code></td><td><p>function to consume URI, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+contract"></a>

### connectCore.contract(abi) ⇒ <code>Object</code>
Builds and returns a contract object which can be used to interact with
 a given contract. Similar to web3.eth.contract but with promises. Once specifying .at(address)
 you can call the contract functions with this object. It will create a request,
 call the uirHandler with the URI, and return a promise which resolves with
 a transtaction ID.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Object</code> - contract object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>abi</td><td><code>Object</code></td><td></td><td><p>contract ABI</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="ConnectCore+sendTransaction"></a>

### connectCore.sendTransaction(txobj) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Given a transaction object, similarly defined as the web3 transaction object,
 it creates a URI which is passes to the uirHandler. It will create request
 and returns a promise which resolves with the transaction id.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td><code>Object</code></td><td></td><td><p>transaction object, can also be wrapped using addAppParameters</p>
</td>
    </tr><tr>
    <td>[request.uriHandler]</td><td><code>function</code></td><td><code>this.uriHandler</code></td><td><p>function to consume uri, can be used to display QR codes or other custom UX</p>
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

### connectCore.addAppParameters(txobj, callbackUrl) ⇒ <code>Promise.&lt;Object, Error&gt;</code>
Adds application specific data to a transaction object. Then uses this data
 when requests are created.

**Kind**: instance method of [<code>ConnectCore</code>](#ConnectCore)  
**Returns**: <code>Promise.&lt;Object, Error&gt;</code> - A promise which resolves with a resonse object or rejects with an error.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>txobj</td><td><code>Object</code></td><td><p>transaction object</p>
</td>
    </tr><tr>
    <td>callbackUrl</td><td><code>String</code></td><td><p>application callback url</p>
</td>
    </tr>  </tbody>
</table>


* * *

