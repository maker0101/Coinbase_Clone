# Questions

## Unable to consistently fetch coin price histories and create balance history object?

I've worked on dynamicall calculating the data for the Portfolio Balance Chart in `useBalanceHistory` hook.
However, I encountered multiple problems:

1. Sometimes everything works and I get the desired `balanceHistory` array - but most of the time, I get undefined not. Can't manage to figure out whats causing the inconsistency.

Multiple other problems/questions in the `useBalanceHistory` file as comments.

## Can I avoid "reinitializing" state?

Situation:

- When I initialize a state where I fetch the data from an external source, the state is initialized empty
- Then I need to listen with useEffect on state changes and setState with the fetched data.
- This adds a little bit of extra code.

Question:

- Is there a simple way to avoid this extra "reinitialization" step?
- E.g. Telling a state to wait for initialization until data is fetched?

Examples:
./hooks/useSelectAsset.js#L43
./hooks/useSearch.js#L20

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

## Guidance/Best practices for deciding which object structure to use

Situation:

- I needed to decide for the structure of a transaction object.
- This transaction object has general information (type, timestamp, ...) and information on the assets transacted (fiat, coin, coinConvertTo)
- First, I decided for a 'plain' object structure (without nesting)
- However later on I changed my mind and used nesting (and refactoring the structure was a bit painfull)

Question:

- Can you point me to some guiding priciples/best practices/ressources to decide for which object structure to use when? When to use nesting and when not?
