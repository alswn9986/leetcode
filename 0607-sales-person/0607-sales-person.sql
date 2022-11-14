# Write your MySQL query statement below
SELECT
    S.NAME
FROM
    SalesPerson S
WHERE
    sales_id NOT IN
    (
        SELECT O.sales_id 
        FROM Orders O
        LEFT OUTER JOIN Company C
        ON C.com_id = O.com_id
        WHERE C.NAME = 'RED'
    )
    