# Write your MySQL query statement below
SELECT name, population, area
FROM World
WHERE
    1=1
    AND (AREA >= 3000000
    OR POPULATION >= 25000000)