# Automation trigger for Qlik Sense
Automation trigger for Qlik Sense is a extension which allows you to trigger Automations directly from Qlik Sense.
* Dialog
![blend27](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend27.PNG)
* Within extension
![blend28](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend28.PNG)
* Simple button
![blend29](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend29.PNG)
# Installation steps:
1. Download the latest release from the following link: https://github.com/rileymd88/qlik-blends/files/6378232/qlik-blends.zip 
2. Import into Qlik Sense using the management console
3. If using Qlik Sense SaaS, you will need to add a content security policy with the following details:
- Name: Blendr API
- Orgin: api.blendr.io
- Directive: connect-src
* ![blend30](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend30.PNG)

# Using the extension
### Dimensions & measures
* Any data added as dimensions and measures will be sent to the Blend within the body of the webhook

### Form
* You can click on add items to add a form item to the extension. You will then be prompted to choose the type and set some appearance settings. Each item will save data which will also be sent to the Blend within the body of the webhook. The `Reference` field will be used as a JSON key in the data which gets sent to the body of the webhook so either remember the generated id or change it to something you can remember. 
**Ensure that the reference string does NOT contain any spaces or strange characters** 

### Blend
* Here you can enter the details of which Blend should be triggered. You can find this correct URL and execution token by going to your Blend editor, clicking on start and under Inputs change the Run Mode to Triggered.
**Ensure that you use the POST URL and NOT the GET URL**

### Example usage with a Blend 
1. Create an empty Blend by clicking on Add new Blend and then Start from blank
![blend1](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend1.PNG)
![blend2](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend2.PNG)  
2. Change the run mode to triggered and then hit save
![blend3](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend3.PNG)
3. You should now see the Webhook URLs. Copy the POST URL and Execution Token
![blend4](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend4.PNG)
4. Now navigate to your Qlik Sense app and find the Qlik blends extension and add it to your sheet 
![blend5](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend5.PNG)
5. Go to the extension properties and add the POST URL and execution token from step 3 into the Blend properties
![blend6](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend6.PNG)
6. Now add the required dimensions/measures/form items that you want to send to your Blend. For this example I picked 1 dimension (Category) and 2 form items (comment and confidence)
![blend7](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend7.PNG)
![blend8](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend8.PNG)
![blend9](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend9.PNG)
7. Now the extension is set up and when we click on Run blend, our blend will be run. You can enter a comment, change the slider and click Run blend now.
8. If everything worked correctly you should get a blank green message below. If the green message contains something like 404 or 405, then most likely you did not correctly copy the POST URL and execution token in step 3
![blend10](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend10.PNG)
9. Now we can continue working on the Blend to do something once we receive the trigger and data from Qlik Sense
10. Navigate back to the Blendr editor
11. Search for the block Variable and link it to the Start block
![blend12](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend12.PNG)
12. Click on the Variable block and then click on Manage variables 
![blend13](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend13.PNG)
13. Give your variable the name data and then click on + Add new variable and then Save
![blend14](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend14.PNG)
![blend15](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend15.PNG)
14. Now select data from the Variable * dropdown within the Inputs section and then click + Add operation and select Set value of data. 
![blend16](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend16.PNG)
15. Now click on the empty Value input list and select Add formula
![blend17](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend17.PNG)
16. Search for the function called Object and then click on Object
![blend18](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend18.PNG)
17. Now click on the json * input list and select output from Start
![blend19](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend19.PNG)
18. Now click on raw_body and then click Save
![blend20](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend20.PNG)
![blend21](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend21.PNG)
19. Now the data from Qlik Sense has been converted into a JSON object and can be used in your Blend
20. You can save the Blend and trigger it again from Qlik Sense to ensure that the new data variable has values to make it easier to build your Blend. For this use case I will force the selection of only 1 Category in my app so only 1 Category will be sent to Blendr along with the form data. This can be done under the Blend settings of the extension by enabling the Condition to enable blend
![blend22](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend22.PNG)
21. Now you can navigate back to your Blend and use the data variable to use together with any of the 600+ connectors that Blendr offers
22. For this example we can simply set up an Output block back to the extension which will be showed once the Blend has finished. You can do this for all your Blends to give users feedback about their Blend.
![blend23](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend23.PNG)
![blend24](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend24.PNG)
![blend25](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend25.PNG)
23. Now when you run the Blend from Qlik Sense you should see a short message which details some of the data sent to the Blend
![blend25](https://raw.githubusercontent.com/rileymd88/data/master/qlik-blends/blend26.PNG)

# Developing the extension
1. Clone the repository
2. Run `npm i`
3. Run `npm run build`
4. Run `npm run sense`
5. Then zip the contents in the folder qlik-blends-ext and then upload as an extension

