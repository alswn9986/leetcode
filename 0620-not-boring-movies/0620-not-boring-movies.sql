# Write your MySQL query statement below
SELECT *
FROM Cinema
WHERE
    ID % 2 != 0
    AND description != 'boring'
ORDER BY RATING DESC