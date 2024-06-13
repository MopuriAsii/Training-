```sql


create database new
use new

-- string Functions:
-- 1. len
-- 2. left
-- 3. Right
-- 4. subString
-- 5. Upper
-- 6. Lower
select len('ashi') as NameLength;

select Left('ashi',2);

select right('ashi',2);

select SUBSTRING('ashritha',2,5);

select UPPER('ashi');


select lower('ASHI');

-- 7. Ltrim
-- 8. Rtrim
-- 9. CharIndex
-- 10. Replace
-- 11. concat
-- 12.Replace
-- 13.replicate

select Ltrim('           ashritha mopuri');

select Rtrim('ashritha mopuri          ');

select Rtrim('ashritha   ','tha  ');

select Rtrim('ashritha','tha');

select CHARINDEX('i','ashritha');

select REPLACE('ashritha','a','b');

select CONCAT('ashritha','mopuri');

select REPLICATE('ashi',5);

select REVERSE('ashi');


select ABS(-343);

select POWER(2,3);

select ROUND(38.525,2);

select CEILING(38.325);

select FLOOR(38.325);

select DATEPART(month , GETDATE());
select DATEPART(DAY, GETDATE());

select GETDATE()

select DATEADD(day , 10 ,GETDATE());

select DATEDIFF(day,'2024-01-01','2024-06-13');

select DATEDIFF(day,'2024-01-01',getdate());

select DATEDIFF(month,'2024-01-01',getdate());

select format(getdate(),'dd/MM/yyyy');


select format(getdate(),'dd/MMM/yyyy');



create database new2;

use new2;

create table employees(EmployeeID integer,FirstName varchar(20),LastName varchar(20));

select * from employees;

insert into employees(EmployeeID,FirstName,LastName)values(1,'John','Doe');

insert into employees(EmployeeID,FirstName,LastName)values(2,'Jane','Smith');


insert into employees(EmployeeID,FirstName,LastName)values(3,'Alice','Johnson');

create table products(ProductID integer,ProductName varchar(20),ProductDescription nvarchar);

insert into products(ProductID,ProductName,ProductDescription)values(101,'Widget A','A standard widget');


insert into products(ProductID,ProductName,ProductDescription)values(102,'Gadget B','A fancy new gadget');

insert into products(ProductID,ProductName,ProductDescription)values(103,'Thingamajig','A very useful tool');

select * from products;

create table SalesOrders(SalesOrderID integer,OrderDate datetime,TotalAmount float);

insert into SalesOrders(SalesOrderID,OrderDate,TotalAmount)values(1001,'2023-01-15 14:33:00',150.00);

insert into SalesOrders(SalesOrderID,OrderDate,TotalAmount)values(1002,'2023-03-22 10:45:00',200.00);

insert into SalesOrders(SalesOrderID,OrderDate,TotalAmount)values(1003,'2024-05-17 09:20:00',350.00);


select * from SalesOrders;

drop table SalesOrders;

create table Customers(CustomerID integer,CustomerName varchar(20),	Address text);

insert into Customers(CustomerID,CustomerName,Address)values(201,'Acme Corp	123',' Main St');

insert into Customers(CustomerID,CustomerName,Address)values(202,'Globex Inc','456 Elm St');

insert into Customers(CustomerID,CustomerName,Address)values(203,'Initech','789 Oak St');

drop table Customers;

select ProductID,ProductName,len(ProductDescription) As DescriptionLength from products;

drop table products;

create table product2(ProductID integer,ProductName varchar(20),ProductDescription varchar(200));

insert into product2(ProductID,ProductName,ProductDescription)values(101,'Widget A','A standard widget');


insert into product2(ProductID,ProductName,ProductDescription)values(102,'Gadget B','A fancy new gadget');

insert into product2(ProductID,ProductName,ProductDescription)values(103,'Thingamajig','A very useful tool');


--Exercise 2: Product Description Length

--Scenario: You need to find the length of the product descriptions.


select ProductID,ProductName,len(ProductDescription) as DescriptionLength from product2;


---Exercise 1: Employee Full Name

---Scenario: You need to create a list of employees with their full names in uppercase



select EmployeeID ,upper(FirstName+' '+LastName) as FullName from employees;





create table SalesOrder(SalesOrderID integer,OrderDate datetime,TotalAmount float);

insert into SalesOrder(SalesOrderID,OrderDate,TotalAmount)values(1001,'2023-01-15 14:33:00',150.00);

insert into SalesOrder(SalesOrderID,OrderDate,TotalAmount)values(1002,'2023-03-22 10:45:00',200.00);

insert into SalesOrder(SalesOrderID,OrderDate,TotalAmount)values(1003,'2024-05-17 09:20:00',350.00);

select * from SalesOrder;

 drop table SalesOrder;

---Exercise 3: Sales Date Formatting

---Scenario: You need to display sales order dates in the YYYY-MM-DD format.


select SalesOrderID,format(OrderDate,'yyyy-MM-dd') from SalesOrder;












---Exercise 4: Customer Address Cleanup
---Scenario: You need to remove leading and trailing spaces from the customer addresses.

create table Customer(CustomerID integer,CustomerName varchar(20),	Address varchar(20));

insert into Customer(CustomerID,CustomerName,Address)values(201,'Acme Corp','123 Main St');

insert into Customer(CustomerID,CustomerName,Address)values(202,'Globex Inc','456 Elm St');

insert into Customer(CustomerID,CustomerName,Address)values(203,'Initech','789 Oak St');

select * from Customer;

select CustomerID,CustomerName,LTRIM(Address) as CleanedAddress from Customer;

---Exercise 5: Sales Summary by Year

---Scenario: You need to show the total sales amount for each year.


create table sales(SalesOrderID integer,OrderDate datetime,TotalAmount decimal);

insert into sales(SalesOrderID,OrderDate,TotalAmount)values(1001,'2023-01-15 14:33:00',150.00);

insert into sales(SalesOrderID,OrderDate,TotalAmount)values(1002,'2023-03-22 10:45:00',200.00);

insert into sales(SalesOrderID,OrderDate,TotalAmount)values(1003,'2024-05-17 09:20:00',350.00);

select * from sales;

select DATEPART(year,OrderDate) as Year , sum(TotalAmount) as TotalSales from sales group by DATEPART(year,OrderDate);




---Exercise 1: Employee Full Name and Department
---Scenario: Create a list of employees with their full names in uppercase and their department names. Ensure the full name is in uppercase and the department name is in lowercase.




select * from employees;

alter table employees add DepartmentID integer;

update employees set DepartmentID ='101' where FirstName='John';
update employees set DepartmentID ='102' where FirstName='Jane';
update employees set DepartmentID ='103' where FirstName='Alice';

select * from employees;

create table Department(DepartmentID integer,DepartmentName varchar(20));

insert into Department(DepartmentID,DepartmentName)values(101,'Sales');

insert into Department(DepartmentID,DepartmentName)values(102,'Engineering');

insert into Department(DepartmentID,DepartmentName)values(103,'Marketing');

select * from Department;

select * from employees;

select employees.EmployeeID,upper(employees.FirstName+' '+employees.LastName) as FullName,Department.DepartmentName from employees,Department where employees.DepartmentID=Department.DepartmentID;


---Exercise 2: Product Description Analysis
---Scenario: Find the products where the description length is more than 15 characters. Additionally, reverse the product descriptions and show the first 10 characters of the reversed description.


select * from product2;


----Exercise 3: Sales Analysis by Customer and Year
---Scenario: Write a query to display the total sales amount for each customer for each year. Additionally, include the customer's name with trailing spaces removed and format the total sales amount to two decimal places.

select * from sales;
select * from Customer;

alter table sales add CustomerID integer;

update sales set CustomerID ='201' where SalesOrderID='1001';
update sales set CustomerID ='202' where SalesOrderID='1002';
update sales set CustomerID ='203' where SalesOrderID='1003';

select employees.CustomerID,Customer.CustomerName,DATEPART(year,Sales.OrderDate) as Year sales.TotalAmount as TotalSales where sales.customerID=Customer.CustomerID;


-- 3rd

-- Add CustomerID column to SalesOrders table
ALTER TABLE SalesOrders
ADD CustomerID INT;

-- Update CustomerID values based on SalesOrderID
UPDATE sales
SET CustomerID = (
  SELECT CustomerID
  FROM Customers
  WHERE Customers.CustomerID = SalesOrders.CustomerID
);
truncate table SalesOrders;
-- Insert sample data into SalesOrders table
INSERT INTO SalesOrders (SalesOrderID, CustomerID, OrderDate, TotalAmount)
VALUES
  (1001, 201, '2023-01-15 14:33:00', 150.00),
  (1002, 202, '2023-03-22 10:45:00', 200.00),
  (1003, 201, '2024-05-17 09:20:00', 350.00);

  select sales.CustomerID,Customer.CustomerName,datepart(year,sales.OrderDate) as Year,sales.TotalAmount as TotalSales from Sales,Customer
  where sales.CustomerID = Customer.CustomerID ;

 --- Exercise 5: Detailed Sales Report
---Scenario: Write a query to generate a detailed sales report. Include the sales order ID, customer name (without leading or trailing spaces), formatted order date (YYYY-MM-DD), and the total amount formatted to two decimal places.

select sales.SalesOrderID,Customer.CustomerName,sales.OrderDate as FormattedOrderDate,sales.TotalAmount from sales,customer where sales.CustomerID=Customer.CustomerID;


---Exercise 4: Enhanced Product Search
---Scenario: Write a query to find products where the description contains the word "useful" and replace the word "useful" with "beneficial". Return the product ID, product name, and modified description.

select * from product2;

SELECT
  product2.ProductID,
  product2.ProductName,
  REPLACE(product2.ProductDescription, 'useful', 'beneficial') AS ModifiedDescription
FROM
  product2
WHERE
  product2.ProductDescription LIKE '%useful%'


 --- Exercise 2: Product Description Length
---Scenario: You need to find the length of the product descriptions.

 select ProductID, ProductName, LEN(ProductDescription), REVERSE(ProductDescription)
  from product2


```
