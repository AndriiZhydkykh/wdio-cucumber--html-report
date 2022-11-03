Feature: The support center page testing

    Background:
         Given A user open main page
         
    Scenario: 10 - Find the article How to Sign Up for a Telnyx account on the support center using search
        When A user close cookies modal window
        Then A user click the support center link of the top  right on the page 
        Then A user type <TextForSearch> in the search filed
        Then A user click How to Sign Up for a Telnyx account article
        Then A user sees the article title <title>


    Examples:
      | TextForSearch                       |title                                |
      | How to Sign Up for a Telnyx account | How to Sign Up for a Telnyx account | 
                                


