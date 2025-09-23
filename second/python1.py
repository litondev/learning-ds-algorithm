def print_numbers_version_one():
    number = 2
    while number <= 100:
        # If number is even, print it:
        if number % 2 == 0:
            print(number)
            number += 1

def print_numbers_version_two():
    number = 2
    while number <= 100:
        print(number)
        # Increase number by 2, which, by definition,
        # is the next
        number += 2

x = "Hello! "
y = "How are you "
z = "today?"
print x + y + z

array = ["Hello! ", "How are you ", "today?"]
print array[0] + array[1] + array[2]

array = ["apples", "bananas", "cucumbers", "dates", "elderberries"]
