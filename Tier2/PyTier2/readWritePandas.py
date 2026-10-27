import pandas as pd
data_list = [
    {"Name":"Aravind","Age":22,"City":"CBE"},
    {"Name":"Bethell","Age":20,"City":"Chennai"},
    {"Name":"Cathreine","Age":21,"City":"Erode"},
    {"Name":"David","Age":23,"City":"Salem"},
    {"Name":"Elavarasan","Age":20,"City":"Namakkal"},
]

df = pd.DataFrame(data_list)

# df.to_csv("output.csv",index=False)
# print("Data Stored in CSV File")

# df.to_excel("output.xlsx",index=False)
# print("Data Stored in excel File")


# df.to_csv("output.csv",index=True,columns=['Name','City'])
# csvData = pd.read_csv('D:\Tier1Basics\PyTier2\output.csv')
# print(csvData)


# Sample dataframe
data = {
    "Product":['Laptop','Mobile','Monitor','Tablet','DressingTable','GasStove'],
    'Category':['Electronics','Electronics','Electronics','Electronics','Household','Kitchen'],
    'price':[45000,18000,35000,48000,8000,3000],
    # 45000+18000+35000+48000 =
    'Quantity':[10,5,8,7,6,12],

    # 10,20,30,40,50
}

sales = pd.DataFrame(data)

# revenue
sales['rev'] = sales['price']*sales['Quantity']
print(sales['rev'])
print(sales.describe())

print(sales.groupby('Category').agg({'price':"mean",'Quantity':"sum",'rev':'sum'}))