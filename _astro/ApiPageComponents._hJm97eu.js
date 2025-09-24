import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as u}from"./index.DtoOFyvK.js";import{u as g}from"./helpers.BZ3msLgw.js";import{c as v}from"./createLucideIcon.BY18stqz.js";import{C as y}from"./circle-check-big.W0d7KnK-.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],f=v("copy",j);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],b=v("terminal",_),k=({lang:i,translations:o})=>{const{t:r,isLoading:m}=o?{t:null,isLoading:!1}:g(i),n=(s,t=s)=>{if(o){const x=s.split(".");let a=o;for(const d of x)if(a&&typeof a=="object"&&d in a)a=a[d];else return console.warn(`Missing translation key: "${s}" in locale "${i}"`),t;return typeof a=="string"?a:t}return r?r(s):t},[p,c]=u.useState(!1),l=`// Initialize SeaChat client
const SeaChat = require('@seachat/sdk');
const client = new SeaChat({
  apiKey: 'your_api_key_here'
});

// Create a new conversation
const conversation = await client.conversations.create({
  customer_id: 'customer_123',
  channel: 'website',
  message: 'Hello, I need help with my order'
});

// Send a response
await client.messages.send({
  conversation_id: conversation.id,
  content: 'I'd be happy to help you with your order!',
  type: 'text'
});

