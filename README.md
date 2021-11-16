# Automation trigger for Qlik Sense
Automation trigger for Qlik Sense is a extension which allows you to trigger automations directly from Qlik Sense. There are three basic options on how you can trigger an automation:
* Dialog with form items

![a1](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a1.PNG)
* Within extension with form items

![a2](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a2.PNG)
* Simple button

![a3](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a3.PNG)
# Installation steps:
1. Download the latest release from the following link: https://github.com/rileymd88/automation-trigger/releases/download/V1.1.0/automation-trigger-ext.zip
2. Import into Qlik Sense using the management console

# Release Notes
* 1.1.0
  * Added Date picker form item
  * Added Rating form item
  * Renamed everything to reference automations instead of blends
  * Added ability to select automations from a list
  * Added direct link to automation from the extension
  * Added ability to copy an input block from the extension which can be pasted into an automation for faster startup
  * Added ability to create bookmark when the automation is triggered and have this bookmark ID sent to the automation
  * Added ability to redirect users to another website after the automation has finished
  * Added font color theme property
* 1.0.1
  * Bug fix for the Dropdown multiple select form item
* 1.0.0
  * First release

# Properties
### Dimensions & measures
* Any data added as dimensions and measures will be sent to the automation within the body of the webhook 

### Form
* You can click on add items to add a form item to the extension. You will then be prompted to choose the type and set some appearance settings. Each item will save data which will also be sent to the automation within the body of the webhook. The `Reference` field will be used as a JSON key in the data which gets sent to the body of the webhook so either remember the generated id or change it to something you can remember. 
**Ensure that the reference string does NOT contain any spaces or strange characters** 

* The following form item types available
  * Checkbox
  * Date picker
  * Dropdown
  * Dropdown multiple select
  * Number
  * Rating
  * Slider
  * Switch
  * Text

### Automation
* **Select an automation:** Here you can select an automation - At this time it is only possible to select an Automation that you have created
* **Automation link:** This is a hyperlink which brings you directly to the automation editor for the selected automation
* **Copy input block:** By clicking on this button, you will copy into your clipboard an input block for your automation which parses the data sent from this extension to the automation. From within your automation simply right click and select Paste Block(s)
* **Include selections:** If this option is enabled, a bookmark will be created when the automation is run and the bookmark id will be sent to the automation. You can use the bookmark id together with the apply bookmark
* **Condition to enable automation:** Here you can use a Qlik Sense formula to determine when it should be possible to run the automation. If the formula returns 1, the automation can be run. If the formula returns 0, the automation cannot be run

### Appearance 
* **Run automation button:** Here you can define the look and feel of the run automation button
* **Dialog:** Here you can choose if you want to have a dialog to enter form information. The look and feel of the dialog can also be defined here
* **Notification:** Here you can choose if you want to have a notification pop up when the automation has finished running. You can define the message by using the Output block in your automation. If you would like to redirect your end user after the automation has run, then you can do this be returning a JSON response in the following format within the Output block:
```
{
  "message": "Hello world",
  "redirect": "https://google.de",
  "newTab": true,
  "timeout
}
```
**When using the redirect option ensure that the Display Mode for the Output block is set to Use only this output (overwrite previous outputs) and that popups are not being blocked**

![p1](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/p1.PNG)

**attribute**|**description**|**type**
:-----:|:-----:|:-----:
message|The message which will be shown in the notification|string
redirect|The URL which the user will be redirected to after the automation has run|string
newTab|Determines if the URL will open in a new tab or not|boolean
timeout|The amount of time in ms before redirecting the user |integer
 
 You can also choose to have the notification message be based on a Qlik Sense formula 
* **Theme:** Here you can define the color scheme for the extension

# Getting started with the extension
1. Create an empty automation by clicking on + Add new and then New automation from the Qlik Sense hub 

![a4](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a4.PNG)

2. Enter a name for your automation and click Save

![a5](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a5.PNG)

3. Select the Start block and then set the Run Mode to Triggered

![a6](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a6.PNG)

4. Now navigate to your Qlik Sense app and find the Automation trigger extension and add it to your sheet 
5. Go to the extension properties and go to the Automation section and select your automation
6. Click on the Copy input block and then click on the Automation link to open the automation

![a7](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a7.PNG)

7. On the canvas of the automation, right click and select Paste Block(s). You should now see a new block called Inputs on your canvas. This block will parse the data sent from the extension to make it easy to use in your automation

![a8](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a8.PNG)

8. Drag the new Input block below the Start block so that are connected

![a9](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a9.PNG)

9. Now you can use the data from the extension in your automation as it will available in the Input block
10. For this basic example, I have set up several form items and have the dimensions User and Time

![a10](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a10.PNG)

![a11](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a11.PNG)

9. Once I click on the automation, I can then view what the received data looks like by going to the Overview of the automation and selecting the Last Run tab and the Per Block option

![a15](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a15.PNG)

```
{
  "form": {
    "comment": "Here is a test comment",
    "endDate": "2021-11-16T07:00:00.000Z",
    "rating": "4",
    "probability": 8
  },
  "data": {
    "hypercube": [
      {
        "qMatrix": [
          [
            {
              "qText": "UserDirectory=; UserId=auth0|a08D000001KnbpKIAR",
              "qNum": "NaN",
              "qElemNumber": 0,
              "qState": "O"
            },
            {
              "qText": "16.11.2021 11:33:02",
              "qNum": 44516.48127314815,
              "qElemNumber": 0,
              "qState": "O"
            }
          ]
        ],
        "qTails": [
          {
            "qUp": 0,
            "qDown": 0
          },
          {
            "qUp": 0,
            "qDown": 0
          }
        ],
        "qArea": {
          "qLeft": 0,
          "qTop": 0,
          "qWidth": 2,
          "qHeight": 1
        }
      }
    ]
  },
  "bookmarkid": "",
  "app": "d62893fa-2c18-49cc-8013-31dc47508ea9",
  "sheetid": "ec5e7e0b-6a65-4f73-8271-fb1c5c5e28c0"
}
```
10. If we want to ensure we receive a message when the automation has run, we can add an Output block to our automation. If you also want to redirect users after the automation has run, please refer to the documentation above in the Appearance area

![a12](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a12.PNG)

![a13](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a13.PNG)

11. After adding the Output block to our automation and clicking save, we should see the following notification in the Qlik Sense app after triggering the automation

![a14](https://raw.githubusercontent.com/rileymd88/data/master/automation-trigger/a14.PNG)

# Current limitations
* The extension will only show the first 100 automations for each user
* The extension can only send a maximum of 20 columns and 500 rows of data to an automation
* If this extension triggers a reload within the same app where it exists, notification messages will be blank. To workaround this you can send the input block before a reload is started

# Developing the extension
1. Clone the repository
2. In the package.json file replace `nebula sense --ext src/extDefinition.js --meta ./meta.json && cd ../ && python build.py extension` with `nebula sense --ext src/extDefinition.js --meta ./meta.json` 
2. Run `npm i`
3. Run `npm run build`
4. Run `npm run sense`
5. Then zip the contents in the folder automation-trigger-ext and then upload as an extension

