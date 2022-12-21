#!/usr/bin/python3
"""Write a class Square that defines a square by size"""


class Square():
    """class rep a square"""

    def __init__(self, size=0):
        """Initialize class square
        Args:
            size (int): size of square
        """
        self.__size = size

    @property
    def size(self):
        return self.__size

    @size.setter
    def size(self, value):
        if (type(value) is not int):
            raise TypeError("size must be an integer")
        elif (value < 0):
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """return area of square"""
        return (self.__size ** 2)