// Listen for new messages
client.on('message.received', (message) => {
  console.log('New message:', message);
});`,h=()=>{navigator.clipboard.writeText(l).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})};return m?e.jsx("div",{className:"animate-pulse bg-gray-200 h-64 rounded-2xl"}):e.jsxs("div",{className:"bg-gray-900 rounded-2xl p-8 overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:n("seachat.features.api.jsExample","JavaScript Example")}),e.jsxs("button",{onClick:h,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors",children:[p?e.jsx(y,{className:"w-4 h-4"}):e.jsx(f,{className:"w-4 h-4"}),e.jsx("span",{children:p?"Copied!":n("seachat.features.api.copy","Copy")})]})]}),e.jsx("pre",{className:"text-green-400 text-sm leading-relaxed",children:e.jsx("code",{children:l})})]})},S=({lang:i,translations:o})=>{const{t:r,isLoading:m}=o?{t:null,isLoading:!1}:g(i),n=(s,t=s)=>{if(o){const x=s.split(".");let a=o;for(const d of x)if(a&&typeof a=="object"&&d in a)a=a[d];else return console.warn(`Missing translation key: "${s}" in locale "${i}"`),t;return typeof a=="string"?a:t}return r?r(s):t},p=[{method:"POST",endpoint:"/api/v1/conversations",description:n("seachat.features.api.endpoints.createConversation","Create a new conversation"),example:`{
  "customer_id": "cust_123",
  "channel": "website",
  "message": "Hello, I need help",
  "metadata": {
    "source": "contact-form",
    "priority": "high"
  }
}`,response:`{
  "id": "conv_789",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "customer": {
    "id": "cust_123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}`},{method:"GET",endpoint:"/api/v1/conversations/{id}",description:n("seachat.features.api.endpoints.getConversation","Retrieve conversation details"),example:`GET /api/v1/conversations/conv_789
Authorization: Bearer your_api_key`,response:`{
  "id": "conv_789",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:45:00Z",
  "customer": {
    "id": "cust_123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "agent": {
    "id": "agent_456",
    "name": "Sarah Smith",
    "type": "human"
  },
  "messages_count": 5,
  "tags": ["support", "urgent"]
}`},{method:"POST",endpoint:"/api/v1/messages",description:n("seachat.features.api.endpoints.sendMessage","Send a message in a conversation"),example:`{
  "conversation_id": "conv_789",
  "content": "How can I help you today?",
  "type": "text",
  "agent_id": "agent_456"
}`,response:`{
  "id": "msg_101",
  "conversation_id": "conv_789",
  "content": "How can I help you today?",
  "type": "text",
  "sent_at": "2024-01-15T10:45:30Z",
  "sender": {
    "id": "agent_456",
    "type": "agent"
  }
}`},{method:"GET",endpoint:"/api/v1/messages",description:n("seachat.features.api.endpoints.listMessages","List messages in a conversation"),example:"GET /api/v1/messages?conversation_id=conv_789&limit=20",response:`{
  "messages": [
    {
      "id": "msg_100",
      "content": "Hello, I need help",
      "type": "text",
      "sent_at": "2024-01-15T10:30:15Z",
      "sender": {
        "id": "cust_123",
        "type": "customer"
      }
    },
    {
      "id": "msg_101",
      "content": "How can I help you today?",
      "type": "text",
      "sent_at": "2024-01-15T10:45:30Z",
      "sender": {
        "id": "agent_456",
        "type": "agent"
      }
    }
  ],
  "pagination": {
    "total": 5,
    "limit": 20,
    "offset": 0
  }
}`},{method:"POST",endpoint:"/api/v1/webhooks",description:n("seachat.features.api.endpoints.createWebhook","Create a webhook endpoint"),example:`{
  "url": "https://yourapp.com/webhooks/seachat",
  "events": [
    "message.received",
    "conversation.created",
    "conversation.resolved"
  ],
  "secret": "your_webhook_secret"
}`,response:`{
  "id": "webhook_123",
  "url": "https://yourapp.com/webhooks/seachat",
  "events": [
    "message.received",
    "conversation.created",
    "conversation.resolved"
  ],
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z"
}`},{method:"GET",endpoint:"/api/v1/agents",description:n("seachat.features.api.endpoints.listAgents","List all agents"),example:"GET /api/v1/agents?status=active&type=human",response:`{
  "agents": [
    {
      "id": "agent_456",
      "name": "Sarah Smith",
      "email": "sarah@company.com",
      "type": "human",
      "status": "online",
      "skills": ["support", "billing"],
      "active_conversations": 3
    },
    {
      "id": "ai_agent_001",
      "name": "AI Assistant",
      "type": "ai",
      "status": "active",
      "capabilities": ["faq", "order_status"],
      "active_conversations": 15
    }
  ]
}`}],[c,l]=u.useState(null),h=(s,t)=>{navigator.clipboard.writeText(s).then(()=>{l(t),setTimeout(()=>l(null),2e3)})};return m?e.jsx("div",{className:"space-y-8",children:[...Array(3)].map((s,t)=>e.jsx("div",{className:"animate-pulse bg-gray-200 h-48 rounded-2xl"},t))}):e.jsx("div",{className:"space-y-8",children:p.map((s,t)=>e.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-900 p-6",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-bold ${s.method==="GET"?"bg-green-500 text-white":"bg-blue-500 text-white"}`,children:s.method}),e.jsx("code",{className:"text-green-400 font-mono text-lg",children:s.endpoint})]}),e.jsx("p",{className:"text-gray-300 mt-2",children:s.description})]}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:n("seachat.features.api.exampleRequestResponse","Example Request/Response")}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Request"}),e.jsx("div",{className:"bg-gray-900 rounded-lg p-4 overflow-x-auto",children:e.jsx("pre",{className:"text-green-400 text-sm",children:e.jsx("code",{children:s.example})})})]}),s.response&&e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Response"}),e.jsx("div",{className:"bg-gray-900 rounded-lg p-4 overflow-x-auto",children:e.jsx("pre",{className:"text-blue-400 text-sm",children:e.jsx("code",{children:s.response})})})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:n("seachat.features.api.tryItOut","Try it out")}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{className:"flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors",children:[e.jsx(b,{className:"w-4 h-4"}),e.jsx("span",{children:n("seachat.features.api.testConsole","Test in Console")})]}),e.jsxs("button",{onClick:()=>h(s.example,t),className:"flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium",children:[c===t?e.jsx(y,{className:"w-4 h-4"}):e.jsx(f,{className:"w-4 h-4"}),e.jsx("span",{children:c===t?"Copied!":n("seachat.features.api.copyCurl","Copy cURL")})]})]})]})]})})]},t))})};export{S as ApiEndpoints,k as CodeExample};
