# # pip install numpy
# import numpy

# # arr1 = numpy.array([10,20,30,50,70])
# # print(arr1)

# # arr2 = numpy.array([[10,20,30,50,70],[88,77,66,98,75]])
# # print(arr2)

# # arr3 = numpy.array([[10,20,30,50,70],[88,77,66,98,75],[57,83,67,34,89]])
# # print(arr3)

# # # zeros
# # e = numpy.zeros((3,4))
# # print(e)
# # # ones
# # one = numpy.ones((3,2))
# # print(one)
# # # eye
# # # identidy matrix diagonal->1 others -0
# # ey = numpy.eye(3)
# # print(ey)
# # # arange
# # rangeArr = numpy.arange(0,12,2)
# # print(rangeArr)
# # # linspace
# # lins = numpy.linspace(0,1,5)
# # # 0,0.25,0.5,0.75,1
# # print(lins)

# # rand array
# # randArr = numpy.random.rand(2,2)
# # print(randArr)

# arr = numpy.array([10,28,12,24,29,35])
# print(arr[0:4])
# print(arr[0])


# arr2d = numpy.array([[10,28,12,24,29,35],[11,22,17,25,39,85]])
# print(arr2d[0,2])
# print(arr2d[1,2])
# print(arr2d[0][1])
# # full col
# print(arr2d[:,1])
# # submatrix
# print(arr2d[0:2,1:3])
# # condition filter
# print(arr2d[arr2d>20])

# # lis = [1,2,3]
# # lis1 = [3,4,5]

# # res  = lis+lis1
# # print(res)

# a = numpy.array([1,2,3])
# b = numpy.array([4,5,6])
# # element wise operation
# print(a+b)
# print(a*b)
# print(a+10)

# res = numpy.concatenate((a,b))
# print(res)

# # matrix multiplication
# print(numpy.dot(a,b))
import numpy
arr2d = numpy.array([[10,28,12,24,29,35],[11,22,17,25,39,85]])
# transpose
a = numpy.array([1,2,3])
b = numpy.array([4,5,6])
print(arr2d.T)

print(numpy.sum(a))
print(numpy.mean(a))
print(numpy.max(a))
print(numpy.min(a))
print(numpy.std(a))


arr3 = numpy.array([[10,20,30,50,70],[88,77,66,98,75],[57,83,67,34,89]])
flat = arr3.flatten()
print(flat)
resdhapes = flat.reshape(3,5)
print(resdhapes)


a = numpy.array([1,2,3])
b = numpy.array([2,3,6])
res = numpy.dot(a,b)
print(res)

# 1*2+2*3+3*6 = 2+6+18=26
# 26


