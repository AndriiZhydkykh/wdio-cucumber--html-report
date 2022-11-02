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


         
    