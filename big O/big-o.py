def get_first(arr):
    return arr[0]   # selalu 1 langkah

# O(1) Paling cpt
# n=10 → 1 langkah
# n=1.000.000 → tetap 1 langkah

def binary_search(arr, target):
    left, right = 0, len(arr)-1
    while left <= right:
        mid = (left + right)//2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
# O(log n)
# n=1.000 → kira-kira 10 langkah
# n=1.000.000 → kira-kira 20 langkah


def find_max(arr):
    max_val = arr[0]
    for num in arr:   # cek semua elemen
        if num > max_val:
            max_val = num
    return max_val
# O(n)
# n=10 → 10 langkah
# n=1.000.000 → 1 juta langkah

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # tambahkan sisa elemen
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Contoh penggunaan
arr = [5, 2, 9, 1, 5, 6]
sorted_arr = merge_sort(arr)
print(sorted_arr)
# O(n log n)
# n=1.000 → sekitar 10.000 operasi
# n=1.000.000 → sekitar 20 juta operasi

def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
# O(n2)
# n=10 → 100 langkah
# n=1.000 → 1 juta langkah

# O(2n)
# n=10 → 1024 langkah
# n=20 → 1.048.576 langkah (meledak!)

# O(n!)
# n=5 → 120
# n=10 → 3.6 juta