import re


def is_palindrome(str):
    replaced_lower_str = re.sub('[\W_]', "", str.lower())

    return replaced_lower_str == replaced_lower_str[::-1]
