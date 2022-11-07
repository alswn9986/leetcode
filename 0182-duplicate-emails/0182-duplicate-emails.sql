# Write your MySQL query statement below
SELECT email
FROM (
    SELECT email, count(*) cnt
    FROM Person
    GROUP BY email  
) P
WHERE cnt > 1