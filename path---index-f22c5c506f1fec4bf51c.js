webpackJsonp([0x81b8806e4260],{1998:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/attestcredentials"},excerpt:"Attesting Credentials One of the core needs of Web 3.0 is to build trust in a self-sovereign world. We establish facts which are not…",timeToRead:1,frontmatter:{title:"Attesting Credentials"}}},{node:{fields:{slug:"/gettingstarted"},excerpt:"Getting Started Welcome to the uPort usage guide! Here we will walk you through all the necessary steps to get up and running with your…",timeToRead:3,frontmatter:{title:"Getting Started"}}},{node:{fields:{slug:"/readme"},excerpt:"uPort Specs uPort is a platform for user centric identity and communication. The platform currently consists of our mobile app, Ethereum…",timeToRead:2,frontmatter:{title:"Uport Specs"}}},{node:{fields:{slug:"/requestcredentials"},excerpt:"Requesting Credentials   The first and most basic step you should take is to allow your user to connect their uPort to your app. The…",timeToRead:3,frontmatter:{title:"Requesting Credentials"}}},{node:{fields:{slug:"/clients"},excerpt:"Clients (apps) Allow users, developers, and applications to interact with the uPort platform. uPort Mobile Wallet : Secure mobile self…",timeToRead:1,frontmatter:{title:"Clients (apps)"}}},{node:{fields:{slug:"/signtransactions"},excerpt:"Signing Transactions uPort comes pre-baked with a web3 instance that calls to  Infura , our p2p swarm of nodes we have built so you don't…",timeToRead:3,frontmatter:{title:"Signing Transactions"}}},{node:{fields:{slug:"/overview"},excerpt:"OVERVIEW uPort is an interoperable identity network for a secure, private, decentralized web. uPort provides open protocols for…",timeToRead:1,frontmatter:{title:"Overview"}}},{node:{fields:{slug:"/platform"},excerpt:"PLATFORM The uPort Platform is our implementation of the uPort Protocol designed to make decentralized identities on Ethereum easy to create…",timeToRead:3,frontmatter:{title:"Platform"}}},{node:{fields:{slug:"/protocol"},excerpt:"PROTOCOLS uPort consists of identity and messaging protocols that together form an interoperable identity layer for the decentralized web…",timeToRead:1,frontmatter:{title:"Protocols"}}},{node:{fields:{slug:"/specs"},excerpt:"SPECS   uPort Platform Specifications :  uPort's platform specification repository. Flows   uPort Request Flows : Selective Disclosure Flow…",timeToRead:2,frontmatter:{title:"Specs"}}},{node:{fields:{slug:"/uport-js-docs"},excerpt:"Credentials The Credentials class allows you to easily create the signed payloads used in uPort inlcuding\n   credentials and signed mobile…",timeToRead:5,frontmatter:{title:"Uport JS"}}},{node:{fields:{slug:"/messages/index"},excerpt:"Off-chain Messages Most request and responses are performed privately off-chain between the different parties to a flow. JSON Web Token Most…",timeToRead:3,frontmatter:{title:"Off-chain Messages"}}},{node:{fields:{slug:"/uport-connect-docs"},excerpt:"Classes Connect ⇐  ConnectCore Primary object for frontend interactions with uPort. Bundles all neccesary functionality. Kind : global class…",timeToRead:19,frontmatter:{title:"Uport Connect"}}},{node:{fields:{slug:"/messages/privatechain"},excerpt:"Private Chain Provisioning Message A Private Chain Provisioning Message can be used for adding an account created on a private Ethereum…",timeToRead:2,frontmatter:{title:"Private Chain Provisioning"}}},{node:{fields:{slug:"/messages/shareresp"},excerpt:"Selective Disclosure Response The Selective Disclosure Response is created by a users mobile app as a response to a  Selective Disclosure…",timeToRead:2,frontmatter:{title:"Off-chain Messages"}}},{node:{fields:{slug:"/messages/sharereq"},excerpt:"Selective Disclosure Request The Selective Disclosure Request is created by a client app and sent to a user's mobile app during the…",timeToRead:2,frontmatter:{title:"Selective Disclosure Request"}}},{node:{fields:{slug:"/messages/verification"},excerpt:"Verification A Verification is a statement issued by a third party verifying claims about an identity  Verification Flow . Verifications are…",timeToRead:2,frontmatter:{title:"Veriication"}}},{node:{fields:{slug:"/rest-apis/fuel-server"},excerpt:"Transaction Fueling Server All transactions on Ethereum like networks are paid using transaction fees known as  gas . To avoid the…",timeToRead:1,frontmatter:{title:"Transaction Fueling Server"}}},{node:{fields:{slug:"/rest-apis/relay-server"},excerpt:"Meta Transaction Relaying Server All transactions on Ethereum like networks are paid using transaction fees known as  gas . To avoid the…",timeToRead:2,frontmatter:{title:"Meta Transaction Relaying Server"}}},{node:{fields:{slug:"/pki/identitydocument"},excerpt:"Identity Document The Identity document is stored on IPFS and tied to the address using the uport registry as specified in the  PKI document…",timeToRead:2,frontmatter:{title:"Identity Document"}}},{node:{fields:{slug:"/pki/index"},excerpt:"uPort PKI uPort implements a simple yet general purpose decentralized PKI system, making it easy to create and verify off-chain JWT messages…",timeToRead:6,frontmatter:{title:"Uport PKI"}}},{node:{fields:{slug:"/flows/index"},excerpt:"Uport Request Flows A request will typically be signed by a client app and sent to mobile app using this generic request flow: Specific…",timeToRead:1,frontmatter:{title:"Uport Request Flows"}}},{node:{fields:{slug:"/flows/privatechain"},excerpt:"Private Chain Provisioning Flow Experimental support for supporting Ethereum Accounts on private chains. The following shows the basic flow…",timeToRead:2,frontmatter:{title:"Private Chain Provisioning Flows"}}},{node:{fields:{slug:"/flows/selectivedisclosure"},excerpt:"Selective Disclosure Flow A client application can request various information from the user. The following shows the basic flow: Endpoint…",timeToRead:1,frontmatter:{title:"Selective Disclosure Flow"}}},{node:{fields:{slug:"/flows/tx"},excerpt:"Ethereum Transaction Flow A client application can request that a user signs an Ethereum transaction. The following shows the basic flow: We…",timeToRead:3,frontmatter:{title:"Ethereum Transaction Flow"}}},{node:{fields:{slug:"/flows/verification"},excerpt:"Send Verification Flow A client application can verify information about a user The following shows the basic flow: A more complete example…",timeToRead:1,frontmatter:{title:"Send Verification Flow"}}},{node:{fields:{slug:"/transports/index"},excerpt:"Request/Response Transports Requests Requests always consist of URLs that are handled by the mobile app. There are different built in ways…",timeToRead:7,frontmatter:{title:"Request/Response Transports"}}},{node:{fields:{slug:"/transports/push"},excerpt:"Push Notification Transport Push notifications is a transport for sending requests to users. To make sure that the push notification service…",timeToRead:3,frontmatter:{title:"Push Notification Transport"}}}]},navCategories:{edges:[{node:{fields:{slug:"/attestcredentials"},headings:[{value:"Attesting Credentials",depth:1},{value:"Calling the attest method",depth:2},{value:"Setting an expiration date",depth:2},{value:"Attesting multiple credentials",depth:2}],frontmatter:{category:"guides",index:1}}},{node:{fields:{slug:"/gettingstarted"},headings:[{value:"Getting Started",depth:1},{value:"Download the Mobile App",depth:2},{value:"Register your App",depth:2},{value:"Install the Library/SDK",depth:2},{value:"Add your Keys",depth:2}],frontmatter:{category:"guides",index:0}}},{node:{fields:{slug:"/readme"},headings:[{value:"uPort Specs",depth:1},{value:"Identities",depth:2},{value:"Identities created using the uPort Mobile App",depth:3},{value:"Request Flows",depth:2},{value:"More about request flows",depth:3},{value:"Request and Response Transports",depth:2},{value:"Request/Response Transports",depth:3},{value:"Off-chain Messages",depth:2},{value:"More about Off-chain Messages",depth:3},{value:"On-chain Transactions",depth:2},{value:"More about Signing Ethereum transactions",depth:3},{value:"uPort PKI",depth:2},{value:"More about the uPort PKI",depth:3}],frontmatter:{category:"reference",index:0}}},{node:{fields:{slug:"/requestcredentials"},headings:[{value:"Requesting Credentials",depth:1},{value:"Calling the request method",depth:2},{value:"Requesting specific credentials",depth:2},{value:"Enabling Push Notifications",depth:2},{value:"Custom QR Styling (web)",depth:2},{value:"Logging in via Mobile (sdk)",depth:2}],frontmatter:{category:"guides",index:1}}},{node:{fields:{slug:"/clients"},headings:[{value:"Clients (apps)",depth:1},{value:"uPort Mobile Wallet",depth:2},{value:"uPort App Manager",depth:2},{value:"uPort JS Client",depth:2}],frontmatter:{category:"guides",index:3}}},{node:{fields:{slug:"/signtransactions"},headings:[{value:"Signing Transactions",depth:1},{value:"Supply the contract ABI",depth:2},{value:"Create the contract object",depth:2},{value:"Call a basic method on the contract",depth:2},{value:"Call a tx signing method on the contract",depth:2},{value:"Wait for mining to complete",depth:2}],frontmatter:{category:"guides",index:3}}},{node:{fields:{slug:"/overview"},headings:[{value:"OVERVIEW",depth:1}],frontmatter:{category:"overview",index:0}}},{node:{fields:{slug:"/platform"},headings:[{value:"PLATFORM",depth:1},{value:"Ethereum Identity Components",depth:2},{value:"Network Microservices",depth:2},{value:"Libraries",depth:2}],frontmatter:{category:"overview",index:2}}},{node:{fields:{slug:"/protocol"},headings:[{value:"PROTOCOLS",depth:1},{value:"uPort Identity Protocol",depth:2},{value:"uPort Claims Protocol",depth:2}],frontmatter:{category:"overview",index:3}}},{node:{fields:{slug:"/specs"},headings:[{value:"SPECS",depth:1},{value:"Flows",depth:2},{value:"Messages",depth:2},{value:"PKI",depth:2},{value:"Rest APIs",depth:2},{value:"Transports",depth:2}],frontmatter:{category:"overview",index:3}}},{node:{fields:{slug:"/uport-js-docs"},headings:[{value:"Credentials",depth:2},{value:"new Credentials(",depth:3},{value:"credentials.createRequest(",depth:3},{value:"credentials.receive(token, ",depth:3},{value:"credentials.push(token) ⇒ ",depth:3},{value:"credentials.attest(",depth:3},{value:"credentials.lookup(address) ⇒ ",depth:3}],frontmatter:{category:"reference",index:2}}},{node:{fields:{slug:"/uport-connect-docs"},headings:[{value:"Classes",depth:2},{value:"Connect ⇐ ",depth:2},{value:"new Connect(appName, ",depth:3},{value:"connect.getWeb3() ⇒ ",depth:3},{value:"connect.getProvider() ⇒ ",depth:3},{value:"connect.requestCredentials(",depth:3},{value:"connect.requestAddress(",depth:3},{value:"connect.attestCredentials(credential, ",depth:3},{value:"connect.request(request) ⇒ ",depth:3},{value:"connect.contract(abi) ⇒ ",depth:3},{value:"connect.sendTransaction(txobj) ⇒ ",depth:3},{value:"connect.addAppParameters(txobj, callbackUrl) ⇒ ",depth:3},{value:"ConnectCore",depth:2},{value:"new ConnectCore(appName, ",depth:3},{value:"connectCore.getProvider() ⇒ ",depth:3},{value:"connectCore.requestCredentials(",depth:3},{value:"connectCore.requestAddress(",depth:3},{value:"connectCore.attestCredentials(credential, ",depth:3},{value:"connectCore.request(request) ⇒ ",depth:3},{value:"connectCore.contract(abi) ⇒ ",depth:3},{value:"connectCore.sendTransaction(txobj) ⇒ ",depth:3},{value:"connectCore.addAppParameters(txobj, callbackUrl) ⇒ ",depth:3}],frontmatter:{category:"reference",index:1}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-f22c5c506f1fec4bf51c.js.map