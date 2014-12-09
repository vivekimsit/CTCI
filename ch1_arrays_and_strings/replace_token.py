import re


def replace_token_regex(s, token=" "):
    return re.sub(token, '20%', s.strip())


def replace_token_inplace(s, token=" "):

    for index, char in enumerate(s):
        if ord(char) == ord(token):
            s[index] = '20%'
    return s


if __name__ == '__main__':
  print replace_spaces_regex("Foo Bar ")
  s = list("Foo Bar ")
  replace_spaces_inplace(s)
  print ''.join(s)
