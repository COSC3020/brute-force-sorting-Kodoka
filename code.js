var permutationsTried = 0;
var isSorted = false;

function permutationSort(a)
{
    permutationsTried = 0;
    isSorted = false;

    // Start the permutation process, which will continue recursively, 'til a solution is found.
    permute(a, 0);

    return permutationsTried;
}

// Checks if the array is sorted.
function checkIfSorted(a)
{
    // For each element...
    for (var i = 1; i < a.length; i++)
    {
        // If the preceeding element is larger, the array isn't sorted.
        if(a[i - 1] > a[i])
        {
            return false;
        }
    }
    // If every element is preceeded by a smaller element, the array is sorted.
    return true;
}

// Swap elements i and j in array a.
function swap(a, i, j)
{
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

// Permutes through elements of a recursively from a starting index, start.
function permute(a, start)
{
    // If sorted is found, stop.
    if(isSorted)
    {
        return;
    }

    // If start eqals array length, every position in the permutation has an element,
    // and out permutation is complete. Then we incriment permutations tried, and
    // check if the array is sorted.
    if(start == a.length)
    {
        permutationsTried++;
        if(checkIfSorted(a))
        {
            isSorted = true;
        }
        return;
    }

    // For each index from start to a.length - 1, swap and permute recursively.
    for(var i = start; i < a.length; i++)
    {
        swap(a, start, i); // Swap so a new element is at start.
        permute(a, start + 1); // Permute the next element recursively.
        if(isSorted)
        {
            return; // Stop if sorted is found.
        }
        swap(a, start, i); // Undo the swap.
    }
}

var testArray = [7, 3, 2, 4, 1];
var tried = permutationSort(testArray)
console.log("Sorted array:", testArray);
console.log("Permutations tried: ", tried);
