#import pandas as pd
import re
'''
file = open("C:\\Users\\HP\\Downloads\\apache_logs.txt","r")

lines = file.readlines()

for line in lines:
    print(re.match(regex, line).groups())
'''
regex = '([(\d\.)]+) - - \[(.*?)\] "(.*?)" (\d+) - "(.*?)" "(.*?)"'

line = '172.16.0.3 - - [25/Sep/2002:14:04:19 +0200] "GET / HTTP/1.1" 401 -  "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.1) Gecko/20020827"'

print(re.match(regex, line).groups())