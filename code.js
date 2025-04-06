function permutationSort(a)
{
    var permutationsTried = 0;
    var isSorted = false;

    return 0;
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