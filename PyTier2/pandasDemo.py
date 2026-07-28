# pip install pandas

import pandas as pd
# Series
# s1 = pd.Series([10,20,30,60,77])
# print(s1)
s1 = pd.Series([10,66,79,60,77,77],index=['a','b','c','d','e','f'])
s2 = pd.Series([10,66,79,60,77,77],index=['a','b','c','d','e','f'])
print(s1['a'])
# s1['a'] = "Arun"
# print(s1)
print(s1+10)
print(s1.sort_values(ascending=False))
print(s1.sort_values())
print(s1.sort_index())
print(s1.isnull())
print(s1.fillna(0))
print(s1.tolist())
print(s1.to_numpy())
print(s1.to_csv())
print(s1.head(2))
print(s1.tail(2))
print(s1.unique())

s = pd.Series(['A','B','C','D','A','A','B'])
print(s.value_counts())

# form a dict
data = {"apple":3,"banana":6,"cherry":2,"kiwi":1,"orange":5}
s3 = pd.Series(data)
print(s3)

print(s1+s2)