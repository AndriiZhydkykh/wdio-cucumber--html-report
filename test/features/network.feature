Feature: The network page testing

    Background:
         Given A user open main page
         
    Scenario: ID-7 Open the virtual cross connects page from Network link in Header menu
         When A user close cookies modal window
         Then A user click the Network link in Header menu
         Then A user click the Explore VXCs button on the Network page
         Then A user sees the virtual cross connects page on the url <virtualCrossUrl> 
         Then A user sees virtual-cross-connects title <title>

         Examples:
        | virtualCrossUrl                                    | title                                              |
        | https://telnyx.com/products/virtual-cross-connects | Run your comms and data on a private cloud highway.|

    Scenario: ID-8 See price for Elastic SIP Trunking from Network Page
         When A user close cookies modal window
         Then A user click the Network link in Header menu
         Then A user click the See our Pricing button link on the Network page
         Then A user click the see Pricing link for Elastic SIP Trunking
         Then A user sees the pricing page on the elastic sip url <elasticSipPriceUrl> 
         Then A user sees the SIP Trunk Pricing title <title>

         Examples:
        | elasticSipPriceUrl         | title                    |
        | https://telnyx.com/pricing | Only pay for what you use|

    Scenario: ID-9 Open SMS API from Network Page
         When A user close cookies modal window
         Then A user click the Network link in Header menu
         Then A user click the Explore Messaging link on the Network page
         Then A user sees the SMS API page on the url <smsApiUrl> 
         Then A user sees SMS API page title <title>

         Examples:
        | smsApiUrl                           | title  |
        | https://telnyx.com/products/sms-api | SMS API|
    