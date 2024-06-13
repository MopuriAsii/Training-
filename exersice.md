## TASK 1:

1. Find the title of each film

```sql

Select title From movies;

```

2.Find the director of each film

```sql

Select Director From movies;

```

3.Find the title and director of each film

```sql

Select Title,Director From movies;

```

4.Find the title and year of each film

```sql

Select Title,Year From movies;

```

5.Find all the information about each film

```sql

Select * From movies;

```

![alt text](<Screenshot (54).png>)

## TASK 2

1. Find the movie with a row id of 6

```SQL
SELECT * FROM movies WHERE id=6 ;
```

2. Find the movies released in the years between 2000 and 2010

```SQL
SELECT * FROM movies WHERE YEAR BETWEEN 2000 AND 2010 ;
```

3. Find the movies not released in the years between 2000 and 2010

```SQL
SELECT * FROM movies WHERE YEAR NOT BETWEEN 2000 AND 2010 ;

```

4. Find the first 5 Pixar movies and their release year

```SQL
SELECT Title,YEAR FROM movies WHERE id BETWEEN 1 AND 5 ;


```

![alt text](<Screenshot (56).png>)

## TASK 3

1. Find all the Toy Story movies

```SQL
SELECT Title FROM movies Where Title LIKE "%Toy Story%";
```

2. Find all the movies directed by John Lasseter

```SQL
SELECT title FROM movies WHERE director="John Lasseter";
```

3. Find all the movies (and director) not directed by John Lasseter

```SQL
SELECT title FROM movies WHERE NOT director="John Lasseter";

```

4. Find all the WALL-\* movies

```SQL
SELECT * FROM movies where title LIKE "WALL-_";
```

![alt text](<Screenshot (60).png>)

## TASK 4:

1.List all directors of Pixar movies (alphabetically), without duplicates

```sql

SELECT DISTINCT Director

FROM movies

Order By Director ASC;

```

2.List the last four Pixar movies released (ordered from most recent to least)

```sql

SELECT Title

FROM movies

Order By Year DESC Limit 4;

```

3.List the first five Pixar movies sorted alphabetically

```sql

SELECT Title

FROM movies

Order By Title ASC Limit 5;

```

4.List the next five Pixar movies sorted alphabetically

```sql

SELECT title FROM movies

ORDER BY title ASC

LIMIT 5 OFFSET 5;

```

![alt text](<Screenshot (65).png>)

# TASK:

1. List all the Canadian cities and their populations

```sql

Select city,population from North_american_cities where country="canada"

```

2. Order all the cities in the United States by their latitude from north to south

```sql

SELECT city FROM north_american_cities where country="United States" ORDER BY latitude DESC;

```

3. List all the cities west of Chicago, ordered from west to east

```sql

SELECT city FROM north_american_cities where longitude<-87.629798 ORDER BY longitude ;



```

4. List the two largest cities in Mexico (by population)

```sql

SELECT city FROM north_american_cities WHERE country="Mexico" ORDER BY population DESC LIMIT 2;

```

5. List the third and fourth largest cities (by population) in the United States and their population

```sql

SELECT city FROM north_american_cities WHERE country="United States" ORDER BY population DESC LIMIT 2 Offset 2

```

Exercise 6 — Tasks

1. Find the domestic and international sales for each movie

```sql
SELECT \* FROM movies
Inner Join Boxoffice
ON movies.id = Boxoffice.Movie.id

2. Show the sales numbers for each movie that did better internationally rather than domestically

SELECT \* FROM movies
Inner join Boxoffice On id = MOvie_id
Where International_sales >Domestic_sales
```

Exercise 7 — Tasks

1. Find the list of all buildings that have employees

```sql
SELECT Distinct Building FROM employees;
```

2. Find the list of all buildings and their capacity

```sql

SELECT * FROM Buildings;
```

3. List all buildings and the distinct employee roles in each building (including empty buildings)

```sql

SELECT Distinct Building_name,Role From Buildings Left JOin Employees on Buildings.Building_name=Employees.Building

```

