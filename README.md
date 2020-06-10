# npm-pool-provider
An npm server for debugging Azure DevOps Pool Providers


Run ```Node server.js``` to start the server listening on localhost:8082


Configure a Pool Provider in Azure DevOps Pointing to the following endpoints:

Acquire Agent: http://localhost:8082/acquire

Release Agent: http://localhost:8082/release

Get Definitions: http://localhost:8082/definitions

Request Status: http://localhost:8082/status



The node server will print out the contents of the Pool Provider requests. The contents of Acquire Agent can be used to configure a local agent to connect back and run jobs.
