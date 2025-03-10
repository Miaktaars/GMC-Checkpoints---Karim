CREATE TABLE CUSTOMER (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Address VARCHAR(100),
    Phone VARCHAR(15)
);

CREATE TABLE PRODUCT (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE ORDERS (
    OrderID INT PRIMARY KEY,
    OrderDate DATE NOT NULL,
    CustomerID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID)
);


-- Insert data into CUSTOMER table
INSERT INTO CUSTOMER (CustomerID, Name, Address, Phone) VALUES
(1, 'John Smith', '123 Elm Street', '555-1234'),
(2, 'Jane Doe', '456 Maple Avenue', '555-5678'),
(3, 'Alice Brown', '789 Oak Lane', '555-9012'),
(4, 'Bob Johnson', '101 Pine Road', '555-3456');

-- Insert data into PRODUCT table
INSERT INTO PRODUCT (ProductID, ProductName, Price) VALUES
(1, 'Laptop', 999.99),
(2, 'Smartphone', 599.99),
(3, 'Tablet', 399.99),
(4, 'Headphones', 199.99);

-- Insert data into ORDERS table
INSERT INTO ORDERS (OrderID, OrderDate, CustomerID, ProductID, Quantity) VALUES
(1, '2024-01-15', 1, 1, 2), -- John Smith ordered 2 Laptops
(2, '2024-01-16', 2, 2, 1), -- Jane Doe ordered 1 Smartphone
(3, '2024-01-17', 3, 3, 3), -- Alice Brown ordered 3 Tablets
(4, '2024-01-18', 4, 4, 2); -- Bob Johnson ordered 2 Headphones

