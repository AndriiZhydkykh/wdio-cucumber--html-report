Feature: The main page testing

    Background:
         Given A user open main page
         
    Scenario: ID-1 Open Voice Api from main page
         When  A user close cookies modal window
         Then A user click the Voice API link
         Then A user sees the Voice API page on the url <voiceUrl> 
         Then A user sees the Voice API title <title>

         Examples:
        | voiceUrl                             |  title   |
        | https://telnyx.com/products/voice-api| Voice API|


