# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## My Runtime Analysis

*Runtime Complexity: My code recursively generates every permutation of the input
array, so for an array of length $n$, it could feasibly generate $n!$ permutations,
then for every permutation generated, it needs to check if the array is sorted by
iterating through the elements of the array in with n work. For sufficiently large
$n$, $n!$ is the dominant term, giving a runtime complexity of $\Theta(n!)$.  

* Best Case Input: The best case input is an already sorted array like: [1, 2, 3, 4],
where all that's needed to do is verify the elements are sorted via checkIfSorted.  

* Worst Case Input: The worst case input is an array in reverse sorted order like:
[4, 3, 2, 1], where every permutation will need to be generated before we're able to
produce the properly sorted array, and verify that it's actually sorted.  

* Consequences of Randomly Generated Permutations: If permutations were generated
entirely at random from the pool of values established by the input array things
could be very chaotic. As array size increases, with sufficiently bad luck, we
could experience the heat death of the universe before the properly sorted array
is produced. Of course we could always randomly generate the correct permutation
on the first try every time as well. On average, as the probability of any
individual element being placed in any position is equal, I believe we'd arrive
at the correct permutation after an average $n!$ permutations, but this sounds
like a very bad idea.  

## Sources

Though I didn't end up using anything from this source, I found it while
searching for help, and it's such a crazy cool resource for algorithms and
visualizing how they function. You should check it out. Even with your guidance
in class, I still struggle to visualize how some of these algorithms work, and
it may help others, if you utilize this in class.
https://algorithm-visualizer.org/  

I referenced the following video to help with really ironing down the logic of
permuting through all combinations, which helped me with my recursive
permuting:  
https://www.youtube.com/watch?v=AfxHGNRtFac  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
