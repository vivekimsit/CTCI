#! /usr/bin/env python

import unittest


def is_permutation_naive(source, target):
    """O(nlogn)"""
    return sorted(source) == sorted(target)


def is_permutation(source, target):
    """Using character counting, O(n)"""
    character_count = [0 for _ in range(256)]  # ASCII chars

    for char in source:
        character_count[ord(char)] += 1

    for char in target:
        character_count[ord(char)] -= 1
        if character_count[ord(char)] < 0:
            return False
    return True


class PermutationTest(unittest.TestCase):

    def test_permuted_string(self):
        self.assertTrue(is_permutation('rofl', 'lofr'))
        self.assertTrue(is_permutation('ro fl', 'l ofr'))
        self.assertFalse(is_permutation('rofl', 'foo'))

    def test_empty_string(self):
        self.assertTrue(is_permutation('', ''))


if __name__ == '__main__':
    unittest.main()
