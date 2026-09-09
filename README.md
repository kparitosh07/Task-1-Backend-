🎟️ Event Ticketing Platform API
================================

A RESTful API for an **Event Ticketing Platform** built using **Node.js** and **Express.js**.

🛠️ Tech Stack
--------------

*   Node.js
    
*   Express.js
    
*   JavaScript
    
*   Postman
    

⚙️ Setup
--------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install  node server.js   `

Server runs at:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   http://localhost:3000   `

📌 API Endpoints
----------------

### 1\. Check API

**GET** /

**Status:** 200 OK

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "title": "Event Ticket platform",    "message": "Use postman to test the API"  }   `

### 2\. Create Event

**POST** /events

**Status:** 201 Created

**Body:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "title": "Tech Fest 2026",    "venue": "College Auditorium",    "date": "2026-10-15",    "noOfTickets": 500,    "price": 299  }   `

**Response:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "id": 1,    "title": "Tech Fest 2026",    "venue": "College Auditorium",    "date": "2026-10-15",    "noOfTickets": 500,    "price": 299  }   `

### 3\. Get All Events

**GET** /events

**Status:** 200 OK

Returns all currently created events.

📊 Progress
-----------

MethodEndpointStatusGET/✅ DonePOST/events✅ DoneGET/events✅ DoneGET/events/:id⏳ PendingPUT/events/:id⏳ PendingDELETE/events/:id⏳ Pending