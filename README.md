# Azure-Function-Blob-Uploader

If you can configure the Azure Logic app to Have a connector to gitHub or Azure Dev Ops that is Best. Since we can have . deploy happen anytime there is a commit to master.

- Will recieve multiPart post -> Create Blob -> Return URL of blob

1. Post to Azure Cloud Funciton EndPoint to process Image and Save into Blob in order for us to Have valid URL to Pass to our Cognitive Service. We use multi part Form POST to get Image to EndPoint.
2. Get Multi Part Decode Base64 Image that was encoded by MultiPart. 
3. Pass URL to Cognitive Service Endpoint
4. Get TAGS formatt and retunr response


# TO-DO:
- Determine how to store the Image. Since we technically can store as Base64 and not worry about storage options inside a DB but is that best for using Images. Since blob exist best option is probably to store as a flat Image file decode to proper Image format.
