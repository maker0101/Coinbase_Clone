# Questions

## Do I need to change my 'yourCoin' ids to support multiple users? How to structure data?

Situation:

- In Firestore, the documents in the 'yourCoins' collection get their id's from the Coinranking API
- e.g. When I fetch Bitcoin prices from Coinranking, I get a Bitcoin Id (e.g. 123) and I take that Id and use it in Firebase to store the Bitcoin object (including the coin balance the user currently holds)
- This worked well (and made my code simple) until I tried adding multi-user support
- Now e.g. 2 users can hold Bitcoin and thus I would need 2 Bitcoin objects with unique ids
- While it would be possible to do that, my code would become more complicated, e.g. when I try to exchange information between Coinranking and Firestore

Questions:

- Do I need to refactor my Firestore Ids / Id generation process or is there another way?
- Would you just change the ids to make them unique or change the data structure as awhole?
- Would you recommend to calculate everything from a single source of truth (e.g. transactions collection), even if it makes some of the code more complicated? (e.g. I would need to recalculate the current Bitcoin coin balance each time from transactions instead getting it directly from 'yourCoins' collection)

## Memory leak error (again)

Situation:

- When I navigate from the /assets page to the /trade page and then e.g. Buy coins there (in the right side Tab), I'm consistently getting multiple memory errors:

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.``

- The errors point to elements from the /assets page as source (e.g. `at ChartPortfolio`, `at Assets`)

Question:

- Could you please help me understand and fix this issue? I know you already helped me fix it once in the Todoist clone with some sort of cleanup/unsubscription. But I'm unable to do it on my own now.
- It seems to be so common that I would like to learn how to fix it myself in the future.

## 'Violation' terminal warnings on /trade page

Situation:

- when loading the /trade page I get 2 terminal warnings:
  [Violation] Forced reflow while executing JavaScript took 63ms.
  [Violation] 'setTimeout' handler took 50ms.

- In addition, when clicking the Star icon, I also get the foloowing warning:
  [Violation] 'setTimeout' handler took 50ms.

Question:

- First question: Should I worry about it at the moment and work on a fix? (I've mostly avoided studying about React/Javascript performance as I had the feeling I wanted to learn the basics first)
- Is it easy for you to pinpoint the reason what's causing it? If yes, what is it? Does it have todo with data fetching taking time?

## Terminal warning "React Hook useEffect has a missing dependency: functions

Situation:

- while developing I sometimes got the terminal waring `React Hook useEffect has a missing dependency` and then the name of a function I'm using in my useEffect hook
- the warnings seems to have gone away (not sure why) but were so common for a while that I would like to understand how to handle them in the future
- I get the abstract idea of useEffect wanting all parameters that can change in it's dependecy array?
- What I don't get is why it sometimes wants functions in the dependency array (not the function arguments).
- And if I tried to add the function as a dependency, I got another error that it was an invalid dependency or something?

e.g.
./hooks/useGetCoins.js#L59
./hooks/useMediaQuery.js#L20

Question:

- Do you know this type of warning and how do you handle it?

## Should I use optional chaining (?.) by default?

Situation:

- While implementing data fetching and the business logic I've run multiple times into hard errors because I tried to access an object property that whas not yet fully fetched
- To fix the issues I've again and again used optional chaining (?.), so much so that I'm asking myself now if I should opt for it by default now when accessing any object property in the future
- It would add more code, but I would be at least on the safe side then

Question:

- What do you think? How are you dealing with it?