Exercise 8 — Tasks

1. Find the name and role of all employees who have not been assigned to a building

```sql
select name,role from Employees WHERE Building IS  NULL
```

2. Find the names of the buildings that hold no employees

```sql
SELECT Building_name From Buildings LEFT JOIN Employees On Buildings.Building_name= Employees.Building Where Years_employed is null
```

Exercise 9 — Tasks

1. List all movies and their combined sales in millions of dollars

```sql

SELECT title,(Domestic_sales+International_sales)/1000000 FROM Movies Inner join Boxoffice on Movies.Id= Boxoffice.Movie_id;
```

2. List all movies and their ratings in percent

```sql

SELECT title,rating*10 FROM Movies Inner join Boxoffice on Movies.Id= Boxoffice.Movie_id;
```

3. List all movies that were released on even number years

```sql

SELECT title from movies where year%2==0

```

Exercise 10 — Tasks

1. Find the longest time that an employee has been at the studio

```sql

SELECT Years_employed FROM employees ORDER BY Years_employed DESC limit 1;

SELECT MAX(Years_employed) FROM employees;

```

2. For each role, find the average number of years employed by employees in that role

```sql

SELECT avg(Years_employed),role FROM employees GROUP BY ROLE;

```

3. Find the total number of employee years worked in each building

```sql

SELECT sum(Years_employed),building FROM employees GROUP BY Building;

```

Exercise 11 — Tasks

1. Find the number of Artists in the studio (without a HAVING clause)

```sql

SELECT count(*) FROM employees WHERE ROLE="Artist";

```

2. Find the number of Employees of each role in the studio

```sql

SELECT role,count() FROM employees GROUP BY role ;

```

3. Find the total number of years employed by all Engineers

```sql

SELECT sum(Years_employed) FROM employees where role="Engineer";

```

Exercise 12 — Tasks

1. Find the number of movies each director has directed

```sql

SELECT *,count(title) FROM movies Group by Director;

```

2. Find the total domestic and international sales that can be attributed to each director

```sql

SELECT Director,sum(Domestic_sales+International_sales) FROM movies inner join  Boxoffice on Movies.id= Boxoffice.Movie_id Group by Director;

```

Exercise 13 — Tasks

1. Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)

Insert into Movies(id,Title,Director,Year,Length_minutes)values(16,"Toy Story 5","John Lasseter",2023,80);

2. Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table

Insert into Boxoffice(Movie_id,Rating,Domestic_sales,International_sales)values(15,8.7,340000000,270000000);

Exercise 14 — Tasks

1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter

```sql
Update Movies SET Director=" John Lasseter" Where Title="A Bug's Life" ;
```

2. The year that Toy Story 2 was released is incorrect, it was actually released in 1999

```sql

UPDATE movies
SET year = 1999
WHERE id = 3;
```

3. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich

```sql
Update Movies set Title="Toy Story 3",Director="Lee Unkrich" where id=11;
```

Exercise 15 — Tasks

1. This database is getting too big, lets remove all movies that were released before 2005.

```sql

DELETE FROM MOVIES WHERE YEAR<2005;

```

2. Andrew Stanton has also left the studio, so please remove all movies directed by him.

```sql

DELETE FROM Movies WHERE Director="Andrew Stanton";

```

Exercise 16 — Tasks

1. Create a new table named Database with the following columns:
   – Name A string (text) describing the name of the database
   – Version A number (floating point) of the latest version of this database
   – Download_count An integer count of the number of times this database was downloaded
   This table has no constraints.

```sql

Create table Database(Name varchar(20),Version Float,Download_count integer);

```

Exercise 17

1. Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in

```sql

Alter Table Movies ADD Aspect_ratio Float;

```

2. Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English.

```sql

ALTER TABLE Movies ADD Language TEXT DEFAULT 'English';

```

Exercise 18 — Tasks

1. We've sadly reached the end of our lessons, lets clean up by removing the Movies table

```sql

DROP TABLE Movies;

```

2. And drop the BoxOffice table as well

```sql

DROP TABLE BoxOffice;

```
