#! /usr/bin/env python

def is_unique(input_string):
    """Naive implementation"""
    return len(set(input_string)) == len(input_string)
    
def is_uniq(strr):
    """Without using any library functions"""
    def _contains(string, char):
        for c in string:
            if c == char: return True
        return False
    
    for index in range(len(strr)):
        if _contains(strr[:index], strr[index]): return False
    return True    

def main():
    for string in ['abc', 'abcc', 'aabc']:
        print is_uniq(string)
    
if __name__ == '__main__':
    main()
