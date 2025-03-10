-- Create CUSTOMER table
CREATE TABLE CUSTOMER (
    CustomerID NUMBER(10) PRIMARY KEY,
    Name VARCHAR2(50) NOT NULL,
    Email VARCHAR2(100) UNIQUE,
    Phone VARCHAR2(15),
    Address VARCHAR2(255)
);

-- Create PRODUCT table
CREATE TABLE PRODUCT (
    ProductID NUMBER(10) PRIMARY KEY,
    ProductName VARCHAR2(100) NOT NULL,
    Price NUMBER(10, 2) NOT NULL CHECK (Price > 0),
    Quantity NUMBER(10) NOT NULL CHECK (Quantity >= 0)
);

-- Create ORDERS table
CREATE TABLE ORDERS (
    OrderID NUMBER(10) PRIMARY KEY,
    CustomerID NUMBER(10),
    ProductID NUMBER(10),
    Quantity NUMBER(10) NOT NULL CHECK (Quantity > 0),
    OrderDate DATE DEFAULT SYSDATE,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID)
);

-- Add Category column to PRODUCT table
ALTER TABLE PRODUCT
ADD Category VARCHAR2(20);

-- Add OrderDate column to ORDERS table with SYSDATE as default
ALTER TABLE ORDERS
ADD OrderDate DATE DEFAULT SYSDATE;
