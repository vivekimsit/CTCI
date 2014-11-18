#! /usr/bin/env python

import unittest


def is_unique_naive(input_string):
    """Naive implementation"""
    return len(set(input_string)) == len(input_string)


def is_unique(strr):
    """Without using any library functions"""
    def _contains(string, char):
        for c in string:
            if c == char: return True
        return False

    for index in range(len(strr)):
        if _contains(strr[:index], strr[index]): return False
    return True


def main():
    for string in ['rofl', 'abcc', 'aabc']:
        print is_uniq(string)

class UniqueCharsTest(unittest.TestCase):

    def test_unique_chars(self):
        self.assertTrue(is_unique('rofl'))

    def test_non_unique_chars(self):
        self.assertFalse(is_unique('lol'))

if __name__ == '__main__':
    unittest.main()
