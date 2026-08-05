import pandas as pd

data = {
    "Name":["Aravind","Bethell","Cathreine","David","Elavarasan"],
    "Age":[22,20,21,23,20],
    "city":["CBE","Chennai","Erode","Salem","Namakkal"]
}

# df = pd.DataFrame(data,index=['a','b','c','d','e'])
# print(df)

data_list = [
    {"Name":"Aravind","Age":22,"City":"CBE"},
    {"Name":"Bethell","Age":20,"City":"Chennai"},
    {"Name":"Cathreine","Age":21,"City":"Erode"},
    {"Name":"David","Age":23,"City":"Salem"},
    {"Name":"Elavarasan","Age":20,"City":"Namakkal"},
]

df = pd.DataFrame(data_list)
# print(df.head(2))
# print(df.tail(2))
# print(df.shape)
# print(df.columns)
# print(df.dtypes)

# Accesing Col
# print(df['Name'])
# print(df[['Name','City']])

df['Course'] = ["Python","Java","Js","C","C++"]
# print(df)
# # loc -> label based index
# print(df.loc[2])
# print(df.loc[0:2,'Name'])
# position bases index
# print(df.iloc[0:2,0:2]) #row 0and1 col 0 and1
# scalar access by label
# print(df.at[0,'City'])
# scalar access by index
# print(df.iat[2,2])

# bool indexing
# print(df[df['Age']>20])
print(df[(df['Age']>20) & (df['City']=='Erode')])
# isin
print(df[df["City"].isin(["Erode","Salem"])])

# query
print(df.query("Age>=20 and City=='Erode'"))

print(df[df['Name'].str.startswith("A")])


