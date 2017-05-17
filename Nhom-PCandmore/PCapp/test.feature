Feature: There are 4 topics
    In order to join a topic
    Customers are going to answer the questions
    They can do it again

    Scenario: Topic named "Cơ bản"
        Given there are 6 questions
        And I have to enter the answers
        When I'm on "/chu-de/1"
        When I fill "Gõ tiếng việt" with "vi 1"
        When I press "Tiếp tục"
        Then I got 1 point and go to the next question
        But I press "Bỏ qua"
        Then I got 0 point and go to the next question

    Scenario: Topic named "Con người"
        Given there are 6 questions
        And I have to enter the answers
        When I'm on "/chu-de/2"
        When I fill "Gõ tiếng việt" with "vi 2"
        When I press "Tiếp tục"
        Then I got 1 point and go to the next question
        But I press "Bỏ qua"
        Then I got 0 point and go to the next question

    Scenario: Topic named "Động vật"
        Given there are 6 questions
        And I have to enter the answers
        When I'm on "/chu-de/3"
        When I fill "Gõ tiếng việt" with "vi 3"
        When I press "Tiếp tục"
        Then I got 1 point and go to the next question
        But I press "Bỏ qua"
        Then I got 0 point and go to the next question

    Scenario: Topic named "abc"
        Given there are 6 questions
        And I have to enter the answers
        When I'm on "/chu-de/4"
        When I fill "Gõ tiếng việt" with "vi 4"
        When I press "Tiếp tục"
        Then I got 1 point and go to the next question
        But I press "Bỏ qua"
        Then I got 0 point and go to the next question
